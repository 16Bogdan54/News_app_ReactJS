const isConfilict = ({ name, code }) => {
  return name === "MongoServerError" && code === 11000;
};

const errorHandler = (error, data, next) => {
  error.status = isConfilict(error) ? 409 : 400;
  next();
};

module.exports = errorHandler;
