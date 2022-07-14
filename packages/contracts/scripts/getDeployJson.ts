import * as fs from "fs";

// open latest deploy file
const deployJson = JSON.parse(
  fs.readFileSync(`broadcast/deployRlog.s.sol/80001/run-latest.json`).toString()
);

console.log(deployJson);
