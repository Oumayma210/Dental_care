//require express
const express = require("express");
const doctor = require("../controllers/doctor");
const router = express.Router();
const isAuthdoc = require("../middleware/authdoc");
const { validation, loginValidation } = require("../middleware/validator");
const patient = require("../controllers/patient");

//doctor
// add doctor
router.post("/add_doctor", doctor.addAdmin);
//signin
router.post("/signin", loginValidation(), validation, doctor.signin);
//current
router.get("/current", isAuthdoc, (req, res) => {
    res.send(req.doctor);
});
//doctor--patient
router.get("/", doctor.getAllPatient);
router.post("/add", doctor.addPatient);
router.post("/addrdv", doctor.addrdv);
router.get("/lrdv", doctor.getAllRendezVous);

//doctor--rendezvous
// router.get("/rdvv", patient.rendezvous);
router.put("/:_id", doctor.editRendez);
router.get("/:id", doctor.getPatient);
router.delete("/:_id", doctor.deletePatient);
router.delete("/deleterdv/:_id", doctor.deleteRDV);
module.exports = router;
