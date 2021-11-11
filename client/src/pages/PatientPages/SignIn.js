import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signin } from "../../JS/actions/patient";
import { Button } from "react-bootstrap";
import Navigation from "../../Components/Navigation";
import Footer from "./../../Components/Footer";

const SignIn = ({ history }) => {
    const [patient, setpatient] = useState({});
    const dispatch = useDispatch();
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
                width: "500px",
                paddingLeft: "500px",
            }}
        >
            <div className="Container" id="container">
                <form>
                    <h2>SignIn</h2>
                    <label>Email</label>
                    <input
                        icon="envelope"
                        type="email"
                        name="email"
                        placeholder="Enter your Email .."
                        onChange={handleChange}
                    />
                    <label>Password</label>
                    <input
                        icon="lock"
                        type="password"
                        name="password"
                        placeholder="Enter your password .."
                        onChange={handleChange}
                    />
                    <br />
                    <Button onClick={() => dispatch(signin(patient, history))}>
                        SignIn
                    </Button>
                    {/* <RendezVousList /> */}
                </form>
            </div>
        </div>
    );
};

export default SignIn;
