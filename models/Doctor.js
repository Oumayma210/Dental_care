//require mongoose
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const doctorSchema = new mongoose.Schema({
    username: String,
    address: String,
    phone: String,
    name: String,
    specialization: String,
    usertype: {
        type: String,
        default: "doctor",
    },
    password: String,
});

module.exports = mongoose.model("doctor", doctorSchema);
