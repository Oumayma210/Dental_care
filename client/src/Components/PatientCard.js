import React from "react";
import { Card, Button } from "react-bootstrap";
import { deletePatient } from "./../JS/actions/doctor";
import { useDispatch } from "react-redux";
const PatientCard = ({ patient }) => {
    const dispatch = useDispatch();
    return (
        <Card style={{ width: "18rem" }}>
            <Card.Body>
                <Card.Title>{patient.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                    {patient.email}
                </Card.Subtitle>
                <Card.Text>{patient.age}</Card.Text>
                <Card.Text>{patient.phone}</Card.Text>
                <Button onClick={() => ({})}>Description</Button>
                <Button onClick={() => dispatch(deletePatient(patient._id))}>
                    DELETE
                </Button>
            </Card.Body>
        </Card>
    );
};

export default PatientCard;
