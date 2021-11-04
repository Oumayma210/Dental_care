// require jwt
const jwt = require("jsonwebtoken");
//require schema
const Patient = require("../models/Patient");
//is auth or not
const isAuth = async (req, res, next) => {
    try {
        const token = req.header("Authorization");
        if (!token) {
            res.status(401).send({ errors: [{ msg: "not authorized" }] });
        }
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        const foundPatient = await Patient.findOne({ _id: decoded.id });
        if (!foundPatient) {
            res.status(401).send({
                errors: [{ msg: "you are not authorized" }],
            });
        }
        req.user = foundPatient;
        next();
    } catch (error) {
        res.status(401).send({ errors: [{ msg: "nnnot authorized" }] });
    }
};
module.exports = isAuth;
