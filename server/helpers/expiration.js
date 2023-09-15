const calculateExpiration = (time) => {
  const t = parseInt(time);
  const unit = time.replace(String(t), "");

  switch (unit) {
    case "h":
      return t * 3600000;
    case "m":
      return t * 60000;
    case "s":
      return t * 1000;
    default:
      return 1000000;
  }
};

module.exports = calculateExpiration;
