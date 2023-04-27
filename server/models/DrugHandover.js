const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const DrugHandoverModelSchema = new Schema({
  senderName: String,
  senderType: String,
  senderAddress: String,
  receiverName: String,
  receiverType: String,
  receiverAddress: String,
  drugName: String,
  drugCode: String,
  drugDosage: String,
  drugQuantity: String,
  mfgDate: String,
  expDate: String,
  currentTime: String,
  senderSignature: String,
  receiverSignature: String,
});

const DrugHandoverModel = mongoose.model(
  "DrugHandover",
  DrugHandoverModelSchema
);

module.exports = DrugHandoverModel;
