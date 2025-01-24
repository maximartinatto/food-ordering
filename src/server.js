const { app } = require(".");
const connectDB = require("./config/db.js");

const PORT = 3001

app.listen(PORT, async() => {
    await connectDB()
    console.log("Server is running on port ", PORT);
})