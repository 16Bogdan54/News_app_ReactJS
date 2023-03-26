import express from "express";
import { handleLogin } from "server/controllers/authController";

export const router = express.Router();

router.post("/", handleLogin);
