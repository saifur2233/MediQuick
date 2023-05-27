const { default: mongoose } = require("mongoose");
const DrugHandover = require("../models/DrugHandover");
const DrugBasket = require("../models/DrugBasket");
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

  const drugBasket = await DrugBasket.findOne({
    userAddress: senderAddress,
    drugCode: drugCode,
  });
  //console.log(drugBasket);
  if (!drugBasket) {
    return null;
  }
  if (drugBasket.drugQuantity === "0") {
    return null;
  }
  if (drugBasket.drugQuantity < drugQuantity) {
    return null;
  }
  //console.log(drugBasket[0].drugQuantity);
  const quantity = parseInt(drugBasket.drugQuantity) - parseInt(drugQuantity);
  const filter = { userAddress: senderAddress, drugCode: drugCode };
  const update = { drugQuantity: quantity };
  //console.log("Quantity: ", quantity);
  await DrugBasket.findOneAndUpdate(filter, update, {
    new: true,
  });

  const receiverSignature = "";
  const receiverPublicKey = {};
  const status = "Incomplete";
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
    status,
  });

  return drugHandover
    .save()
    .then((data) => res.status(201).json({ data }))
    .catch((error) => res.status(500).json({ error }));
});

exports.checkDrugIsExist = catchAsync(async (req, res, next) => {
  const { senderAddress, drugCode } = req.body;
  let result = false;
  const drugBasket = await DrugBasket.findOne({
    userAddress: senderAddress,
    drugCode: drugCode,
  });
  if (!drugBasket) {
    return res.status(200).send(result);
  }
  if (drugBasket) {
    result = true;
    return res.status(200).send(result);
  }
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
    status: "Complete",
  };
  return DrugHandover.findOneAndUpdate(filter, update, {
    new: true,
  })
    .then((data) => res.status(200).json({ data }))
    .catch((error) => res.status(500).json({ error }));
});
