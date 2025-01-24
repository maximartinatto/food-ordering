const mongoose  = require("mongoose")

const mongodbUrl = "mongodb+srv://martinattomaximiliano:dOCCfrCovee3ZHgn@cluster0.rf5ry.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"


async function connectDB(){
    return mongoose.connect(mongodbUrl)
}

module.exports = connectDB;