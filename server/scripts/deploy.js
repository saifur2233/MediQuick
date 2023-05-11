async function main() {
  const AddDrugInfo = await ethers.getContractFactory("AddDrugInfo");
  const DrugSupplyChain = await ethers.getContractFactory("DrugSupplyChain");

  // Start deployment, returning a promise that resolves to a contract object
  const adddrugInfo = await AddDrugInfo.deploy();
  console.log("Contract deployed to address:", adddrugInfo.address);

  const drugSupplyChain = await DrugSupplyChain.deploy();
  console.log("Contract deployed to address:", drugSupplyChain.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
