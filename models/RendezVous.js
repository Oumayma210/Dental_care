//require mongoose
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const RendezSchema = new Schema({
    PatientId: {
        type: String,
    },
    date: {
        type: String,
    },
});
module.exports = RendezVous = mongoose.model("rendez", RendezSchema);
