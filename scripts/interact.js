const hre = require("hardhat");
require("dotenv").config();

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  // Replace these addresses with the actual contract addresses obtained from deployment
  const contractAddress = process.env.CONTRACT_ADDRESS;
  const intermediaryContractAddress = process.env.INTERMEDIARY_CONTRACT_ADDRESS;

  // Interact with IntermediaryContract
  const IntermediaryContract = await hre.ethers.getContractFactory(
    "IntermediaryContract"
  );
  const intermediaryContract = IntermediaryContract.attach(
    intermediaryContractAddress
  );
  const tx = await intermediaryContract.triggerAttempt();
  const receipt = await tx.wait();

  // Log the Winner event from the Contract
  const Contract = await hre.ethers.getContractFactory("Contract");
  const contract = Contract.attach(contractAddress);
  const winnerEvent = contract.interface.parseLog(receipt.logs[0]);
  console.log("Winner address:", winnerEvent.args[0]);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
