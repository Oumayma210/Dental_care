import React from "react";
import { Link } from "react-router-dom";
import { logout } from "./../JS/actions/patient";
import { useDispatch, useSelector } from "react-redux";
const Navigation = () => {
    const isAuth = useSelector((state) => state.patientReducer.isAuth);
    const dispatch = useDispatch();
    return (
        <header>
            <Link to="/">
                <h2>My Project</h2>
            </Link>
            {isAuth ? (
                <Link to="/" onClick={() => dispatch(logout())}>
                    {" "}
                    <a href="/" className="btn-area">
                        Logout
                    </a>
                </Link>
            ) : (
                <div className="btns">
                    <Link to="/signup">
                        {" "}
                        <a href="/signup" className="btn-area">
                            SignUp
                        </a>
                    </Link>

                    <Link to="/signin">
                        <a href="/signin" className="btn-area">
                            SignIn
                        </a>
                    </Link>
                    <Link to="/rendezvous">
                        <a href="/rendezvous" className="btn-area">
                            Rendez-Vous
                        </a>
                    </Link>
                </div>
            )}{" "}
        </header>
    );
};

export default Navigation;
