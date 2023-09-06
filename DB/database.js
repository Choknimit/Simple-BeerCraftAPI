const mongoose = require('mongoose')
const config = require('./config')

exports.connect = async () => {
    await mongoose.connect(config.DATABASE_URL);
    try {
      console.log("Successfully connected to database ");
    } catch (error) {
      console.log(error);
    }
  };
  