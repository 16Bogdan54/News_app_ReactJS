const mongoose = require("mongoose");
const brcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { UserModel: User } = require("../models/user");
const { HttpError } = require("../middlewares/httpError");
const {
  generateAccessToken,
  generateRefreshToken,
  calculateExpiresTime,
} = require("../helpers");
const { EXPIRES_IN, REFRESH_TOKEN_SECRET_KEY } = process.env;

class AuthController {
  static async registration(req, res, next) {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (user) {
      next(HttpError(409, "User exists"));
    }

    const hashPassword = await brcrypt.hash(password, 10);
    const verificationToken = mongoose.Types.ObjectId();

    await User.create({
      ...req.body,
      password: hashPassword,
      verificationToken,
    });

    res.status(201).json({
      message: "Account successfully",
    });
  }

  static async login(req, res, next) {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (!user) {
      next(HttpError(409, "Invalid username"));
    }

    const comparePassword = await brcrypt.compare(password, user.password);

    if (!comparePassword) {
      next(HttpError(409, "Password incorrect"));
    }

    if (!user.verify) {
      next(409, "You are not verified");
    }

    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);

    await User.findByIdAndUpdate(user._id, { accessToken, refreshToken });
    const expiresIn = calculateExpiresTime(EXPIRES_IN);

    res.json({
      accessToken,
      refreshToken,
      expiresIn,
      name: user.name,
      email: user.email,
      favorite: user.favorite,
      id: user._id,
    });
  }

  static async logout(req, res) {
    const { _id } = req.user;

    await User.findByIdAndUpdate(_id, {
      accessToken: null,
      refreshToken: null,
    });
    res.json({ message: "Logout success" });
  }

  static async getCurrent(req, res) {
    const { _id, username, displayedName, refreshToken } = req.user;

    const expiresIn = calculateExpiresTime(EXPIRES_IN);
    res.json({ id: _id, username, displayedName, refreshToken, expiresIn });
  }

  static async refresh(req, res, next) {
    const { refreshToken } = req.body;

    if (refreshToken === null) {
      next(HttpError(401));
    }

    const { id, type } = jwt.verify(refreshToken, REFRESH_TOKEN_SECRET_KEY);

    if (type !== "refreshToken") {
      next(HttpError(400, "Type isn't refresh token"));
    }

    const user = await User.findById(id);

    if (
      !user ||
      !user.refreshToken ||
      refreshToken !== String(user.refreshToken)
    ) {
      next(HttpError(401));
    }

    const accessToken = generateAccessToken();

    await User.findByIdAndUpdate(user._id, { accessToken });

    const expiresIn = calculateExpiresTime(EXPIRES_IN);

    res.json({ accessToken, expiresIn });
  }

  static async verify(req, res, next) {
    const { verificationToken } = req.params;
    const user = await User.findOne({ verificationToken });

    if (!user) {
      next(HttpError(404, "User not found"));
    }

    await User.findByIdAndUpdate(user._id, {
      verificationToken: null,
      verify: true,
    });

    res.redirect("http://localhost:5173/\n");
  }

  static async reverify(req, res, next) {
    const { username } = req.body;

    if (!username) {
      next(HttpError(400, "Missing required username"));
    }

    const user = await User.findOne({ username });

    if (!user) {
      next(HttpError(400, "User not registered"));
    }

    if (user.verify) {
      next(HttpError(400, "User already verified"));
    }

    const verificationToken = mongoose.Types.ObjectId();

    await User.findByIdAndUpdate(user._id, { verificationToken });

    res.status(200);
  }
}

module.exports = AuthController;
