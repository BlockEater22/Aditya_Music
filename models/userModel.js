const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema(
  {
    full_name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      validate: {
        validator: validator.isEmail,
        message: "{VALUE} Entered Invalid Email",
      },
    },
    password: {
      type: String,
      required: true,
    },
    user_role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    accessToken: {
      type: String,
      default: "",
    },
    refreshToken: {
      type: String,
      default: "",
    },
    remoteAddress: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

var userMod = mongoose.model("user", userSchema);
module.exports = {
  userMod: userMod,
};
