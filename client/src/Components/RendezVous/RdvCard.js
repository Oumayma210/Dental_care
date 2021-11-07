import React from "react";
import { ListGroup } from "react-bootstrap";

const RdvCard = ({rdv}) => {
    return (
        <div>
            <ListGroup style={{}}>
                <ListGroup.Item>{rdv.date}</ListGroup.Item>
            </ListGroup>
        </div>
    );
};

export default RdvCard;
