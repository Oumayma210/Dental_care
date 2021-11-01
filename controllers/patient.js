const Patient = require("../models/Patient");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
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
        res.status(200).send({ msg: "signup successfullu", patient: newPatient, token });
    } catch (error) {
        res.status(400).send({ msg: "Nickname should be unique" });
    }
};
//signin
exports.signin = async (req, res) => {
    try {
        const { nickname, password } = req.body;
        const foundPatient = await Patient.findOne({ nickname });
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
        res.status(200).send({ msg: "login successfully", patient: foundPatient,token });
    } catch (error) {
        res.status(400).send({ msg: "cannot login" });
    }
};
//