//require mongoose
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const RendezSchema = new Schema({
    PatientName: String,
    date: Date,
    isReserved: Boolean,
    médicament: String,
    note: String,
});
module.exports = RendezVous = mongoose.model("rendez", RendezSchema);
