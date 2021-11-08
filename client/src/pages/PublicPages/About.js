import React from "react";
import { Card } from "react-bootstrap";

const About = () => {
    return (
        <div>
            <Card className="text-center">
                <Card.Header>Doctor Aziz</Card.Header>
                <Card.Body>
                    <Card.Img>Special title treatment</Card.Img>
                </Card.Body>
                <Card.Footer className="text-muted">
                    LUNDI: 9 - 19 MARDI: 9 - 14 MERCREDI: 10 - 19 JEUDI: 10 - 19
                    VENDREDI: 9 - 16
                </Card.Footer>
            </Card>
            <ul>
                <li>
                    2001-2007 : LICENCIÉ EN DENTISTERIE DE L’UNIVERSITÉ IULIU
                    HATIEGANU CLUJ-NAPOCA 2007-2010 : LICENCIÉ EN CHIRURGIE
                    BUCCALE ET IMPLANTOLOGIE DE L’UNIVERSITÉ SEMMELWEIS BUDAPEST
                </li>
            </ul>
        </div>
    );
};

export default About;
