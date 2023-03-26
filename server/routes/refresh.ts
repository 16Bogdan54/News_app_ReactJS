import express from "express";
import { handleRefreshToken } from "server/controllers/refreshController";

export const router = express.Router();

router.get("/", handleRefreshToken);
