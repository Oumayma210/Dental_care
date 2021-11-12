import React from "react";
import { Card, Button } from "react-bootstrap";
import { deletePatient } from "./../JS/actions/doctor";
import { useDispatch } from "react-redux";
const PatientCard = ({ patient }) => {
    const dispatch = useDispatch();
    return (
        <div  style={{  paddingTop: "60px" }}>
            <Card style={{ width: "18rem"}}>
                <Card.Body>
                    <Card.Title>Nom:{patient.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                        {patient.email}
                    </Card.Subtitle>
                    <Card.Text>Age:{patient.age}</Card.Text>
                    <Card.Text>Tél:{patient.phone}</Card.Text>
                    <Button
                        onClick={() => dispatch(deletePatient(patient._id))}
                    >
                        DELETE
                    </Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default PatientCard;
