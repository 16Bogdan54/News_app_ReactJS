const Joi = require("joi");
const { passwordRegex } = require("../helpers");

const signupSchema = Joi.object({
  username: Joi.string().required(),
  displayedName: Joi.string(),
  password: Joi.string().min(6).max(32).pattern(passwordRegex).required(),
});

const loginSchema = Joi.object({
  password: Joi.string().min(6).max(32).pattern(passwordRegex).required(),
  username: Joi.string().required(),
});

const updateUserSchema = Joi.object({
  username: Joi.string().required(),
  displayedName: Joi.string(),
  password: Joi.string().min(6).max(32).pattern(passwordRegex).required(),
});

const refreshTokenSchema = Joi.object({
  refreshToken: Joi.string().required(),
});

const userSchemas = {
  signupSchema,
  loginSchema,
  updateUserSchema,
  refreshTokenSchema,
};

module.exports = userSchemas;
