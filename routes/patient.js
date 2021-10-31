//require express
const express = require("express");
const { signup, signin } = require("../controllers/patient");
const isAuth = require("../middleware/patient");
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
//prendre rendezvous
/**
 * @desc :  get all rendezvousdisponibles
 * @path : http://localhost:7500/patient
 * @method : GET
 * @data : no data
 */
router.get("/rendezvous", async (req, res) => {
    try {
        const Rendez = await RendezVous.find();
        res.status(200).send({
            msg: "this the list of available meeting",
            Rendez,
        });
    } catch (error) {
        res.status(400).send({ msg: "failed", error });
    }
});
/**
 * @desc :edit profile
 *@path : http://localhost:5500/patient/:_id
 *@method: PUT
 *@data : req.params.id &req.body
 */
 router.put("/:_id", async (req, res) => {
    try {
        const { _id } = req.params;
        const result = await Patient.findOneAndUpdate(
            { _id },
            { $set: { ...req.body } }
        );
        res.status(200).send({ msg: "profile updated" });
    } catch (error) {
        res.status(400).send({
            msg: "cannot edit  this profile",
            error,
        });
    }
});
module.exports = router;
