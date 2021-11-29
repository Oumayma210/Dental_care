import React from "react";
import { Link } from "react-router-dom";
// import { logout } from "./../JS/actions/patient";
// import { useDispatch, useSelector } from "react-redux";
import { Navbar, Container, Nav } from "react-bootstrap";

const Navigation = () => {
    // const isAuth = useSelector((state) => state.patientReducer.isAuth);
    // const dispatch = useDispatch();
    return (
        <Navbar
            collapseOnSelect
            expand="lg"
            bg="dark"
            variant="dark"
            style={{
                height: "70px",
            }}
        >
            <Container>
                <Navbar.Brand href="/" style={{ color: "#5dacbd" }}>
                    Cabinet Dentaire
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link to="/">
                            <Nav.Link eventKey={2} href="#features">
                                <a href="/" style={{ color: "#5dacbd" }}>
                                    Accueil
                                </a>
                            </Nav.Link>
                        </Link>
                        <Link to="/about">
                            <Nav.Link eventKey={2} href="About">
                                <a href="/about" style={{ color: "#5dacbd" }}>
                                    A propos
                                </a>
                            </Nav.Link>
                        </Link>
                        <Link to="/nosservices">
                            <Nav.Link eventKey={2} href="#Nos services">
                                <a
                                    href="/noservices"
                                    style={{ color: "#5dacbd" }}
                                >
                                    {" "}
                                    Nos services{" "}
                                </a>
                            </Nav.Link>
                        </Link>

                        <Nav.Link eventKey={2} href="RendezVous">
                            <a href="/signup" style={{ color: "#5dacbd" }}>
                                Rendez-Vous
                            </a>
                        </Nav.Link>
                    </Nav>

                    {/* <Nav>
                        <Nav.Link eventKey={2} href="EspaceDoctor">
                            <a
                                href="/doctor/signin
                            "
                                style={{ color: "#5dacbd" }}
                            >
                                {" "}
                                Espace médecin{" "}
                            </a>
                        </Nav.Link>
                    </Nav> */}
                    <Nav>
                        <Nav.Link
                            eventKey={2}
                            href="\contact"
                            style={{ color: "#5dacbd" }}
                        >
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
