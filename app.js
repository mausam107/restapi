const express = require("express");
const app = express();
const userRoute = require("./api/routes/user");
const productRoute = require("./api/routes/product");
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const CORS = require('cors');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI);
mongoose.connection.on('error',err=>{
    console.log('Connection failed');
});

mongoose.connection.on('connected',connected=>{
    console.log('connected with database');
})
app.use(CORS());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use("/user", userRoute);
app.use("/product", productRoute);

app.use((req, res, next) => {
  res.status(404).json({
    error: "Bad request",
  });
});

app.listen(process.env.PORT || 3000,()=>{
  console.log('connected!');
});

module.exports = app;
