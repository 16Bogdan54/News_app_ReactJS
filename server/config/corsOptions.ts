import { allowedOrigins } from "./allowedOrigins";

export const corsOptions = {
  origin: (origin: number, callback: Function) => {
    if (allowedOrigins.indexOf(String(origin)) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("NOt allowed by CORS"));
    }
  },
  optionSuccessStatus: 200,
};
