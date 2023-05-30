const { default: mongoose } = require("mongoose");
const Drug = require("../models/DrugBasket");
const catchAsync = require("../utils/catchAsync");
const PythonShell = require("python-shell").PythonShell;

exports.searchDrugByDrugCode = catchAsync(async (req, res, next) => {
  const drugCode = req.params.drugCode;

  return Drug.find({ drugCode })
    .then((drug) => res.status(200).json({ drug }))
    .catch((error) => res.status(500).json({ error }));
});

exports.testdata = catchAsync(async (req, res, next) => {});

exports.getDrugJourneyDetails = catchAsync(async (req, res, next) => {
  const drugCode = req.params.drugCode;
  return Drug.find({ drugCode })
    .select("userName userType")
    .then((info) => res.status(200).send(info))
    .catch((error) => res.status(500).json({ error }));
});
