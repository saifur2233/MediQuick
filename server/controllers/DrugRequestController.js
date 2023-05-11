const { default: mongoose } = require("mongoose");
const DrugRequest = require("../models/DrugRequest");
const catchAsync = require("../utils/catchAsync");

exports.sendDrugRequest = catchAsync(async (req, res, next) => {
  const {
    senderName,
    senderType,
    senderEmail,
    receiverName,
    receiverType,
    drugName,
    drugDosage,
    drugQuantity,
    currentTime,
  } = req.body;

  const drugRequest = new DrugRequest({
    _id: new mongoose.Types.ObjectId(),
    senderName,
    senderType,
    senderEmail,
    receiverName,
    receiverType,
    drugName,
    drugDosage,
    drugQuantity,
    currentTime,
  });

  return drugRequest
    .save()
    .then((data) => res.status(201).json({ data }))
    .catch((error) => res.status(500).json({ error }));
});
