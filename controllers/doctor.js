const Doctor = require("../models/Doctor");
const Patient = require("../models/Patient");
const RendezVous = require("../models/RendezVous");
exports.getAllPatient = async (req, res) => {
    const patient = await Patient.find().select();
    res.status(200).json(patient);
};
exports.getAllRendezVous = async (req, res) => {
    const rendezvous = await RendezVous.find().select();
    res.status(200).json(rendezvous);
};
