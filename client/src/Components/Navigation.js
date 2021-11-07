import React from "react";
import { Link } from "react-router-dom";
import { logout } from "./../JS/actions/patient";
import { useDispatch, useSelector } from "react-redux";
import { Navbar, Container, Nav } from "react-bootstrap";

const Navigation = () => {
    // const isAuth = useSelector((state) => state.patientReducer.isAuth);
    // const dispatch = useDispatch();
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/home">Cabinet Dentaire</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link to="/home">
                            <Nav.Link eventKey={2} href="#features">Accueil</Nav.Link>
                        </Link>
                        <Nav.Link eventKey={2} href="#features">Nos services</Nav.Link>
                        <Nav.Link href="#pricing">
                            <Nav.Link eventKey={2} href="RendezVous">
                                <a href="/signup">Rendez-Vous</a>
                            </Nav.Link>
                        </Nav.Link>
                    </Nav>

                    <Nav>
                        <Nav.Link eventKey={2} href="EspaceDoctor">
                            <a
                                href="/doctor/signin
                            "
                            >
                                {" "}
                                Espace Doctor
                            </a>
                        </Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link eventKey={2} href="ContactezNous">
                            Contactez-Nous
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        //             <Link to="/">
        //                 <h2>My Project</h2>
        //             </Link>
        //             {isAuth ? (
        //                 <Link to="/" onClick={() => dispatch(logout())}>
        //                     {" "}
        //                     <a href="/" className="btn-area">
        //                         Logout
        //                     </a>
        //                 </Link>
        //             ) : (
        //                 <div className="btns">
        //                     <Link to="/signup">
        //                         {" "}
        //                         <a href="/signup" className="btn-area">
        //                             SignUp
        //                         </a>
        //                     </Link>

        //                     <Link to="/signin">
        //                         <a href="/signin" className="btn-area">
        //                             SignIn
        //                         </a>
        //                     </Link>
        //                     <Link to="/rendezvous">
        //                         <a href="/rendezvous" className="btn-area">
        //                             Rendez-Vous
        //                         </a>
        //                     </Link>
        //                 </div>
        //             )}{" "}
        //     );
        // };
    );
};
export default Navigation;
