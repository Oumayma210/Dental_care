import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const ContactezNous = () => {
    return (
        <div>
            <h4
                style={{
                    textAlign: "center",
                    fontSize: "30px",
                    color: "steelblue",
                    paddingTop: "50px",
                }}
            >
                Contact
            </h4>
            <div
                style={{
                    textAlign: "left",
                    paddingBottom: "50px",
                    fontSize: "20px",
                    fontWeight: "900px",
                    paddingLeft: "70px",
                }}
            >
                <ul>
                    <li>
                        {" "}
                        <span>Adresse:</span>
                        Parvis Sainte-Alix 45A, 1150 Woluwe-Saint-Pierre,
                        Belgium
                    </li>

                    <br />
                    <li>
                        {" "}
                        <span>Telephone:</span>
                        02 779 81 92
                    </li>

                    <br />
                    <li>
                        {" "}
                        <span>Email:</span>
                        <a href="cabinet@baradent.be">cabinet@baradent.be</a>
                    </li>
                </ul>
            </div>{" "}
            <Container>
                <Row className="justify-content-md-center">
                    <Col md="auto">
                        {" "}
                        <img
                            alt=""
                            src="./123.png"
                            style={{
                                width: "600px",
                                boxShadow: " 20px 0 20px 0",
                            }}
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ContactezNous;
