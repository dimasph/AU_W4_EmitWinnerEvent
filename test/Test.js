const { expect } = require("chai");

describe("Contract and IntermediaryContract", function () {
  let Contract,
    contract,
    IntermediaryContract,
    intermediaryContract,
    deployer,
    addr1;

  beforeEach(async function () {
    [deployer, addr1] = await ethers.getSigners();

    Contract = await ethers.getContractFactory("Contract");
    contract = await Contract.deploy();
    await contract.deployed();

    IntermediaryContract = await ethers.getContractFactory(
      "IntermediaryContract"
    );
    intermediaryContract = await IntermediaryContract.deploy(contract.address);
    await intermediaryContract.deployed();
  });

  it("Should emit Winner event with IntermediaryContract address", async function () {
    const tx = await intermediaryContract.connect(deployer).triggerAttempt();
    const receipt = await tx.wait();
    const winnerEvent = contract.interface.parseLog(receipt.logs[0]);

    expect(winnerEvent.name).to.equal("Winner");
    expect(winnerEvent.args[0]).to.equal(intermediaryContract.address);
  });

  it("Should fail if msg.sender is equal to tx.origin", async function () {
    await expect(contract.connect(deployer).attempt()).to.be.revertedWith(
      "msg.sender is equal to tx.origin"
    );
  });
});
