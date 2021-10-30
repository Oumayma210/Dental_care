//require express
const express = require("express");
const doctor = require("../controllers/doctor");
const Patient = require("../models/Patient");
const router = express.Router();
router.get("/", doctor.getAllPatient);
module.exports = router;
/**
 * @desc : add patient
 * @path : http://localhost:7500/doctor
 * @method : POST
 * @data : req.body
 */
 router.post("/add", async (req, res) => {
    try {
      const { name, email, password, phone, age } = req.body;
      //handling errors:name and email required
      if (!name.length || !email.length) {
          res.status(400).send({ msg: "name or email are required" });
          return;
      }
      //handling errors :email is unique
      const patient = await Patient.findOne({ email: email });
      if (patient) {
          res.status(400).send({ msg: "patient already exist" });
      }
          const newPatient = new Patient({
              name,
              email,
              password,
              phone,
              age
          });
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
  });
/**
 * @desc :  get one
 * @path : http://localhost:7500/doctor/:id
 * @method : GET
 * @data : req.params.id
 */
 router.get("/:id", async (req, res) => {
    try {
        const patientToGet = await Patient.findOne({ _id: req.params.id });
        res.status(200).send({ msg: "get one patient", patientToGet });
    } catch (error) {
        res.status(400).send({ msg: "failed", error });
    }
});
/**
 * @desc :  delete patient
 * @path : http://localhost:7500/doctor/:id
 * @method : DELETE
 * @data : req.params.id
 */
 router.delete("/:_id", async (req, res) => {
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
});
/**
//  * @desc :edit patientFiche
//  *@path : http://localhost:7500/doctor/:id
//  *@method: PUT
//  *@data : req.params.id &req.body
//  */
//  router.put("/:_id", async (req, res) => {
//     try {
//         const { _id } = req.params;
//         const result = await Contact.findOneAndUpdate(
//             { _id },
//             { $set: { ...req.body } }
//         );
//         res.status(200).send({ msg: "Fiche updated" });
//     } catch (error) {
//         res.status(400).send({
//             msg: "cannot edit this fiche",
//             error,
//         });
//     }
// });
