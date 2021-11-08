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
        Numero:"",
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
                    <label htmlFor="name">name</label>
                    <input
                        type="text"
                        name="PatientName"
                        value={newRendezVous.PatientName}
                        placeholder="enter your name"
                        onChange={handleChange}
                    />
                    <br />
                    <label htmlFor="date">Date</label>
                    <input
                        type="date"
                        name="date"
                        value={newRendezVous.date}
                        placeholder="enter date"
                        onChange={handleChange}
                    />
                    <br />
                    <label htmlFor="médicament">Médicament</label>
                    <input
                        type="text"
                        name="médicament"
                        value={newRendezVous.médicament}
                        placeholder="enter médicament"
                        onChange={handleChange}
                    />
                    <br />
                    <label htmlFor="note">note</label>
                    <input
                        type="text"
                        name="note"
                        value={newRendezVous.note}
                        placeholder="enter your name"
                        onChange={handleChange}
                    />
                    <br />
                    <label htmlFor="Numero">Tél</label>

                    <input
                        type="number"
                        name="Numero"
                        value={(newRendezVous.Numero=RdvList.Numero)}
                        placeholder="enter your name"
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
