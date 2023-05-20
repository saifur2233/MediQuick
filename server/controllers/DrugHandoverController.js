const { default: mongoose } = require("mongoose");
const DrugHandover = require("../models/DrugHandover");
const catchAsync = require("../utils/catchAsync");

exports.addDrugHandoverData = catchAsync(async (req, res, next) => {
  const {
    senderName,
    senderType,
    senderAddress,
    senderPublicKey,
    receiverName,
    receiverType,
    receiverAddress,
    drugName,
    drugCode,
    drugDosage,
    drugQuantity,
    mfgDate,
    expDate,
    currentTime,
    senderSignature,
  } = req.body;

  const receiverSignature = "";
  const receiverPublicKey = {};
  const drugHandover = new DrugHandover({
    _id: new mongoose.Types.ObjectId(),
    senderName,
    senderType,
    senderAddress,
    senderPublicKey,
    receiverName,
    receiverType,
    receiverAddress,
    receiverPublicKey,
    drugName,
    drugCode,
    drugDosage,
    drugQuantity,
    mfgDate,
    expDate,
    currentTime,
    senderSignature,
    receiverSignature,
  });

  return drugHandover
    .save()
    .then((data) => res.status(201).json({ data }))
    .catch((error) => res.status(500).json({ error }));
});

exports.getAllSenderDrugHandoverData = catchAsync(async (req, res, next) => {
  const senderAddress = req.params.senderAddress;

  return DrugHandover.find({ senderAddress })
    .then((data) => res.status(200).json({ data }))
    .catch((error) => res.status(500).json({ error }));
});

exports.getAllReceiverDrugHandoverData = catchAsync(async (req, res, next) => {
  const receiverAddress = req.params.receiverAddress;

  return DrugHandover.find({ receiverAddress })
    .then((data) => res.status(200).json({ data }))
    .catch((error) => res.status(500).json({ error }));
});

exports.getDrugHandover = catchAsync(async (req, res, next) => {
  const id = req.params.id;
  return DrugHandover.findById(id)
    .then((data) => res.status(200).send(data))
    .catch((error) => res.status(500).json({ error }));
});

exports.attachSignatureReceiver = catchAsync(async (req, res, next) => {
  const { id, receiverSignature, receiverPublicKey } = req.body;
  const filter = { _id: id };
  const update = {
    receiverPublicKey: receiverPublicKey,
    receiverSignature: receiverSignature,
  };
  return DrugHandover.findOneAndUpdate(filter, update, {
    new: true,
  })
    .then((data) => res.status(200).json({ data }))
    .catch((error) => res.status(500).json({ error }));
});
