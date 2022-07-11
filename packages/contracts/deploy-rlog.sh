# Expects jq to be installed

source .env
source .env.local

if [ -z "$CHAIN_NAME" ]; then
  echo "CHAIN_NAME is not set"
  exit 1
fi

declare -a CONTRACTS=("Page" "Comment" "Tag" "Log")
ALL_DEPLOY="./deploys/$CHAIN_NAME/all.json"

mkdir -p $(dirname $ALL_DEPLOY)
echo "{" > $ALL_DEPLOY

# deploy each contract
echo "==============================================================="
echo "             Deploying Contracts on $CHAIN_NAME..."
echo "===============================================================\n"
for c in ${CONTRACTS[@]}; do
  echo "Deploying $c..."

  PAGE_DEPLOY="./deploys/$CHAIN_NAME/$c.json"
  mkdir -p $(dirname $PAGE_DEPLOY)

  if [ ! -f $PAGE_DEPLOY ] || [ ! -s $PAGE_DEPLOY ]; then
    forge create $c --json --rpc-url=$RPC_URL --private-key=$DEPLOYER_PRIVATE_KEY | jq . > $PAGE_DEPLOY
  fi

  CONTRACT_ADDRESS=$(cat $PAGE_DEPLOY | jq -r ".deployedTo")
  if [ -z $CONTRACT_ADDRESS ]; then
    echo "No contract address found in $PAGE_DEPLOY"
    exit 1
  fi
  echo '\t"'$c'"': '"'$CONTRACT_ADDRESS'",' >> $ALL_DEPLOY
  echo "$c Contract Address: $CONTRACT_ADDRESS\n"
done
echo "}" >> $ALL_DEPLOY
echo "==============================================================="
echo "                     Contracts Deployed"
echo "===============================================================\n\n\n"

echo "Waiting for contracts to be ready..."
# sleep 30

# verify each contract
echo "==============================================================="
echo "             Verifying Contracts on $CHAIN_NAME..."
echo "===============================================================\n"
for c in ${CONTRACTS[@]}; do
  echo "Verifying $c..."

  PAGE_DEPLOY="deploys/$CHAIN_NAME/$c.json"
  CONTRACT_ADDRESS=$(cat $PAGE_DEPLOY | jq -r ".deployedTo")
  if [ -z $CONTRACT_ADDRESS ]; then
    echo "No contract address found in $PAGE_DEPLOY"
    exit 1
  fi

  forge verify-contract --chain $CHAIN_NAME --compiler-version $COMPILER_VERSION $CONTRACT_ADDRESS packages/contracts/src/rlog/$c.sol:$c $ETHERSCAN_API_KEY

  echo "Verified $c: $CONTRACT_ADDRESS\n"
done
echo "==============================================================="
echo "                     Contracts Verified"
echo "==============================================================="


# todo: add in verify here
