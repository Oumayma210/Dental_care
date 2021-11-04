// require jwt
const jwt = require("jsonwebtoken");
//require schema
const Doctor = require("../models/Doctor");
//is auth or not
const isAuthdoc = async (req, res, next) => {
    try {
        const token = req.header("Authorization");
        if (!token) {
            res.status(401).send({ errors: [{ msg: "not authorized" }] });
        }
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        const foundDoctor = await Doctor.findOne({ _id: decoded.id });
        if (!foundDoctor) {
            res.status(401).send({
                errors: [{ msg: "you are not authorized" }],
            });
        }
        req.doctor = foundDoctor;

        next();
    } catch (error) {
        res.status(401).send({ errors: [{ msg: "nnnot authorized" }] });
    }
};
module.exports = isAuthdoc;
