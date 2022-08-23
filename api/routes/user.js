const express = require("express");
const router = express.Router();

const { postSignupData ,postLoginData} = require("../controllers/formData.controller");

router.post("/signup", postSignupData);
router.post("/login", postLoginData);


module.exports = router;
