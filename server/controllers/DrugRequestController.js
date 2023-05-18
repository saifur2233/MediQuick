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
    receiverEmail,
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
    receiverEmail,
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

exports.getAllDrugRequestSender = catchAsync(async (req, res, next) => {
  const senderEmail = req.params.senderEmail;

  return DrugRequest.find({ senderEmail })
    .then((data) => res.status(200).json({ data }))
    .catch((error) => res.status(500).json({ error }));
});

exports.getAllDrugRequestReceiver = catchAsync(async (req, res, next) => {
  const receiverEmail = req.params.receiverEmail;

  return DrugRequest.find({ receiverEmail })
    .then((data) => res.status(200).json({ data }))
    .catch((error) => res.status(500).json({ error }));
});
