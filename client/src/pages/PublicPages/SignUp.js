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
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                flexWrap: "wrap",
                width: "300px",
                fontSize: "20px",
                fontWeight: "900px",
                paddingLeft: "500px",
            }}
        >
            <div className="Container" id="container">
                <h2 style={{ textAlign: "center" }}>Créer votre compte</h2>
                <form>
                    <label>Nom:</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter your Name .."
                        onChange={handleChange}
                    />
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email .."
                        onChange={handleChange}
                    />
                    <label>Mot de passe:</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter your password .."
                        onChange={handleChange}
                    />
                    <label>Surnom:</label>
                    <input
                        type="text"
                        name="nickname"
                        placeholder="Enter your nickname .."
                        onChange={handleChange}
                    />
                    <label>age:</label>
                    <input
                        type="number"
                        name="age"
                        placeholder="Enter your age .."
                        onChange={handleChange}
                    />
                    <label>Tél:</label>
                    <input
                        type="number"
                        name="phone"
                        placeholder="Enter your phone .."
                        onChange={handleChange}
                    />
                    <br />
                    <Link to="/profile">
                        <Button
                            style={{ margin: "10px" }}
                            onClick={() => dispatch(signup(newPatient))}
                        >
                            S'inscrire
                        </Button>
                    </Link>
                </form>
            </div>

            {/* <RendezVousList /> */}
            <div style={{ textAlign: "center" }}>
                <p>If you have already account click here!!</p>
                <Link to="/signin">
                    <Button>S'identifier</Button>
                </Link>
            </div>
        </div>
    );
};
export default Signup;
