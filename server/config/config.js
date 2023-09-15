const dotenv = require("dotenv").config();

const MONGO_USERNAME = process.env.MONGO_USERNAME;
const MONGO_PASSWORD = process.env.MONGO_PASSWORD;
const MONGO_DB_NAME = process.env.MONGO_DBNAME;

const uri = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@newsappcluster.w8vospq.mongodb.net/${MONGO_DB_NAME}"`;
const port = process.env.PORT || 3001;

const config = {
  db: {
    uri: uri,
  },
  server: {
    port: port,
  },
};

module.exports = config;
