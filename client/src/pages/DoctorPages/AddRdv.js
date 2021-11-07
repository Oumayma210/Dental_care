import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { addRdv } from "../../JS/actions/doctor";
import moment from "moment";
const AddRdv = () => {
    const dispatch = useDispatch();
    const [newRendezVous, setNewRendezVous] = useState({
        PatientName: "",
        date: "",
        médicament: "",
        note: "",
    });
    const handleChange = (e) => {
        setNewRendezVous({ ...newRendezVous, [e.target.name]: e.target.value });
    };
    const add = () => {
        dispatch(addRdv(newRendezVous));
    };
    return (
        <div>
            <h2>Add Rdv page</h2>
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
                    value={newRendezVous.date=moment().format("DD-MM-YYYY HH:mm:ss")}
                    placeholder="enter the date"
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
                <Link to="/rdv">
                    <Button onClick={() => add()}>ADD</Button>
                </Link>
            </div>
        </div>
    );
};

export default AddRdv;
