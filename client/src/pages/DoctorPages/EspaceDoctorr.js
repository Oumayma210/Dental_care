import React from "react";
// import PatientsList from "../../Components/PatientsList";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import SigninDoc from "./SigninDoc";
const Doctor = () => {
    return (
        <div>
            <Link to="\doctor\signin">
                <SigninDoc />
            </Link>
        </div>
    );
};

export default Doctor;
