import React from "react";
import { Card, Button } from "react-bootstrap";
// import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
// import { editRDV } from "./../../JS/actions/doctor";
import { Link } from "react-router-dom";
import { deleteRDV } from "./../../JS/actions/doctor";

const RdvCard = ({ rdv }) => {
    const dispatch = useDispatch();
    return (
        <Card style={{ width: "22rem" }}>
            <Card.Body>
                <Card.Text>{rdv.PatientName}</Card.Text>
                <Card.Text>{rdv.date}</Card.Text>
                <Card.Text>{rdv.médicament}</Card.Text>
                <Card.Text>{rdv.note}</Card.Text>
                <Card.Text>{rdv.Numero}</Card.Text>
                <Card.Text>{rdv.Message}</Card.Text>
                <Link to={`/editrdvmodal/${rdv._id}`}>
                    {/* <Link to={"/addmed"}> */}{" "}
                    <Button variant="primary">Edit</Button>
                </Link>{" "}
                <Button onClick={() => dispatch(deleteRDV(rdv._id))}>
                    DELETE
                </Button>
            </Card.Body>
        </Card>
    );
};

export default RdvCard;
