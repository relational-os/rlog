#!/bin/bash
source .env
source .env.local

forge script src/rlog/scripts/DeployRlog.s.sol:DeployRlog --ffi --chain-id $CHAIN_ID --rpc-url $RPC_URL \
  --private-key $DEPLOYER_PRIVATE_KEY --broadcast --verify --etherscan-api-key $ETHERSCAN_API_KEY --gas-price 80000000000

# todo run a script that transforms the json into something nicer