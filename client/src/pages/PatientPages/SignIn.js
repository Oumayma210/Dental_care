import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signin } from "../../JS/actions/patient";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const SignIn = ({ history }) => {
    const [patient, setpatient] = useState({});
    const dispatch = useDispatch();
    // const Patient = useSelector((state) => state.patientReducer.patient);
    const handleChange = (e) => {
        setpatient({ ...patient, [e.target.name]: e.target.value });
        //history:thezni mbaad mayenzl yaamli push lel profile
    };
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                flexWrap: "wrap",
                width: "300px",
                paddingLeft: "500px",
            }}
        >
            <div className="Container" id="container">
                <form>
                    <h2>S'identifier</h2>
                    <label>Email:</label>
                    <input
                        icon="envelope"
                        type="email"
                        name="email"
                        placeholder="Enter your Email .."
                        onChange={handleChange}
                    />
                    <label>Mot de passe:</label>
                    <input
                        icon="lock"
                        type="password"
                        name="password"
                        placeholder="Enter your password .."
                        onChange={handleChange}
                    />
                    <br />
                    <Link to="/profile">
                        <Button
                            style={{ textAlign: "center", margin: "20px" }}
                            onClick={() => dispatch(signin(patient, history))}
                        >
                            S'identifier
                        </Button>
                    </Link>
                </form>
                {/* {Patient.name === patient.name ||
                    Patient.password === patient.password
                        ? alert("Hi!")
                        : alert("try again!")} */}
            </div>
        </div>
    );
};

export default SignIn;
