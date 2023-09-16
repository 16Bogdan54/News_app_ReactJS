const express = require("express");
const AuthController = require("../../controllers/auth_controller");
const { validationBody, authenticate } = require("../../middlewares");
const { userSchemas } = require("../../schemas/user");
const router = express.Router();

router.post(
  "/signup",
  validationBody(userSchemas.signupSchema),
  AuthController.registration
);

router.post(
  "/login",
  validationBody(userSchemas.loginSchema),
  AuthController.login
);

router.post(
  "/token",
  validationBody(userSchemas.refreshTokenSchema),
  AuthController.refresh
);

router.get("/current", authenticate, AuthController.getCurrent);
router.get("/logout", authenticate, AuthController.logout);

router.put(
  "/update",
  validationBody(userSchemas.updateUserSchema),
  AuthController.updateUser
);

router.get("/verify/:verificationToken", AuthController.verify);
router.post("/verify", AuthController.reverify);

module.exports = router;
