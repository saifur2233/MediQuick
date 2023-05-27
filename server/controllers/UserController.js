const { default: mongoose } = require("mongoose");
const bcrypt = require("bcrypt");
const catchAsync = require("../utils/catchAsync");
const User = require("../models/User");

exports.updateUserInfo = catchAsync(async (req, res, next) => {
  const email = req.params.email;
  const hashedPass = await bcrypt.hash(req.body.password, 10);
  const filter = { email: email };
  const update = {
    name: req.body.name,
    password: hashedPass,
    phone: req.body.phone,
  };
  return User.findOneAndUpdate(filter, update, {
    new: true,
  })
    .then((user) => res.status(200).send(user))
    .catch((error) => res.status(500).json({ error }));
});
