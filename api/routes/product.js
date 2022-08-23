const express = require("express");
const router = express.Router();
const checkAuth = require('../middleware/check-auth');
const {
  getProduct,
  postProduct,
  deleteProduct,
  updateProduct,
  getProductId,
} = require("../controllers/product");

router.post("/post",checkAuth,postProduct);
router.delete("/delete/:id",checkAuth, deleteProduct);
router.put("/update/:id",checkAuth, updateProduct);
router.get("/get",checkAuth, getProduct);
router.get("/getId/:id",checkAuth, getProductId);



module.exports = router;
