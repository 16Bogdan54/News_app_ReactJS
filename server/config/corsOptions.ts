import allowedOrigins from "./allowedOrigins";

const corsOptions: Object = {
  origin: (origin: number, callback: Function) => {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("NOt allowed by CORS"));
    }
  },
  optionSuccessStatus: 200,
};

module.exports = corsOptions;
