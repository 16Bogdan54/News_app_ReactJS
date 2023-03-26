import express from "express";
import { handleLogout } from "server/controllers/logoutController";

export const router = express.Router();

router.get("/", handleLogout);
