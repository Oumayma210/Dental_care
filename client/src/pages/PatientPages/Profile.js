import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "./../../JS/actions/patient";
const Profile = ({ history, match }) => {
    const patient = useSelector((state) => state.patientReducer.patient);
    // const isAuth = useSelector((state) => state.patientReducer.isAuth);
    const dispatch = useDispatch();
    return (
        <div>
            <h1 style={{ fontStyle: "italic" }}>Profile </h1>
            <div className="container mt-4 mb-4 p-3 d-flex justify-content-center">
                <div className="card p-4">
                    <div className=" image d-flex flex-column justify-content-center align-items-center">
                        {" "}
                        <button className="btn btn-secondary">
                            {" "}
                            {/* <img
                                src="https://i.imgur.com/wvxPV9S.png"
                                height={100}
                                width={100}
                            /> */}
                        </button>{" "}
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
                            <Link to={`/Edit/:${patient._id}`}>
                                <button className="btn1 btn-dark">
                                    {" "}
                                    Edit{" "}
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Link to="/home">
                <button
                    className="btn1 btn-dark"
                    onClick={() => dispatch(logout())}
                >
                    LogOut
                </button>
            </Link>
            <Link to="/rdv">
                <button>Available Rendez-vous</button>
            </Link>
            
        </div>
    );
};
export default Profile;
