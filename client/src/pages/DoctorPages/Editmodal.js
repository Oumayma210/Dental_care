import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { editRDV } from "./../../JS/actions/doctor";
const Editmodal = () => {
    const dispatch = useDispatch();
    const RdvList = useSelector((state) => state.doctorReducer.RdvList);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [newRendezVous, setNewRendezVous] = useState({
        PatientName: "",
        date: "",
        médicament: "",
        note: "",
        Numero: "",
    });

    const handleChange = (e) => {
        setNewRendezVous({ ...newRendezVous, [e.target.name]: e.target.value });
    };
    const editRendez = () => dispatch(editRDV(RdvList._id, newRendezVous));
    setShow(false);
    return (
        <div>
            <Button className="btn1 btn-dark" size="sm" onClick={handleShow}>
                EDIT PROFILE
            </Button>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>PROFILE</Modal.Title>
                </Modal.Header>
                <Modal.Body>
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
                        <option value="1">
                            Première consultation dentaire
                        </option>
                        <option value="2">
                            Consultation de suivi dentaire
                        </option>
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
                    <label htmlFor="Date de Naissance ">
                        Date de Naissance
                    </label>
                    <input
                        style={{ width: "400px", textAlign: "center" }}
                        type="date"
                        name="message"
                        value={newRendezVous.message}
                        placeholder="Date de naissance"
                        onChange={handleChange}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => editRendez()}>
                        Edit
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};
export default Editmodal;
