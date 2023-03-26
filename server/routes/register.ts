import express from "express";
import { handleNewUser } from "server/controllers/registerController";

export const router = express.Router();

router.post("/", handleNewUser);
