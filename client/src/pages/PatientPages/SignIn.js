import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signin } from "../../JS/actions/patient";

const SignIn = ({ history }) => {
    const [patient, setpatient] = useState({});
    const dispatch = useDispatch();
    const handleChange = (e) => {
        setpatient({ ...patient, [e.target.name]: e.target.value });
        //history:thezni mbaad mayenzl yaamli push lel profile
    };
    return (
        <div>
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
            <button onClick={() => dispatch(signin(patient, history))}>
                SignIn
            </button>
            {/* <RendezVousList /> */}
        </div>
    );
};

export default SignIn;
