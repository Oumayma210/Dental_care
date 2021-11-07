import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { logout } from './../../JS/actions/patient';
import RendezVousList from './../../Components/RendezVous/RendezVousList';
const Profile = ({ history, match }) => {
    const patient = useSelector((state) => state.patientReducer.patient);
    // const isAuth = useSelector((state) => state.patientReducer.isAuth);
const dispatch = useDispatch()
    return (
        <div>
            This the profile
            <h4>{patient.name}</h4>
            <h4>{patient.email}</h4>
            <h4>{patient.phone}</h4>
            <Link to="/home" >
            <Button
                style={{
                    width: "90px",
                    height: "40px",
                    color: "white",
                    backgroundColor: "black",
                    fontSize: "16px",
                    fontStyle: "italic",
                }}
                onClick={() => dispatch(logout())}
            >
                LogOut
            </Button>
            </Link>
            <h1 style={{ fontStyle: "italic" }}>Profile </h1>
            <Link to={`/Edit/:${patient._id}`}>
                <Button>Edit</Button>
            </Link>
                        <RendezVousList />

        </div>
    );
};
export default Profile;
