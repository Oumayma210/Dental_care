import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { editRDV } from "./../../JS/actions/doctor";
// import { moment } from "moment";

const EditRdv = ({ match }) => {
    const dispatch = useDispatch();

    const [newRendezVous, setNewRendezVous] = useState({
        PatientName: "",
        date: "",
        médicament: "",
        note: "",
        Numero: "",
        message: "",
    });

    const handleChange = (e) => {
        setNewRendezVous({ ...newRendezVous, [e.target.name]: e.target.value });
    };
    const editRendez = () => dispatch(editRDV(match.params.id, newRendezVous));
    console.log(newRendezVous);
    console.log(match.params.id)
    return (
        <div>
            <h2>Edit Rdv</h2>
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
                <label htmlFor="médicament">médicament</label>
                <input
                    style={{ width: "400px", textAlign: "center" }}
                    type="text"
                    name="médicament"
                    value={newRendezVous.médicament}
                    placeholder="médicament"
                    onChange={handleChange}
                />
                <label htmlFor="note">Note</label>
                <input
                    style={{ width: "400px", textAlign: "center" }}
                    type="text"
                    name="note"
                    value={newRendezVous.note}
                    placeholder="note"
                    onChange={handleChange}
                />
                <label htmlFor="Numero">Phone</label>
                <input
                    style={{ width: "400px", textAlign: "center" }}
                    type="tel"
                    name="Numero"
                    value={newRendezVous.Numero}
                    placeholder="enter your phone"
                    onChange={handleChange}
                />
                <label htmlFor="message">message</label>
                <input
                    style={{ width: "400px", textAlign: "center" }}
                    type="text"
                    name="message"
                    value={newRendezVous.message}
                    placeholder="message"
                    onChange={handleChange}
                />
                <Link to="/rdv">
                    <Button onClick={() => editRendez()}>Edit</Button>
                </Link>
            </div>
        </div>
    );
};

export default EditRdv;
