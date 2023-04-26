const { default: mongoose } = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const catchAsync = require("../utils/catchAsync");
const User = require("../models/User");
//let { PythonShell } = require("python-shell");

exports.adminSignup = catchAsync(async (req, res, next) => {
  try {
    const { name, address, email, password, userType, phone } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const admin = new User({
      _id: new mongoose.Types.ObjectId(),
      name,
      address,
      email,
      password: hashedPassword,
      userType,
      phone,
    });
    await admin.save();
    res.status(200).json({
      message: "Signup was successful!",
    });
  } catch {
    res.status(500).json({
      message: "Signup failed!",
    });
  }
});

exports.adminSignin = catchAsync(async (req, res, next) => {
  const user = await User.find({ email: req.body.email });
  if (user && user.length > 0) {
    const isValidPassword = await bcrypt.compare(
      req.body.password,
      user[0].password
    );
    if (isValidPassword) {
      // generate token
      const token = jwt.sign(
        {
          email: user[0].email,
        },
        process.env.JWT_SECRET,
        {
          expiresIn: "12h",
        }
      );

      res.status(200).json({
        access_token: token,
        user,
      });
    } else {
      res.status(401).json({
        error: "Authetication failed!",
      });
    }
  } else {
    res.status(401).json({
      error: "Authetication failed!",
    });
  }
});

exports.adminSearch = catchAsync(async (req, res, next) => {
  let data = false;
  const admin = await User.find({ email: req.body.email });
  if (admin && admin.length > 0) {
    const isValidPassword = await bcrypt.compare(
      req.body.password,
      admin[0].password
    );

    if (isValidPassword === false) {
      res.status(200).json({ data });
    } else {
      data = true;
      res.status(200).json({ data });
    }
  } else {
    res.status(200).json({ data });
  }
});

exports.adminSearchByEmail = catchAsync(async (req, res, next) => {
  const user = await User.find({ email: req.params.email });
  res.status(200).json({
    user,
  });
});

//user
exports.userSignup = catchAsync(async (req, res, next) => {
  try {
    const { name, address, email, password, userType, phone } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const digitalSignature =
      "fc258e5e48abd8edf7a227b1525766f4906a851ee6ca24f103dd70d194d04094";

    const user = new User({
      _id: new mongoose.Types.ObjectId(),
      name,
      address,
      email,
      password: hashedPassword,
      userType,
      phone,
      digitalSignature,
    });
    await user.save();
    res.status(200).json({
      message: "Signup was successful!",
    });
  } catch {
    res.status(500).json({
      message: "Signup failed!",
    });
  }
});

exports.userSearch = catchAsync(async (req, res, next) => {
  let data = false;
  const user = await User.find({ email: req.body.email });
  if (user && user.length > 0) {
    const isValidPassword = await bcrypt.compare(
      req.body.password,
      user[0].password
    );

    if (isValidPassword === false) {
      res.status(200).json({ data });
    } else {
      data = true;
      res.status(200).json({ data });
    }
  } else {
    res.status(200).json({ data });
  }
});

exports.userSignin = catchAsync(async (req, res, next) => {
  const user = await User.find({ email: req.body.email });
  if (user && user.length > 0) {
    const isValidPassword = await bcrypt.compare(
      req.body.password,
      user[0].password
    );
    if (isValidPassword) {
      if (req.body.userType === user[0].userType) {
        // generate token
        const token = jwt.sign(
          {
            email: user[0].email,
          },
          process.env.JWT_SECRET,
          {
            expiresIn: "12h",
          }
        );

        res.status(200).json({
          access_token: token,
          user,
        });
      } else {
        res.status(401).json({
          error: "Authetication failed!",
        });
      }
    } else {
      res.status(401).json({
        error: "Authetication failed!",
      });
    }
  } else {
    res.status(401).json({
      error: "Authetication failed!",
    });
  }
});
