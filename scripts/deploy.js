const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  // Deploy Contract
  const Contract = await hre.ethers.getContractFactory("Contract");
  const contract = await Contract.deploy();
  await contract.deployed();
  console.log("Contract deployed to:", contract.address);

  // Deploy IntermediaryContract
  const IntermediaryContract = await hre.ethers.getContractFactory(
    "IntermediaryContract"
  );
  const intermediaryContract = await IntermediaryContract.deploy(
    contract.address
  );
  await intermediaryContract.deployed();
  console.log(
    "IntermediaryContract deployed to:",
    intermediaryContract.address
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
