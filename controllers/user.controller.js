const { userMod } = require("../models/userModel");
var validator = require("email-validator");
const bcrypt = require("bcryptjs");
const dotenv = require("dotenv").config();

const jwt = require("jsonwebtoken");

var lowerCaseLetters = /[a-z]/g;
var upperCaseLetters = /[A-Z]/g;
var numbers = /[0-9]/g;

// User Registration
const register = async (req, res) => {
  const { full_name, email, password } = req.body;

  // Validations
  if (full_name == "" || full_name == undefined) {
    return res.status(400).send({
      status: false,
      message: "Full Name is Required!",
    });
  } else if (email == "" || email == undefined) {
    return res.status(400).send({
      status: false,
      message: "Email is Required!",
    });
  } else if (!validator.validate(email)) {
    return res.status(400).send({
      status: false,
      message: "Please enter correct email!",
    });
  } else if (password == "" || password == undefined) {
    return res.status(400).send({
      status: false,
      message: "Password  is required!",
    });
  } else if (
    !password.match(lowerCaseLetters) ||
    !password.match(upperCaseLetters) ||
    !password.match(numbers) ||
    password.length < 6
  ) {
    return res.status(400).send({
      status: false,
      message:
        "Password must have at least 6 characters,at least one Lowercase ,one uppercase and one number!",
    });
  }
  // Checking if user is already exist
  const existingUser = await userMod.findOne({ email: email });
  if (existingUser) {
    res.status(400).send({
      status: false,
      message: "user already exist",
    });
  } else {
    //   hashed password
    const salt = await bcrypt.genSalt(10);
    hashPassword = await bcrypt.hash(password, salt);

    // create new user
    const newUser = await userMod.create({
      email: email.toLowerCase(),
      password: hashPassword,
      full_name: full_name,
    });
    if (newUser) {
      return res.status(201).send({
        success: true,
        message: "Registered Successfully",
      });
    } else {
      return res.status(400).send({
        success: false,
        message: "InValid User Data!",
      });
    }
  }
};

// User Login Api
const login = async (req, res) => {
  const { email, password } = req.body;
  // console.log(email, password);
  try {
    if (!email || !password) {
      return res.status(400).send({
        success: false,
        message: "Please add all fields",
      });
    }
    // Finding email is present in db
    const user = await userMod.findOne({ email });
    if (user == null || user == undefined || user == "") {
      return res.status(400).send({
        success: false,
        message: "email Does Not Match",
      });
    }

    const remoteAddress =
      req.headers["x-forwarded-for"] || req.connection.remoteAddress;
    // Comparing Password and email entered by user and saved in db are same or not
    if (
      (await bcrypt.compare(password, user.password)) &&
      email == user.email
    ) {
      // Finding user in db abd seting access token and refresh token
      const newUser = await userMod.findOneAndUpdate(
        {
          email: email,
        },
        {
          $set: {
            accessToken: accessToken(user._id, user.full_name, user.user_role),
            refreshToken: refreshToken(
              user._id,
              user.full_name,
              user.user_role
            ),
            remoteAddress,
          },
        }
      );
      // console.log("..............", newUser);
      res.status(200).send({
        success: true,
        result: {
          accessToken: accessToken(newUser._id, user.full_name, user.user_role),
          refreshToken: refreshToken(
            newUser._id,
            user.full_name,
            user.user_role
          ),
        },
        message: "login Successfully",
      });
    } else {
      return res.status(400).send({
        success: false,
        message: "Password Does Not Match",
      });
    }
  } catch (error) {
    return res.status(400).send({
      success: false,
      message: "Something went Wrong!",
    });
  }
};

// Creating access token
const accessToken = (id, full_name, role) => {
  return jwt.sign({ id, full_name, role }, process.env.JWT_SECRET, {
    expiresIn: "3h",
  });
};

// Creating Refresh Tokens
const refreshToken = (id, full_name, role) => {
  return jwt.sign({ id, full_name, role }, process.env.JWT_SECRET, {
    expiresIn: "6h",
  });
};

// Updating Access token when it is expired using refresh token
const refresh = async (req, res, next) => {
  const refreshToken = req.body.refreshToken;

  if (!refreshToken || refreshToken === "") {
    return res
      .status(400)
      .send({
        success: false,
        message: "Refresh token not found, login again",
      });
  }

  // If the refresh token is valid, create a new accessToken and return it.
  jwt.verify(refreshToken, process.env.JWT_SECRET, async (err, user) => {
    if (!err) {
      userMod.find({ refreshToken: refreshToken }, async (error, dbUser) => {
        if (!error) {
          if (refreshToken == dbUser[0].refreshToken) {
            const accessToken = jwt.sign(
              { id: user.id, full_name: user.full_name, role: user.user_role },
              process.env.JWT_SECRET,
              {
                expiresIn: "3h",
              }
            );
            await userMod.findOneAndUpdate({
              user: user.id,
              $set: {
                accessToken: accessToken,
              },
            });
            return res
              .status(201)
              .send({
                success: true,
                message: "Successfully Updated AccessToken",
                accessToken,
              });
          } else {
            return res.json({
              success: false,
              message: "Invalid refresh token",
            });
          }
        }
      });
    }
  });
};

module.exports = {
  register,

  login,
  refresh,
};
