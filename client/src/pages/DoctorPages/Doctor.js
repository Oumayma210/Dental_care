import React from "react";
import { Link } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
const Doctor = () => {
    return (
        <div
            style={{
                paddingTop: "40px",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-evenly",
            }}
        >
            <Card style={{ width: "18rem" }}>
                <Card.Header>Liste de patients</Card.Header>
                <Card.Body>
                    <Card.Img
                        variant="top"
                        src="https://th.bing.com/th/id/R.69e7221916b6f9e39ac60bb20922f9d8?rik=aTOPbme6vjMl8g&riu=http%3a%2f%2fclassroomclipart.com%2fimages%2fgallery%2fClipart%2fDental%2fdentist-examination-of-patient.jpg&ehk=VjCxhxziriG0qMeWh2iWBtwBN4nPN%2bZsIntFKSffR44%3d&risl=&pid=ImgRaw&r=0"
                    />
                    <br />
                    <Link to="/patientList">
                        <br />
                        <Button variant="primary">Liste de patients</Button>
                    </Link>
                </Card.Body>
            </Card>
            <br />

            <Card style={{ width: "18rem" }}>
                <Card.Header>Liste de Rendez-Vous</Card.Header>
                <Card.Body>
                    <Card.Img
                        variant="top"
                        src="https://thumbs.dreamstime.com/b/rendez-vous-de-calendrier-avec-le-vecteur-d-ic%C3%B4ne-dentiste-106269936.jpg"
                    />

                    <Link to="/rdv">
                        <Button variant="primary">Liste de Rendez-Vous </Button>
                    </Link>
                </Card.Body>
            </Card>
            <Card style={{ width: "18rem" }}>
                <Card.Header>Ajouter un patient</Card.Header>
                <Card.Body>
                    <Card.Img
                        variant="top"
                        src="https://th.bing.com/th/id/R.f65bb2fc67ef774ecc209187a796d392?rik=QOnLZWb5ybkxOw&riu=http%3a%2f%2fwww.clipartbest.com%2fcliparts%2fncX%2f6zb%2fncX6zbGRi.jpg&ehk=sggWwIyDTQqDWVz%2bDMhKvoNGC5tH%2bk7%2bubOHapNV0GM%3d&risl=&pid=ImgRaw&r=0"
                    />

                    <Link to="/signup">
                        <Button variant="primary">Ajouter un patient</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    );
};
export default Doctor;
