// interact.js
const { ethers } = require("hardhat");
const API_KEY = process.env.API_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;

const contract1 = require("../artifacts/contracts/AddDrugInfo.sol/AddDrugInfo.json");
const contract2 = require("../artifacts/contracts/DrugSupplyChain.sol/DrugSupplyChain.json");

// provider - Alchemy
const alchemyProvider = new ethers.providers.AlchemyProvider(
  (network = "goerli"),
  API_KEY
);

// signer - you
const signer = new ethers.Wallet(PRIVATE_KEY, alchemyProvider);

// contract instance
const addDrugContract = new ethers.Contract(
  CONTRACT_ADDRESS,
  contract1.abi,
  signer
);

const drugSupplyContract = new ethers.Contract(
  CONTRACT_ADDRESS,
  contract2.abi,
  signer
);
//console.log(JSON.stringify(addDrugContract.abi));
async function main() {
  console.log("add the transaction...");
  const tx = await drugSupplyContract.addTransaction(
    "Square",
    "Napa",
    "555555555555555555555555555555",
    "0xc77593bd7e77bC84B44882504ffC6ce7753f5B28"
  );
  await tx.wait();
}

main();
