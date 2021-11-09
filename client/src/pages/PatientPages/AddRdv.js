import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { addRdv } from "../../JS/actions/doctor";
// import moment from "moment";
const AddRdv = () => {
    const dispatch = useDispatch();
    const [newRendezVous, setNewRendezVous] = useState({
        PatientName: "",
        date: "",
        // médicament: "",
        note: "",
        Numero: "",
        message: "",
    });
    const handleChange = (e) => {
        setNewRendezVous({ ...newRendezVous, [e.target.name]: e.target.value });
    };
    const add = () => {
        dispatch(addRdv(newRendezVous));
    };
    return (
        <div>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    flexWrap: "wrap",
                    width: "500px",
                    paddingLeft: "500px",
                }}
            >
                <h2>Add Rdv page</h2>
                <label htmlFor="PatientName">Patient Name</label>
                <input
                    style={{ width: "400px", textAlign: "center" }}
                    type="text"
                    name="PatientName"
                    value={newRendezVous.PatientName}
                    placeholder="enter the patient Name"
                    onChange={handleChange}
                />
                <label htmlFor="date">Date</label>
                <input
                    style={{
                        width: "400px",
                        textAlign: "center",
                    }}
                    type="text"
                    name="date"
                    value={newRendezVous.date}
                    placeholder="DD-MM HH h"
                    onChange={handleChange}
                />
                <label htmlFor="phone">phone </label>
                <input
                    style={{ width: "400px", textAlign: "center" }}
                    type="tel"
                    name="Numero"
                    value={newRendezVous.Numero}
                    placeholder="Enter you phone"
                    onChange={handleChange}
                />
                <label htmlFor="note">Motif de consultation</label>
                <select style={{ textAlign: "center", width: "400px" }}>
                    <option value="">Choisissez un motif</option>
                    <option value="1">Première consultation dentaire</option>
                    <option value="2">Consultation de suivi dentaire</option>
                    <option value="3">Détartrage </option>
                    <option value="4">Urgence dentaire</option>
                    <input
                        style={{ width: "400px", textAlign: "center" }}
                        type="string"
                        name="note"
                        value={newRendezVous.note}
                        placeholder="Choisissez un motif"
                        onChange={handleChange}
                    />
                </select>
                <label htmlFor="Date de Naissance ">Date de Naissance</label>
                <input
                    style={{ width: "400px", textAlign: "center" }}
                    type="date"
                    name="message"
                    value={newRendezVous.message}
                    placeholder="Date de naissance"
                    onChange={handleChange}
                />
                {/* <label htmlFor="note">Note</label>
                <input
                    style={{ width: "400px", textAlign: "center" }}
                    type="text"
                    name="note"
                    value={newRendezVous.note}
                    placeholder="note"
                    onChange={handleChange}
                /> */}
                <br />
                <Link to="/">
                    <Button onClick={() => add()}>Envoyer</Button>
                </Link>
            </div>
        </div>
    );
};

export default AddRdv;
