import React, { useEffect } from "react";
import { Card, Button } from "react-bootstrap";
// import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
// import { editRDV } from "./../../JS/actions/doctor";
import { Link } from "react-router-dom";
import { deleteRDV} from "./../../JS/actions/doctor";
const RdvCard = ({ rdv }) => {
    const dispatch = useDispatch();
    // useEffect(() => dispatch(getAllRendezvous()), []);
    return (
        <div
            style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-around",
            }}
        >
            <Card style={{ width: "18rem" }}>
                <Card.Body>
                    <Card.Text>Nom du patient:{rdv.PatientName}</Card.Text>
                    <Card.Text>Date de rendez-vous:{rdv.date}</Card.Text>
                    <Card.Text>Motif de consultation:{rdv.note}</Card.Text>
                    <Card.Text>Tél:{rdv.Numero}</Card.Text>
                    <Card.Text>Date de naissance:{rdv.Message}</Card.Text>
                    <Link to={`/editrdvmodal/${rdv._id}`}>
                        {/* <Link to={"/addmed"}> */}{" "}
                        <Button variant="primary">Edit</Button>
                    </Link>{" "}
                    <Button onClick={() => dispatch(deleteRDV(rdv._id))}>
                        DELETE
                    </Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default RdvCard;
