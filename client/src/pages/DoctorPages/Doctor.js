import React from "react";
// import PatientsList from "../../Components/PatientsList";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
const Doctor = () => {
    return (
        <div>
            <Link to="/patientList">
                <Button> Patient List </Button>
            </Link>
            {/* <Link to ="\add">
            <button>ADDRDV</button>
            </Link> */}
        </div>
    );
};

export default Doctor;
