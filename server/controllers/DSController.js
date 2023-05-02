const { randomBytes } = require("crypto");
const { EdDSA } = require("elliptic");
// Generate a new key pair
const ec = new EdDSA("ed25519");
const key = ec.keyFromSecret(randomBytes(32));

exports.generateSinature = catchAsync(async (req, res, next) => {
  // Sign a message
  const msg = "Hello, world!";
  const signature = key.sign(msg).toHex();
  console.log(`Message: ${msg}`);
  console.log(`Public key: ${publicKey.encode("hex")}`);
  console.log(`Signature: ${signature}`);
});

exports.verifySinature = catchAsync(async (req, res, next) => {
  // Verify a signature
  const publicKey = key.getPublic();
  const isValid = ec.verify(msg, signature, publicKey);
  console.log(`Is valid? ${isValid}`);
});
