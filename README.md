# Smart Contract Winner Event Emitter

This project demonstrates how to emit a smart contract event with different `msg.sender` and `tx.origin` using Solidity, Hardhat, and the Goerli testnet.

## Prerequisites

1.  Node.js (version 12 or higher): [https://nodejs.org/](https://nodejs.org/)
2.  npm (comes with Node.js) or yarn: [https://yarnpkg.com/](https://yarnpkg.com/)

## Installation

1.  Clone the repository:

```shell
git clone <repository_url>
```

2.  Change to the project directory:

```shell
cd <project_directory>
```

3.  Install the required dependencies:

```shell
npm install
```

## Setting up environment variables

1.  Create a `.env` file in the project root directory.
2.  Add the following variables to the `.env` file:

```shell
PRIVATE_KEY=<your_private_key>
GOERLI_URL=<your_goerli_rpc_url>
```

Replace `<your_private_key>` with your Ethereum wallet private key and `<your_goerli_rpc_url>` with an Ethereum RPC URL for the Goerli testnet. You can get a Goerli RPC URL by signing up for a free account on a service like [Infura](https://infura.io/) or [Alchemy](https://www.alchemyapi.io/).

## Deploying contracts

To deploy the `Contract` and `IntermediaryContract` to the Goerli testnet, run:

```shell
npx hardhat run --network goerli scripts/deploy.js
```

This will output the deployed contract addresses. Update the `.env` file with these addresses:

```shell
CONTRACT_ADDRESS=<your_contract_address>
INTERMEDIARY_CONTRACT_ADDRESS=<your_intermediary_contract_address>
```

## Interacting with contracts

To interact with the deployed contracts and emit the Winner event, run:

```shell
npx hardhat run --network goerli scripts/interact.js
```

This will call the `triggerAttempt()` function on the `IntermediaryContract`, which in turn calls the `attempt()` function on the `Contract` and emits the Winner event.

## Running tests

To run the tests for the `Contract` and `IntermediaryContract`, execute:

```shell
npx hardhat test
```

The tests ensure the proper functioning of the smart contracts and their interaction.
