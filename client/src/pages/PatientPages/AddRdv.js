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
        Message: "",
    });
    // const [selected, setSelected] = useState();

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
                    width: "300px",
                    paddingLeft: "500px",
                    textAlign: "center",
                }}
            >
                <div className="Container" id="container">
                    <form>
                        <h2>Prendre Rendez-vous</h2>
                        <label htmlFor="PatientName">Nom:</label>
                        <input
                            type="text"
                            name="PatientName"
                            value={newRendezVous.PatientName}
                            placeholder="enter the patient Name"
                            onChange={handleChange}
                        />
                        <label htmlFor="date">Date du rendez-vous:</label>
                        <input
                            type="text"
                            name="date"
                            value={newRendezVous.date}
                            placeholder="DD-MM HH h"
                            onChange={handleChange}
                        />
                        <label htmlFor="phone">Tél: </label>
                        <input
                            type="tel"
                            name="Numero"
                            value={newRendezVous.Numero}
                            placeholder="Enter you phone"
                            onChange={handleChange}
                        />
                        <label htmlFor="note">Motif de consultation:</label>
                        <select
                            name="note"
                            value={newRendezVous.note}
                            onChange={handleChange}
                        >
                            <option value="Choisissez un motif">
                                Choisissez un motif
                            </option>
                            <option value="Première consultation dentaire">
                                Première consultation dentaire
                            </option>
                            <option value="Consultation de suivi dentaire">
                                Consultation de suivi dentaire
                            </option>
                            <option value="Détartrage">Détartrage </option>
                            <option value="Urgence dentaire">
                                Urgence dentaire
                            </option>
                            <input
                                type="text"
                                name="note"
                                value={newRendezVous.note}
                                placeholder="Choisissez un motif"
                                onChange={handleChange}
                            />
                        </select>
                        <label htmlFor="Date de Naissance ">
                            Date de Naissance:
                        </label>
                        <input
                            type="date"
                            name="Message"
                            value={newRendezVous.Message}
                            placeholder="Date de naissance"
                            onChange={handleChange}
                        />
                        {/* <label htmlFor="note">Note</label>
                <input
                    
                    type="text"
                    name="note"
                    value={newRendezVous.note}
                    placeholder="note"
                    onChange={handleChange}
                /> */}
                        <br />
                        <Link to="/">
                            <Button
                                style={{ textAlign: "center", margin: "20px" }}
                                onClick={() => add()}
                            >
                                Envoyer
                            </Button>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddRdv;
