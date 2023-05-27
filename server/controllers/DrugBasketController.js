const { default: mongoose } = require("mongoose");
const Drug = require("../models/DrugBasket");
const catchAsync = require("../utils/catchAsync");

exports.addDrug = catchAsync(async (req, res, next) => {
  const {
    userName,
    userType,
    userEmail,
    userAddress,
    drugName,
    drugCode,
    drugDosage,
    drugQuantity,
    mfgDate,
    expDate,
  } = req.body;

  const drug = new Drug({
    _id: new mongoose.Types.ObjectId(),
    userName,
    userType,
    userEmail,
    userAddress,
    drugName,
    drugCode,
    drugDosage,
    drugQuantity,
    mfgDate,
    expDate,
    created_At: new Date().toLocaleString(),
    updated_At: new Date().toLocaleString(),
  });

  return drug
    .save()
    .then((drug) => res.status(201).json({ drug }))
    .catch((error) => res.status(500).json({ error }));
});

exports.addDrugToWallet = catchAsync(async (req, res, next) => {
  const {
    userName,
    userType,
    userEmail,
    userAddress,
    drugName,
    drugCode,
    drugDosage,
    drugQuantity,
    mfgDate,
    expDate,
  } = req.body;

  const findDrug = await Drug.findOne({ userAddress, drugCode });
  if (!findDrug) {
    const drug = new Drug({
      _id: new mongoose.Types.ObjectId(),
      userName,
      userType,
      userEmail,
      userAddress,
      drugName,
      drugCode,
      drugDosage,
      drugQuantity,
      mfgDate,
      expDate,
      created_At: new Date().toLocaleString(),
      updated_At: new Date().toLocaleString(),
    });

    return drug
      .save()
      .then((drug) => res.status(201).json({ drug }))
      .catch((error) => res.status(500).json({ error }));
  }
  if (findDrug) {
    const quantity = parseInt(findDrug.drugQuantity) + parseInt(drugQuantity);
    const filter = { userAddress: userAddress };
    const update = {
      drugQuantity: quantity,
      updated_At: new Date().toLocaleString(),
    };
    return Drug.findOneAndUpdate(filter, update, {
      new: true,
    })
      .then((drugs) => res.status(200).send(drugs))
      .catch((error) => res.status(500).json({ error }));
  }
});

exports.getAllDrugsByManufacturer = catchAsync(async (req, res, next) => {
  const address = req.params.address;

  return Drug.find({
    $and: [
      {
        userAddress: address,
      },
      {
        userType: "Manufacturer",
      },
    ],
  })
    .then((drugs) => res.status(200).send(drugs))
    .catch((error) => res.status(500).json({ error }));
});

exports.getAllDrugsByDistributor = catchAsync(async (req, res, next) => {
  const address = req.params.address;
  return Drug.find({
    $and: [
      {
        userAddress: address,
      },
      {
        userType: "Distributor",
      },
    ],
  })
    .then((drugs) => res.status(200).send(drugs))
    .catch((error) => res.status(500).json({ error }));
});

exports.getAllDrugsByRetailer = catchAsync(async (req, res, next) => {
  const address = req.params.address;
  return Drug.find({
    $and: [
      {
        userAddress: address,
      },
      {
        userType: "Retailer",
      },
    ],
  })
    .then((drugs) => res.status(200).send(drugs))
    .catch((error) => res.status(500).json({ error }));
});

exports.getAllDrugsByTransportAgency = catchAsync(async (req, res, next) => {
  const address = req.params.address;
  return Drug.find({
    $and: [
      {
        userAddress: address,
      },
      {
        userType: "TransportAgency",
      },
    ],
  })
    .then((drugs) => res.status(200).send(drugs))
    .catch((error) => res.status(500).json({ error }));
});

exports.searchDrugByDrugCode = catchAsync(async (req, res, next) => {
  const drugCode = req.params.drugId;

  return Drug.find({ drugCode })
    .then((drug) => res.status(200).json({ drug }))
    .catch((error) => res.status(500).json({ error }));
});

exports.searchDrugById = catchAsync(async (req, res, next) => {
  const id = req.params.id;

  return Drug.findById(id)
    .then((drug) => res.status(200).send(drug))
    .catch((error) => res.status(500).json({ error }));
});

exports.deleteDrugByID = catchAsync(async (req, res, next) => {
  const id = req.params.id;
  return Drug.findByIdAndDelete(id)
    .then((drug) =>
      drug
        ? res.status(204).json({ drug, message: "Deleted" })
        : res.status(404).json({ message: "not found" })
    )
    .catch((error) => res.status(500).json({ error }));
});

exports.updateDrugByID = catchAsync(async (req, res, next) => {
  const id = req.params.id;
  return Drug.findByIdAndUpdate(id, req.body)
    .then((drug) =>
      drug
        ? res.status(200).json({ drug, message: "Updated" })
        : res.status(404).json({ message: "not found" })
    )
    .catch((error) => res.status(500).json({ error }));
});
