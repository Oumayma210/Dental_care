//require express
const express = require("express");
const bcrypt = require("bcrypt");
const { signup, signin } = require("../controllers/patient");
const patient = require("../controllers/patient");
const isAuth = require("../middleware/authpatient");
const {
    registerValidation,
    validation,
    loginValidation,
} = require("../middleware/validator");
//create instance
const router = express.Router();
//Authentification
//sign up
router.post("/signup", registerValidation(), validation, signup);
//sign in
router.post("/signin", loginValidation(), validation, signin);
//current user
router.get("/current", isAuth, (req, res) => {
    res.send(req.user);
});
router.get("/rendezvous", patient.rendezvous);
router.put("/:_id", patient.editProfile);
// router.post("/availablerdv", patient.availablerendezvous);
module.exports = router;
