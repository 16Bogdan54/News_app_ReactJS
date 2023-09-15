const jwt = require("jsonwebtoken");
const { UserModel: User } = require("../models/user");
const HttpError = require("./httpError");
const { ACCESS_TOKEN_SECRET_KEY } = process.env;

const authenticate = async (req, res, next) => {
  const { authorization = "" } = req.headers;
  const [bearer, accessToken] = authorization.split(" ");

  if (bearer !== "Bearer") {
    next(HttpError(401));
  }

  try {
    const { id } = jwt.verify(accessToken, ACCESS_TOKEN_SECRET_KEY);
    const user = await User.findById(id);

    if (!user || !user.accessToken) next(HttpError(401));

    req.user = user;

    next();
  } catch {
    next(HttpError(401));
  }
};

module.exports = authenticate;
