import React from "react";
import { ListGroup } from "react-bootstrap";

const About = () => {
    return (
        <div style={{ textAlign: "center" }}>
            <h2>Dr Aziz</h2>
            <img
                style={{ width: "200px", textAlign: "center" }}
                src="https://th.bing.com/th/id/R.23439048e360353214daf8bbfe61b484?rik=rSMXwMFLQ4PU7g&pid=ImgRaw&r=0"
                alt=""
            />
            <ul>
                <ol className="text-muted">
                    {" "}
                    LUNDI: 9 - 19 MARDI: 9 - 14 MERCREDI: 10 - 19 JEUDI: 10 - 19
                    VENDREDI: 9 - 16
                </ol>
            </ul>
            <ListGroup>
                <ListGroup.Item>
                    {" "}
                    2001-2007 : LICENCIÉ EN DENTISTERIE DE L’UNIVERSITÉ IULIU
                    HATIEGANU CLUJ-NAPOCA
                </ListGroup.Item>
                <ListGroup.Item>
                    {" "}
                    2007-2010 : LICENCIÉ EN CHIRURGIE BUCCALE ET IMPLANTOLOGIE
                    DE L’UNIVERSITÉ SEMMELWEIS BUDAPEST
                </ListGroup.Item>
                <ListGroup.Item>
                    {" "}
                    2013-2014 : FORMATION POST UNIVERSITAIRE SPÉCIAolSÉE EN
                    DENTISTERIE ESTHÉTIQUE À LONDRES
                </ListGroup.Item>
                <ListGroup.Item>
                    {" "}
                    2014-2015 : CYCLE DE FORMATION EN ENDODONTIE PAR ENDO
                    TRAINING CENTER BRUXELLES
                </ListGroup.Item>
                <ListGroup.Item>
                    {" "}
                    2020-2021 CYCLE DE FORMATION CBCT, RADIOGRAPHIE
                    MAXILLO-FACIALE CT SCAN, DEPARTEMENT OF ORAL AND
                    MAXILLOFACIAL SURGERY
                </ListGroup.Item>
            </ListGroup>

            {/* <div style={{ float: "right", padding: "5px " }}>
               
            </div> */}
        </div>
    );
};

export default About;
