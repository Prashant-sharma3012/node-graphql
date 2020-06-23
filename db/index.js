const env = process.env.NODE_ENV || "development";
const config = require("../config/config.json")[env];
const MongoClient = require("mongodb").MongoClient;
const logger = require("../utils/logger");

// Connection URL
const dbUrl = config.dbUrl;
// Database Name
const dbName = config.database;

let db = {};

// Use connect method to connect to the server
const connect = async () => {
  logger.info("Connecting to DB");

  try {
    client = await MongoClient.connect(dbUrl);

    logger.info("Connected to DB");
    db = client.db(dbName);
    
    return Promise.resolve(true);
  } catch (err) {
    logger.error(err);
    return Promise.reject(false);
  }
};

module.exports = { instance: db, connect };
