const emailRegex =
  /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
const passwordRegex = /^\S*$/;

module.exports = { emailRegex, passwordRegex };
