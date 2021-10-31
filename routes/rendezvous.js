const express = require("express");
const patient = require("../middleware/patient");
const RendezVous = require("../models/RendezVous");
const router = express.Router();
const moment = require("moment");
module.exports = router;
//datetime format and now!!!
// let now = moment();
// console.log(now.format());

/**
 * @desc : add date
 * @path : http://localhost:7500/rendezvous
 * @method : POST
 * @data : req.body
 */
router.post("/", async (req, res) => {
    try {
        const { PatientId, date } = req.body;
        const rendezvous = await RendezVous.findOne({ date: date });
        if (rendezvous) {
            res.status(400).send({ msg: "date reserved" });
        }
        const newRendezVous = new RendezVous({
            PatientId,
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
});


