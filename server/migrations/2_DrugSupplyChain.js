var DrugSupplyChain = artifacts.require("./DrugSupplyChain.sol");

module.exports = function (deployer) {
  deployer.deploy(DrugSupplyChain);
};
