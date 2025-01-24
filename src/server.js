const { app } = require(".");
require('dotenv').config()
const connectDB = require("./config/db.js");

const port = process.env.PORT;

app.listen(port, async() => {
    await connectDB()
    console.log("Server is running on port ", port);
})