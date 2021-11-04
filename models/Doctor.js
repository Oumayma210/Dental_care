//require mongoose
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const doctorSchema = new mongoose.Schema({
    doctorName: {
        type: String,
        immutable: true,
    },
    email: String,
    phone: Number,
    specialization: String,
    password: String,
    role: String,
});
module.exports = mongoose.model("doctor", doctorSchema);
