import React from "react";
// import RendezVousList from "../../Components/RendezVous/RendezVousList";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const RendezVous = () => {
    return (
        <div>
            <h2>The available rendez vous</h2>
            <Link to="\signup">
                <Button>Sign Up</Button>
            </Link>
            <Link to="\signin">
                <Button>Sign In</Button>
            </Link>

            {/* <RendezVousList /> */}
        </div>
    );
};

export default RendezVous;
