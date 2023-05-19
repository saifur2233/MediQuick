const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const DrugModelSchema = new Schema({
  userName: String,
  userType: String,
  userEmail: String,
  userAddress: String,
  drugName: String,
  drugCode: String,
  drugDosage: String,
  drugQuantity: String,
  mfgDate: String,
  expDate: String,
  created_At: String,
  updated_At: String,
});

const DrugBasketModel = mongoose.model("DrugBasket", DrugModelSchema);

module.exports = DrugBasketModel;
