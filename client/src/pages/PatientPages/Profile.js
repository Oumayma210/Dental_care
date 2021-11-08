import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, editProfile } from "./../../JS/actions/patient";
import { Button, Modal } from "react-bootstrap";

const Profile = () => {
    const patient = useSelector((state) => state.patientReducer.patient);
    // const isAuth = useSelector((state) => state.patientReducer.isAuth);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch();
    const [newPatient, setNewPatient] = useState({
        name: "",
        email: "",
        password: "",
        nickname: "",
        age: "",
        phone: "",
    });

    const handleChange = (e) => {
        setNewPatient({ ...newPatient, [e.target.name]: e.target.value });
    };
    const Edit = () => {
        dispatch(editProfile(patient._id, newPatient));
        setShow(false);
    };
    return (
        <div>
            <h1 style={{ fontStyle: "italic", marginTop: "20px" }}>Profile </h1>
            <div className="container mt-5 mb-5 p-3 d-flex justify-content-center">
                <div
                    className="card p-2"
                    style={{ width: "18rem", height: "12rem" }}
                >
                    <div className=" image d-flex flex-column justify-content-center align-items-center">
                        {" "}
                        {/* <button className="btn btn-secondary">
                            {" "}
                            {/* <img
                                src="https://i.imgur.com/wvxPV9S.png"
                                height={100}
                                width={100}
                            /> */}
                        {/* </button>{" "} */}
                        <span className="name mt-3"> {patient.name}</span>{" "}
                        <span className="idd">{patient.email}</span>
                        <div className="d-flex flex-row justify-content-center align-items-center gap-2">
                            {" "}
                            <span className="idd1">{patient.age}</span>{" "}
                        </div>
                        <div className="d-flex flex-row justify-content-center align-items-center mt-3">
                            {" "}
                            <span className="number">
                                <span className="follow">{patient.phone}</span>
                            </span>{" "}
                        </div>
                        <div className=" d-flex mt-2">
                            {" "}
                            <Button
                                className="btn1 btn-dark"
                                size="sm"
                                onClick={handleShow}
                            >
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
                                        style={{
                                            width: "400px",
                                            textAlign: "center",
                                        }}
                                        type="text"
                                        name="name"
                                        value={newPatient.name}
                                        placeholder="enter your name"
                                        onChange={handleChange}
                                    />
                                    <br />
                                    <label htmlFor="email">email</label>
                                    <input
                                        style={{
                                            width: "400px",
                                            textAlign: "center",
                                        }}
                                        type="email"
                                        name="email"
                                        value={newPatient.email}
                                        placeholder="enter your email"
                                        onChange={handleChange}
                                    />
                                    <br />
                                    <label htmlFor="password">Password</label>
                                    <input
                                        style={{
                                            width: "400px",
                                            textAlign: "center",
                                        }}
                                        type="password"
                                        name="password"
                                        value={newPatient.password}
                                        placeholder="enter your password"
                                        onChange={handleChange}
                                    />
                                    <br />
                                    <label htmlFor="nickname">nickName</label>
                                    <input
                                        style={{
                                            width: "400px",
                                            textAlign: "center",
                                        }}
                                        type="text"
                                        name="nickname"
                                        value={newPatient.nickname}
                                        placeholder="enter your name"
                                        onChange={handleChange}
                                    />
                                    <br />

                                    <label htmlFor="age">Age</label>
                                    <input
                                        style={{
                                            width: "400px",
                                            textAlign: "center",
                                        }}
                                        type="age"
                                        name="age"
                                        value={newPatient.age}
                                        placeholder="enter your address"
                                        onChange={handleChange}
                                    />
                                    <br />
                                    <label htmlFor="phone">phone</label>
                                    <input
                                        style={{
                                            width: "400px",
                                            textAlign: "center",
                                        }}
                                        type="tel"
                                        name="phone"
                                        value={newPatient.phone}
                                        placeholder="enter your phone number"
                                        onChange={handleChange}
                                    />
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button
                                        variant="secondary"
                                        onClick={handleClose}
                                    >
                                        Close
                                    </Button>
                                    <Button
                                        variant="primary"
                                        onClick={() => Edit()}
                                    >
                                        Edit
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        </div>
                    </div>
                </div>
            </div>

            <Link to="/addrdv">
                <Button className="btn1 btn-dark" size="lg">
                    Take a RDV{" "}
                </Button>{" "}
            </Link>
            <Link to="/">
                {" "}
                <Button
                    size="lg"
                    className="btn1 btn-dark"
                    onClick={() => dispatch(logout())}
                >
                    LogOut
                </Button>
            </Link>
        </div>
    );
};
export default Profile;
