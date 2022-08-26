# Expects jq to be installed

source .env
source .env.local

if [ -z "$CHAIN_NAME" ]; then
  echo "CHAIN_NAME is not set"
  exit 1
fi

declare -a CONTRACTS=("Wallet WalletFactory")
ALL_DEPLOY_JSON="deploys/$CHAIN_NAME/all.json"

mkdir -p $(dirname $ALL_DEPLOY_JSON)
echo "{" > $ALL_DEPLOY_JSON

# deploy each contract
echo "==============================================================="
echo "             Deploying Contracts on $CHAIN_NAME..."
echo "===============================================================\n"
for c in ${CONTRACTS[@]}; do
  echo "Deploying $c..."

  DEPLOY_JSON="deploys/$CHAIN_NAME/$c.json"
  mkdir -p $(dirname $DEPLOY_JSON)

  if [ ! -f $DEPLOY_JSON ] || [ ! -s $DEPLOY_JSON ]; then
    forge create $c --json --rpc-url=$RPC_URL --private-key=$DEPLOYER_PRIVATE_KEY | jq . > $DEPLOY_JSON
  fi

  CONTRACT_ADDRESS=$(cat $DEPLOY_JSON | jq -r ".deployedTo")
  if [ -z $CONTRACT_ADDRESS ]; then
    echo "No contract address found in $DEPLOY_JSON"
    exit 1
  fi
  echo '\t"'$c'"': '"'$CONTRACT_ADDRESS'",' >> $ALL_DEPLOY_JSON
  echo "$c Contract Address: $CONTRACT_ADDRESS\n"
done
echo "}" >> $ALL_DEPLOY_JSON
echo "==============================================================="
echo "                     Contracts Deployed"
echo "===============================================================\n\n\n"

# echo "Waiting for contracts to be ready..."
# sleep 30

# verify each contract
echo "==============================================================="
echo "             Verifying Contracts on $CHAIN_NAME..."
echo "===============================================================\n"
for c in ${CONTRACTS[@]}; do
  echo "Verifying $c..."

  DEPLOY_JSON="deploys/$CHAIN_NAME/$c.json"
  CONTRACT_ADDRESS=$(cat $DEPLOY_JSON | jq -r ".deployedTo")
  if [ -z $CONTRACT_ADDRESS ]; then
    echo "No contract address found in $DEPLOY_JSON"
    exit 1
  fi

  forge verify-contract --chain $CHAIN_NAME  --compiler-version $COMPILER_VERSION $CONTRACT_ADDRESS packages/contracts/src/wallet/$c.sol:$c $ETHERSCAN_API_KEY

  echo "Verified $c: $CONTRACT_ADDRESS\n"
done
echo "==============================================================="
echo "                     Contracts Verified"
echo "==============================================================="
