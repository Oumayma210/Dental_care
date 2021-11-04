const mongoose = require("mongoose");
const connectDB = async () => {
    try {
        await mongoose.connect(
            "mongodb+srv://omayma:123456789oa@cluster0.zilgf.mongodb.net/DOCTOR?retryWrites=true&w=majority"
        );
        console.log("Database connected");
    } catch (error) {
        console.log("Database Failed", error);
    }
};
module.exports = connectDB;
