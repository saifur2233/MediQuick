const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const mongoose = require("mongoose");
const config = require("./dbconfig/dbConfig");
const AuthRoute = require("./routes/AuthRoute");
const AdminRoute = require("./routes/AdminRoute");
const ManufacturerRoute = require("./routes/ManufacturerRoute");

const app = express();

// connect to mongodb
mongoose.set("strictQuery", false);
mongoose
  .connect(config.mongo.url, { retryWrites: true, w: "majority" })
  .then(() => {
    console.log("MongoDB is Connected");
  })
  .catch((error) => {
    console.log(error);
  });

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const PORT = process.env.PORT || 4000;

app.get("/", function (req, res) {
  res.send("Hello World!");
});

//auth route
app.use("/api/v1", AuthRoute);
//admin route
app.use("/api/v1", AdminRoute);
//admin route
app.use("/api/v1", ManufacturerRoute);

// Error handling
app.use("*", (req, res, next) => {
  const error = new Error("Url is Not Found on this server.");

  return res.status(404).json({ message: error.message });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
