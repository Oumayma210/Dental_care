import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { editRDV } from "./../../JS/actions/doctor";
import { Link } from "react-router-dom";
const Editmodal = ({ match }) => {
    const dispatch = useDispatch();

    const [newRDV, setNewRDV] = useState({
        PatientName: "",
        date: "",
        médicament: "",
        note: "",
        Numero: "",
        Message: "",
    });

    const handleChange = (e) => {
        setNewRDV({ ...newRDV, [e.target.name]: e.target.value });
    };
    const editRendez = () => dispatch(editRDV(match.params.id, newRDV));
    console.log(newRDV);
    return (
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
                value={newRDV.PatientName}
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
                value={newRDV.date}
                placeholder="DD-MM HH h"
                onChange={handleChange}
            />
            <label htmlFor="médicament">médicament</label>
            <input
                style={{ width: "400px", textAlign: "center" }}
                type="text"
                name="médicament"
                value={newRDV.médicament}
                placeholder="médicament"
                onChange={handleChange}
            />
            <label htmlFor="phone">phone </label>
            <input
                style={{ width: "400px", textAlign: "center" }}
                type="tel"
                name="Numero"
                value={newRDV.Numero}
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
                    type="text"
                    name="note"
                    value={newRDV.note}
                    placeholder="Choisissez un motif"
                    onChange={handleChange}
                />
            </select>
            <label htmlFor="Date de Naissance ">Date de Naissance</label>
            <input
                style={{ width: "400px", textAlign: "center" }}
                type="date"
                name="Message"
                value={newRDV.Message}
                placeholder="Date de naissance"
                onChange={handleChange}
            />
            <br />
            <Link to="/rdv">
                <Button variant="primary" onClick={() => editRendez()}>
                    Edit
                </Button>
            </Link>
        </div>
    );
};
export default Editmodal;
