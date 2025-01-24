const mongoose  = require("mongoose");
require('dotenv').config()

const mongodbUrl = process.env.DB_URL;


async function connectDB(){
    return mongoose.connect(mongodbUrl)
}

module.exports = connectDB;