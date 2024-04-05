const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const Stripe = require("stripe");

const app = express();
app.use(cors());
app.use(express.json({ limit: "10mb" }));
const PORT = process.env.PORT || 5000;

//mongodb connection
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Connect to Database"))
  .catch((err) => console.log(err));

//schema
const userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
  confirmpassword: String,
  image: String,
});

//model

//api
app.get("/", (req, res) => {
  res.send("server is running");
});

const userModel = mongoose.model("user", userSchema); 

//api signup
app.post("/signup", async (req, res) => {
  //console.log(req.body);
  const { email } = req.body;
  const result = await userModel.findOne({ email: email });
  //console.log(result);
  if (result) {
    res.send({ message: "Email id is already registered!", alert: false });
  } else {
    const data = new userModel(req.body);
    await data.save();
    res.send({ message: "Registration is successful!", alert: true });
  } 
});

//api login
app.post("/login", async (req, res) => {
  //console.log(req.body);
  const { email } = req.body;
  const result = await userModel.findOne({ email: email });
  if (result) {
    const dataSend = {
      _id: result._id,
      firstName: result.firstName,
      lastName: result.lastName,
      email: result.email,
      image: result.image,
    };

    //console.log(dataSend);
    res.send({
      message: "Logged in successfully!",
      alert: true,
      data: dataSend,
    });
  } else {
    res.send({
      message: "Please enter valid credentials! OR sign up!",
      alert: false,
    });
  }
});

 
const schemaProduct = mongoose.Schema({
  name: String,
  category: String,
  image: String,
  price: String,
  description: String,
});
const productModel = mongoose.model("product", schemaProduct); 

//save product in data
//api 
app.post("/uploadProduct", async (req, res) => {
  // console.log(req.body)
  const data = await productModel(req.body);
  const datasave = await data.save(); 
  res.send({ message: "Uploaded successfully" });
});

app.get("/product", async (req, res) => {
  const data = await productModel.find({});
  res.send(JSON.stringify(data));
});  

//checkout payment

app.listen(PORT, () => console.log("server is running at port :" + PORT));