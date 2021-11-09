import React from "react";
import { Card } from "react-bootstrap";

const About = () => {
    return (
        <div>
            <Card
                className="text-center"
                style={{
                    width: "1300px",
                    justifiyContent: "center",
                    display: "flex",
                    flexDirection: " column",
                    paddingLeft:"280px",

                }}
            >
                <Card.Body>
                    <Card.Title>
                        <h2>Doctor Aziz</h2>
                    </Card.Title>
                    <Card.Img
                        style={{ width: "250px" }}
                        src="https://th.bing.com/th/id/R.23439048e360353214daf8bbfe61b484?rik=rSMXwMFLQ4PU7g&pid=ImgRaw&r=0"
                    ></Card.Img>
                </Card.Body>
                <Card.Footer className="text-muted">
                    LUNDI: 9 - 19 MARDI: 9 - 14 MERCREDI: 10 - 19 JEUDI: 10 - 19
                    VENDREDI: 9 - 16
                </Card.Footer>
                <ul>
                    <ol>
                        2001-2007 : LICENCIÉ EN DENTISTERIE DE L’UNIVERSITÉ
                        IULIU HATIEGANU CLUJ-NAPOCA
                    </ol>
                    <ol>
                        {" "}
                        2007-2010 : LICENCIÉ EN CHIRURGIE BUCCALE ET
                        IMPLANTOLOGIE DE L’UNIVERSITÉ SEMMELWEIS BUDAPEST
                    </ol>
                    <ol>
                        2013-2014 : FORMATION POST UNIVERSITAIRE SPÉCIAolSÉE EN
                        DENTISTERIE ESTHÉTIQUE À LONDRES
                    </ol>
                    <ol>
                        2014-2015 : CYCLE DE FORMATION EN ENDODONTIE PAR ENDO
                        TRAINING CENTER BRUXELLES
                    </ol>
                    <ol>
                        2020-2021 CYCLE DE FORMATION CBCT, RADIOGRAPHIE
                        MAXILLO-FACIALE CT SCAN, DEPARTEMENT OF ORAL AND
                        MAXILLOFACIAL SURGERY
                    </ol>
                </ul>
            </Card>
            {/* <div style={{ float: "right", padding: "5px " }}>
               
            </div> */}
        </div>
    );
};

export default About;
