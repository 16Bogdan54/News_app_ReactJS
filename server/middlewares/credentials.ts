import { allowedOrigins } from "server/config/allowedOrigins";

export const credentials = (req, res, next) => {
  const origin = req.headers.origin;
  if (allowedOrigins.indexOf(origin)) {
    res.header("Access-Control-Allow-Credentials", true);
  }
  next();
};
