const mongoose = require("mongoose");
const color = require("colors");

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB Connection Success 👍".underline.bgGreen);
    } catch (error) {
        console.log("MongoDB Connection Failed 💥");
        process.exit(1);
    }
};

module.exports = connectDb;
