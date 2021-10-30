const Doctor = require("../models/Doctor");
const Patient = require("../models/Patient");
exports.getAllPatient = async (req, res) => {
    const patient = await Patient.find().select();
    res.status(200).json(patient);
};
