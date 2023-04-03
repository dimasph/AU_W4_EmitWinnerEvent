// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

interface ITargetContract {
    function attempt() external;
}

contract IntermediaryContract {
    ITargetContract targetContract;

    constructor(address _targetContractAddress) {
        targetContract = ITargetContract(_targetContractAddress);
    }

    function triggerAttempt() external {
        targetContract.attempt();
    }
}

