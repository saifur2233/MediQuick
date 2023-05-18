const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const DrugRequestModelSchema = new Schema({
  senderName: String,
  senderType: String,
  senderEmail: String,
  receiverName: String,
  receiverType: String,
  receiverEmail: String,
  drugName: String,
  drugDosage: String,
  drugQuantity: String,
  currentTime: String,
});

const DrugRequestModel = mongoose.model("DrugRequest", DrugRequestModelSchema);

module.exports = DrugRequestModel;
