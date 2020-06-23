const env = process.env.NODE_ENV || "development";
const config = require("../config/config.json")[env];
const mongoose = require("mongoose");
const logger = require("../utils/logger");

// Connection URL
const dbUrl = config.dbUrl;
// Database Name
const dbName = config.database;

let db = {};

// Use connect method to connect to the server
const connect = async () => {
  try{
    logger.info("Connecting to DB")
    await mongoose.connect(`${dbUrl}/${dbName}`, {useNewUrlParser: true, useUnifiedTopology: true})
    logger.info("Connected to DB")
    return Promise.resolve('')
  }catch(err){
    logger.error(err);
    return Promise.reject('')
  }  
};

module.exports = { instance: db, connect };
