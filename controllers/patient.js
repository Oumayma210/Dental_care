const Patient = require("../models/Patient");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const RendezVous = require("../models/RendezVous");
//signup
exports.signup = async (req, res) => {
    try {
        const { name, email, password, nickname, age, phone } = req.body;
        const foundPatient = await Patient.findOne({ email });
        if (foundPatient) {
            return res
                .status(400)
                .send({ errors: [{ msg: "email should be unique" }] });
        }
        //bcrypt:to hash the password
        const saltRounds = 10;
        const hashedpassword = await bcrypt.hash(password, saltRounds); //degree de hashage
        const newPatient = new Patient({ ...req.body });
        newPatient.password = hashedpassword;
        await newPatient.save();
        //creation token
        const token = jwt.sign(
            {
                id: newPatient._id,
            },
            process.env.SECRET_KEY,
            { expiresIn: "48h" }
        );
        res.status(200).send({
            msg: "signup successfullu",
            patient: newPatient,
            token,
        });
    } catch (error) {
        res.status(400).send({ msg: "Nickname should be unique" });
    }
};
//signin
exports.signin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const foundPatient = await Patient.findOne({ email });
        if (!foundPatient) {
            res.status(400).send({ errors: [{ msg: "Bad Credentiel" }] });
        }
        const checkPassword = await bcrypt.compare(
            password,
            foundPatient.password
        );
        if (!checkPassword) {
            res.status(400).send({ errors: [{ msg: "Bad Credentiel" }] });
        }
        const token = jwt.sign(
            {
                id: foundPatient._id,
            },
            process.env.SECRET_KEY,
            { expiresIn: "1h" }
        );
        res.status(200).send({
            msg: "login successfully",
            patient: foundPatient,
            token,
        });
    } catch (error) {
        res.status(400).send({ msg: "cannot login" });
    }
};
//prendre rendezvous
/**
 * @desc :  get all rendezvousdisponibles
 * @path : http://localhost:7500/patient
 * @method : GET
 * @data : no data
 */
exports.rendezvous = async (req, res) => {
    try {
        const Rendez = await RendezVous.find();
        res.status(200).send({
            msg: "this the list of available meeting",
            Rendez,
        });
    } catch (error) {
        res.status(400).send({ msg: "failed", error });
    }
};
/**
 * @desc :edit profile
 *@path : http://localhost:7500/patient/:_id
 *@method: PUT
 *@data : req.params.id &req.body
 */
exports.editProfile = async (req, res) => {
    try {
        const { _id } = req.params;
        //bcrypt
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
        const editProfile = await Patient.findOneAndUpdate(
            { _id },
            { $set: { ...req.body, password: hashedPassword } }
        );
        res.status(200).send({ msg: "profile updated" });
    } catch (error) {
        res.status(400).send({
            msg: "cannot edit  this profile",
            error,
        });
    }
};
