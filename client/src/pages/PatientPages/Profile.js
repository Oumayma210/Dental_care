import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
const Profile = ({ history, match }) => {
    const patient = useSelector((state) => state.patientReducer.patient);
    return (
        <div>
            This the profile
            <h4>{patient.name}</h4>
            <h4>{patient.email}</h4>
            <h4>{patient.phone}</h4>
            <Button
                style={{
                    width: "90px",
                    height: "40px",
                    color: "white",
                    backgroundColor: "black",
                    fontSize: "16px",
                    fontStyle: "italic",
                }}
                onClick={() => history.push()}
            >
                LogOut
            </Button>
            <h1 style={{ fontStyle: "italic" }}>Profile </h1>
            <Link to={`/Edit/:${patient._id}`}>
                <Button>Edit</Button>
            </Link>
        </div>
    );
};
export default Profile;
