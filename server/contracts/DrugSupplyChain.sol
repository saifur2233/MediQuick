// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.8.2 <0.9.0;

contract DrugSupplyChain {
    struct Transaction {
    uint256 index;
    uint256 timestamp;
    string drugName;
    string drugCode;
    string signature;
    address sender;
    address recipient;
    }
    
    event TransactionAdded(uint256 indexed index,string drugName, string drugCode, string signature, address sender, address recipient);

    Transaction[] chain;
    uint256 chainCount;

    constructor() {
        chainCount = 0;
    }

    function addTransaction(string memory drugName, string memory drugCode, string memory signature, address payable recipient) public {
        chainCount += 1;

        chain.push(
            Transaction(
                chainCount,
                block.timestamp,
                drugName,
                drugCode,
                signature,
                msg.sender,
                recipient
            )
        );

        emit TransactionAdded(chainCount,drugName, drugCode, signature, msg.sender, recipient);
    }

    function getTransaction(uint256 index)
        public
        view
        returns (
            uint256,
            uint256,
            string memory,
            string memory,
            string memory,
            address,
            address
        )
    {
        require(index > 0 && index <= chainCount, "Invalid transaction index");
        Transaction memory transaction = chain[index - 1];
        return (
            transaction.index,
            transaction.timestamp,
            transaction.drugName,
            transaction.drugCode,
            transaction.signature,
            transaction.sender,
            transaction.recipient
        );
    }

    function getTransactionCount() public view returns (uint256) {
        return chainCount;
    }

    function getTransactionsByDrugName(string memory drugName)
        public
        view
        returns (Transaction[] memory)
    {
        uint256 count = 0;
        for (uint256 i = 0; i < chain.length; i++) {
            if (keccak256(bytes(chain[i].drugName)) == keccak256(bytes(drugName))) {
                count++;
            }
        }

        Transaction[] memory transactions = new Transaction[](count);
        uint256 index = 0;
        for (uint256 i = 0; i < chain.length; i++) {
            if (keccak256(bytes(chain[i].drugName)) == keccak256(bytes(drugName))) {
                transactions[index] = chain[i];
                index++;
            }
        }

        return transactions;
    }

    function getTransactionsByDrugCode(string memory drugCode)
        public
        view
        returns (Transaction[] memory)
    {
        uint256 count = 0;
        for (uint256 i = 0; i < chain.length; i++) {
            if (keccak256(bytes(chain[i].drugCode)) == keccak256(bytes(drugCode))) {
                count++;
        }
    }

    Transaction[] memory transactions = new Transaction[](count);
    uint256 index = 0;
    for (uint256 i = 0; i < chain.length; i++) {
        if (keccak256(bytes(chain[i].drugCode)) == keccak256(bytes(drugCode))) {
            transactions[index] = chain[i];
            index++;
        }
    }

    return transactions;
   }

    function getLastTransaction() public view returns (Transaction memory) {
       require(chainCount > 0, "No transactions found");
       return chain[chainCount - 1];
    }
    

    
}