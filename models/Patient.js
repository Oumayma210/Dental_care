//require mongoose
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const patientSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    nickname: {
        type: String,
        unique: true,
        required: true,
    },
    age: Number,
    phone: Number,
});
module.exports = Patient = mongoose.model("patient", patientSchema);
