import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
const Doctor = () => {
    return (
        <div>
            <Link to="/patientList">
                <Button> Patient List </Button>
            </Link>
            <Link to="/rdv">
                <Button> List of Rendez-Vous </Button>
            </Link>
        </div>
    );
};
export default Doctor;
