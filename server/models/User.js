const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserModelSchema = new Schema({
  name: String,
  address: String,
  email: String,
  password: String,
  userType: String,
  phone: String,
});

const UserModel = mongoose.model("User", UserModelSchema);

module.exports = UserModel;
