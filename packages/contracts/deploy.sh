#!/bin/bash
source .env
source .env.local

forge script script/DeployRlog.s.sol:DeployRlog --ffi --chain-id $CHAIN_ID --rpc-url $RPC_URL --broadcast --verify