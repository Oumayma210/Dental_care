import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signIn } from "../../JS/actions/doctor";

const SigninDoc = ({ history }) => {
    const [doctor, setDoctor] = useState({});
    const dispatch = useDispatch();
    const handleChange = (e) => {
        setDoctor({ ...doctor, [e.target.name]: e.target.value });
    };
    return (
        <div>

            <h2>Sign In</h2>
            <label>Email</label>
            <input
                type="email"
                name="email"
                placeholder="Enter your Email .."
                onChange={handleChange}
            />
            <label>Password</label>
            <input
                type="password"
                name="password"
                placeholder="Enter your password .."
                onChange={handleChange}
            />
            <button onClick={() => dispatch(signIn(doctor, history))}>
                Sign In
            </button>
        </div>
    );
};

export default SigninDoc;
