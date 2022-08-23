const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  code: String,
  title: String,
  mrp: Number,
  discountPercent:Number,
});

module.exports = mongoose.model("Product", productSchema);
