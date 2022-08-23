const User = require("../model/user");
const jwt = require("jsonwebtoken");

// signup request
exports.postSignupData = async (req, res, next) => {
  try {
    const { username, email, phone, password } = req.body;
    const user = await new User({
      username: username,
      email: email,
      password: password,
      phone: phone,
    }).save();
    res.status(200).json({new_user: user,});
  } catch (err) {
    console.log(err.message)
    res.status(500).json({error: err.message,});
  };
};

// login request
exports.postLoginData = async (req, res, next) => {
  try {
    const result = await User.findOne({ email: req.body.email })
    if (result < 1) {
      throw new Error("user not found");
    }
    const token = jwt.sign(
      {
        UserId: result._id
      },
      process.env.JWTSECRET,
      {
        expiresIn: "1h",
      }
    );
    res.status(200).json({Data: result,Token: token,});
  } catch (err) {
    res.status(500).json({error: err.message,});
  };
}