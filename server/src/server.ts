import express from "express";
import path from "path";
import cors from "cors";
import { corsOptions } from "../config/corsOptions";
import { logger } from "../middlewares/logEvents";
import { errorHandler } from "../middlewares/errorHandler";
import { verifyJWT } from "../middlewares/verifyJWT";
import cookieParser from "cookie-parser";
import { credentials } from "../middlewares/credentials";

const app = express();
const PORT = process.env.PORT || 3001;
