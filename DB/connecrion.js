const mongoose = require("mongoose");
const color = require("colors");

const connectDb = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/SNPN-PANEL");
        console.log("MongoDB Connection Success 👍".underline.bgGreen);
    } catch (error) {
        console.log("MongoDB Connection Failed 💥");
        process.exit(1);
    }
};

module.exports = connectDb;
