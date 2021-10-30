const mongoose = require("mongoose");
const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/MYPROJECT");
        console.log("Database connected");
    } catch (error) {
        console.log("Database Failed", error);
    }
};
module.exports = connectDB;
