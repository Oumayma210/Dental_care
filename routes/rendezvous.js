//require express
const express = require("express");
const RendezVous = require("../models/RendezVous");
const router = express.Router();
module.exports = router;
/**
 * @desc : add
 * @path : http://localhost:7500/rendezvous
 * @method : POST
 * @data : req.body
 */
router.post("/rendezvous", async (req, res) => {
    try {
        const { PatientId, date } = req.body;
        //handling errors :date is unique
        const rendez = await RendezVous.findOne({ date: date });
        if (rendez) {
            res.status(400).send({ msg: "patient already exist" });
        }
        const newRendezVous = new RendezVous({
            PatientId,
            Date,
        });
        await newRendezVous.save();
        res.status(200).send({
            msg: "Date added succesfully...",
            newRendezVous,
        });
    } catch (error) {
        res.status(400).send({
            msg: "Date reserved",
            error,
        });
    }
});
