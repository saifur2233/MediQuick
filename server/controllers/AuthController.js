const { default: mongoose } = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const catchAsync = require("../utils/catchAsync");
const User = require("../models/User");
const { randomBytes } = require("crypto");
const elliptic = require("elliptic");
const ec = new elliptic.eddsa("ed25519");

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
    const { key, publicKey, signature } = generateSinature(address);
    const digitalSignature = signature;
    //console.log("digitalSignature: ", digitalSignature);
    const privatekey = key.secret().toJSON();
    //console.log("pri: ", privatekey.data);
    const user = new User({
      _id: new mongoose.Types.ObjectId(),
      name,
      address,
      email,
      password: hashedPassword,
      userType,
      phone,
      digitalSignature,
      publicKey,
      privatekey: privatekey.data,
    });
    await user.save();
    res.status(200).json({
      message: "Signup was successful!",
    });
  } catch (error) {
    console.log("err: ", error);
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

exports.userAlreadyExist = catchAsync(async (req, res, next) => {
  const userFindByEmail = await User.find({ email: req.body.email });
  if (userFindByEmail) {
    return res.status(200).send(userFindByEmail);
  } else {
    const userFindByAddress = await User.find({ address: req.body.address });
    if (userFindByAddress) {
      console.log(userFindByAddress);
      return res.status(200).send(userFindByAddress);
    } else {
      return res.status(200).send();
    }
  }
});

function generateSinature(address) {
  // Generate a new key pair
  const key = ec.keyFromSecret(randomBytes(32));
  const publicKey = key.getPublic();

  // Sign a message
  const msg = address;
  const signature = key.sign(msg).toHex();

  const resultObj = {
    key,
    publicKey: publicKey,
    signature: signature,
  };
  return resultObj;
}

// Verify a signature
exports.verifyUserDigitalSignature = catchAsync(async (req, res, next) => {
  const { msg, signature, publicKey } = req.body;
  const isValid = ec.verify(msg, signature, publicKey);
  return res.status(200).send(isValid);
});

function verifySignature(msg, signature, publicKey) {
  const isValid = ec.verify(msg, signature, publicKey);
  console.log(`Is valid? ${isValid}`);
}
// const signature =
//   "594702A037C9AC98D0211E35D565D5BEC542A44DDCF557FB5579CA5713F02103C7E3C6C40732A67C3C61C0A1FA8E7E0A3168E7DAF47F84A722595316ABD88302";
// const publicKey = [
//   31, 161, 255, 10, 161, 65, 47, 19, 18, 67, 35, 50, 156, 96, 163, 16, 8, 253,
//   213, 217, 143, 79, 8, 134, 190, 62, 8, 0, 244, 57, 8, 67,
// ];
// verifySignature("saif11@gmail.com", signature, publicKey);
// console.log(typeof publicKey);
exports.getAllUserInfo = catchAsync(async (req, res, next) => {
  return User.find({
    userType: {
      $in: ["Manufacturer", "Distributor", "Retailer", "TransportAgency"],
    },
  })
    .select("-password")
    .then((user) => res.status(200).send(user))
    .catch((error) => res.status(500).json({ error }));
});

exports.getUserByEmail = catchAsync(async (req, res, next) => {
  return User.find({
    email: req.params.email,
  })
    .select("-password")
    .then((user) => res.status(200).send(user))
    .catch((error) => res.status(500).json({ error }));
});
