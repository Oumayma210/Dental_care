//require mongoose
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const RendezSchema = new Schema({
    PatientName: String,
    date: { type: String, required: true },
    // isReserved: Boolean,
    médicament: String,
    note: { type: String, required: true },
    Numero: String,
    Message: String,
});
module.exports = RendezVous = mongoose.model("rendez", RendezSchema);
