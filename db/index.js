const env = process.env.NODE_ENV || 'development';
const config = require('../config/config.json')[env];

const db = {};

const connect = async () => {
  
}

module.exports = { instance: db, connect }