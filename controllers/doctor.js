const Doctor = require("../models/Doctor");
const Patient = require("../models/Patient");
const RendezVous = require("../models/RendezVous");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
exports.addAdmin = async (req, res) => {
    try {
        const { doctorName, email, phone, specialization, password, role } =
            req.body;
        const doctor = await Doctor.findOne({ email: email });
        if (doctor) {
            res.status(400).send({ msg: "doctor already exist" });
        }
        const newDoctor = new Doctor({
            doctorName,
            email,
            phone,
            specialization,
            password,
            role,
        });
        //bcrypt
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        newDoctor.password = hashedPassword;
        await newDoctor.save();
        res.status(200).send({
            msg: "New doctor added succesfully...",
            newDoctor,
        });
    } catch (error) {
        res.status(400).send({
            msg: "New doctor cannot be added",
            error,
        });
    }
};
//signin
exports.signin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const foundDoctor = await Doctor.findOne({ email });
        if (!foundDoctor) {
            res.status(400).send({ errors: [{ msg: "bad credentiallllll" }] });
        }
        const checkPassword = await bcrypt.compare(
            password,
            foundDoctor.password
        );
        if (!checkPassword) {
            res.status(400).send({ errors: [{ msg: "bad credential" }] });
        }

        // creation token
        const token = jwt.sign(
            {
                id: foundDoctor._id,
            },
            process.env.SECRET_KEY,
            { expiresIn: "30d" }
        );

        res.status(200).send({
            msg: "login successfully,welcome",
            doctor: foundDoctor,
            token,
        });
    } catch (error) {
        res.status(400).send({ msg: "cannot login ", error });
    }
};
exports.getAllPatient = async (req, res) => {
    try {
        const patient = await Patient.find();
        res.status(200).send({
            patient,
        });
    } catch (error) {
        res.status(400).send({ msg: "failed", error });
    }
};
// exports.getAllRendezVous = async (req, res) => {
//     const rdv = await RendezVous.find().select();
//     res.status(200).json(rdv);
// };
// exports.getAllRendezVous = async (req, res) => {
//     try {
//         const Rendez = await RendezVous.find();
//         res.status(200).send({
//             msg: "The List of RDV",
//             Rendez,
//         });
//     } catch (error) {
//         res.status(400).send({ msg: "failed", error });
//     }
// };

exports.addPatient = async (req, res) => {
    const { name, email, password, nickname, phone, age } = req.body;
    try {
        const patient = await Patient.findOne({ email: email });
        if (patient) {
            res.status(400).send({ msg: "patient already exist" });
        }
        const newPatient = new Patient({
            name,
            email,
            password,
            nickname,
            phone,
            age,
        });
        //bcrypt
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        newPatient.password = hashedPassword;
        await newPatient.save();
        res.status(200).send({
            msg: "Patient added succesfully...",
            newPatient,
        });
    } catch (error) {
        res.status(400).send({
            msg: "Patient cannot be added",
            error,
        });
    }
};
exports.getPatient = async (req, res) => {
    try {
        const patientToGet = await Patient.findOne({ _id: req.params.id });
        res.status(200).send({ msg: "get one patient", patientToGet });
    } catch (error) {
        res.status(400).send({ msg: "failed", error });
    }
};
exports.deletePatient = async (req, res) => {
    try {
        const { _id } = req.params;
        await Patient.findOneAndDelete({ _id });
        res.status(200).send({ msg: "patient deleted" });
    } catch (error) {
        res.status(400).send({
            msg: "cannot delete this patient",
            error,
        });
    }
};

// exports.getRdv = async (req, res) => {
//     try {
//         const RendezToGet = await Rendez.findOne({ _id: req.params.id });
//         res.status(200).send({ msg: "get one rdv", RendezToGet });
//     } catch (error) {
//         res.status(400).send({ msg: "failed", error });
//     }
// };
//doctor+rendezvous=fiche

exports.editRendez = async (req, res) => {
    try {
        const { _id } = req.params;
        const result = await RendezVous.findOneAndUpdate(
            { _id },
            { $set: { ...req.body } }
        );
        res.status(200).send({ msg: "Fiche updated" });
    } catch (error) {
        res.status(400).send({
            msg: "cannot edit this fiche",
            error,
        });
    }
};
exports.addrdv = async (req, res) => {
    try {
        const { PatientName, date } = req.body;
        const rendezvous = await RendezVous.findOne({ date: date });
        if (rendezvous) {
            res.status(400).send({ msg: "date exist" });
        }
        const newRendezVous = new RendezVous({
            PatientName,
            date,
        });
        await newRendezVous.save();
        res.status(200).send({
            msg: "date added succesfully...",
            newRendezVous,
        });
    } catch (error) {
        res.status(400).send({
            msg: "cannot be added",
            error,
        });
    }
};
