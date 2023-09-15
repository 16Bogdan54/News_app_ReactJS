const mongoose = require("mongoose");
const errorHandler = require("../helpers/mongooseErrorHandler");

const UserSchema = new mongoose.Schema(
  {
    displayedName: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    accessToken: {
      type: String,
      default: null,
    },
    refreshToken: {
      type: String,
      default: null,
    },
    verify: {
      type: Boolean,
      default: false,
    },
    verificationToken: {
      type: String,
      required: [true, "Verify token is required"],
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

UserSchema.post("save", errorHandler);

const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel;
