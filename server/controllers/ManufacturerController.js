const { default: mongoose } = require("mongoose");
const Drug = require("../models/Drug");
const catchAsync = require("../utils/catchAsync");

exports.addDrug = catchAsync(async (req, res, next) => {
  const {
    menufacturerName,
    drugName,
    drugCode,
    drugDosage,
    drugQuantity,
    mfgDate,
    expDate,
  } = req.body;

  const drug = new Drug({
    _id: new mongoose.Types.ObjectId(),
    menufacturerName,
    drugName,
    drugCode,
    drugDosage,
    drugQuantity,
    mfgDate,
    expDate,
  });

  return drug
    .save()
    .then((drug) => res.status(201).json({ drug }))
    .catch((error) => res.status(500).json({ error }));
});

exports.getAllDrugs = catchAsync(async (req, res, next) => {
  return Drug.find()
    .then((drugs) => res.status(200).json({ drugs }))
    .catch((error) => res.status(500).json({ error }));
});

exports.searchDrugByDrugCode = catchAsync(async (req, res, next) => {
  const drugCode = req.params.drugId;

  return Drug.find({ drugCode })
    .then((drug) => res.status(200).json({ drug }))
    .catch((error) => res.status(500).json({ error }));
});
