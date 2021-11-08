import React, { useState } from "react";
import { Card, Button, Modal } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { editRDV } from "./../../JS/actions/doctor";
import { Link } from 'react-router-dom';
const RdvCard = ({ rdv }) => {
    return (
        <Card style={{ width: "22rem" }}>
            <Card.Body>
                <Card.Text>{rdv.PatientName}</Card.Text>
                <Card.Text>{rdv.date}</Card.Text>
                <Card.Text>{rdv.Numero}</Card.Text>
                <Link to="/editrdv">
                    {" "}
                    <Button variant="primary">Edit</Button>
                </Link>{" "}
                
            </Card.Body>
        </Card>
    );
};

export default RdvCard;
