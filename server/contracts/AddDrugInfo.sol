// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.8.2 <0.9.0;

contract AddDrugInfo {

    struct BlockStruck {
    uint256 index;
    uint256 timestamp;
    string menufacturerName;
    string drugName;
    string drugCode;
    address sender;
    }
    
    event BlockEvent(string menufacturerName, string drugName, string drugCode, address sender);

    BlockStruck[] chain;
    uint256 chainCount;

    constructor() {
        chainCount = 0;
    }

    function addBlockToChain(string memory menufacturerName, string memory drugName, string memory drugCode) public {
        chainCount += 1;

        chain.push(
            BlockStruck(
                chainCount,
                block.timestamp,
                menufacturerName,
                drugName,
                drugCode,
                msg.sender
            )
        );

        emit BlockEvent(menufacturerName, drugName, drugCode, msg.sender);
    }

    function getChain() public view returns (BlockStruck[] memory) {
        return chain;
    }

    function getChainCount() public view returns (uint256) {
        return chainCount;
    }
}