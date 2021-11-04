import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signin } from "../../JS/actions/doctor";

const SigninDoc = ({ history }) => {
    const [doctor, setdoctor] = useState({});
    const dispatch = useDispatch();
    const handleChange = (e) => {
        setdoctor({ ...doctor, [e.target.name]: e.target.value });
        //history:thezni mbaad mayenzl yaamli push lel profile
    };
    return (
        <div>
            <h2>SignIn</h2>
            <label>Email</label>
            <input
                type="text"
                name="email"
                placeholder="Enter your Email .."
                onChange={handleChange}
            />
            <label>Password</label>
            <input
                type="text"
                name="password"
                placeholder="Enter your password .."
                onChange={handleChange}
            />
            <button onClick={() => dispatch(signin(doctor, history))}>
                SignIn
            </button>
        </div>
    );
};

export default SigninDoc;
