const express = require("express");
const Product = require("../model/product");
const mongoose = require("mongoose");
const product = require("../model/product");
const checkAuth = require('../middleware/check-auth');

// get request
exports.getProduct = async (req, res, next) => {
  try {
    const product1 = await Product.find()
    res.status(200).json({
      Product: product1,
    })
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

exports.getProductId = async (req, res, next) => {
  try {
    const _id = req.params.id;
    const productDetail = await Product.findById(_id)
    res.status(200).json({
      Product: productDetail,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }

}

// post request

exports.postProduct = async (req, res, next) => {
  console.log(req.body);
  try {
    const product = await new Product({
      code: req.body.code,
      title: req.body.title,
      mrp: req.body.mrp,
      discountPercent: req.body.discountPercent,
    }).save()
    console.log(product);
    res.status(200).json({
      newStudent: product
    })
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      error: error.message,
    });
  }
};
// delete request
exports.deleteProduct = async (req, res, next) => {
  try {
    const result = await Product.deleteOne({ _id: req.params.id })
    res.status(200).json({
      message: "product deleted",
      result: result,
    });

  } catch (err) {
    req.status(500).json({
      error: err.message,
    });
  }
}

// put request
exports.updateProduct = async (req, res, next) => {
  // console.log(req.params.id);
  try {
    const result = await Product.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          code: req.body.code,
          title: req.body.title,
          mrp: req.body.mrp,
          discountPercent: req.body.discountPercent,
        },
      }
    )
    res.status(200).json({
      message: console.log("product updated successfully"),
      updated_product: result,
    });
  }
  catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
}


