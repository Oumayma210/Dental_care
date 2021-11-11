import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signIn } from "../../JS/actions/doctor";
import { Button } from "react-bootstrap";

const SigninDoc = ({ history }) => {
    const [doctor, setDoctor] = useState({});
    const dispatch = useDispatch();
    const handleChange = (e) => {
        setDoctor({ ...doctor, [e.target.name]: e.target.value });
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

                textAlign: "left",
                paddingBottom: "250px",
                paddingTop: "50px",
                fontSize: "20px",
            }}
        >
            <div className="Container" id="container">
                <form>
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
                    <br />
                    <div>
                        <Button
                            style={{ margin: "10px" }}
                            onClick={() => dispatch(signIn(doctor, history))}
                        >
                            Sign In
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SigninDoc;
