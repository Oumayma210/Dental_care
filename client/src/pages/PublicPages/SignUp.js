import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signup } from "../../JS/actions/patient";
// import RendezVousList from "./../../Components/RendezVous/RendezVousList";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
const Signup = ({ history }) => {
    const [newPatient, setNewPatient] = useState({});
    const dispatch = useDispatch();
    const handleChange = (e) => {
        setNewPatient({ ...newPatient, [e.target.name]: e.target.value });
    };
    console.log(newPatient);
    return (
        <div>
            <h2>Signup</h2>
            <label>Name</label>
            <input
                type="text"
                name="name"
                placeholder="Enter your Name .."
                onChange={handleChange}
            />
            <label>Email</label>
            <input
                type="email"
                name="email"
                placeholder="Enter your email .."
                onChange={handleChange}
            />
            <label>Password</label>
            <input
                type="password"
                name="password"
                placeholder="Enter your password .."
                onChange={handleChange}
            />
            <label>Nickname</label>
            <input
                type="text"
                name="nickname"
                placeholder="Enter your nickname .."
                onChange={handleChange}
            />
            <label>age</label>
            <input
                type="number"
                name="age"
                placeholder="Enter your age .."
                onChange={handleChange}
            />
            <label>Phone</label>
            <input
                type="number"
                name="phone"
                placeholder="Enter your phone .."
                onChange={handleChange}
            />
            <button onClick={() => dispatch(signup(newPatient))}>SignUp</button>
            {/* <RendezVousList /> */}
            <div>
                <p>If you have already account click here!!</p>
                <Link to="/signin">
                    <Button>Sign In</Button>
                </Link>
            </div>
        </div>
    );
};
export default Signup;
