import React from "react";
import RendezVousList from "../../Components/RendezVous/RendezVousList";
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';


const RDV = () => {
    return (
        <div>
            <RendezVousList/>
            {/* <Link to="/addrdv">
                <Button> Add Rendez-Vous </Button>
            </Link> */}
            {/* nrmlt nhotha f get all rendezvous taht kol rendez reservée fama edit! */}
            {/* <Link to="/editrdv">
                <Button> Edit Rendez-Vous </Button>
            </Link> */}
        </div>
    );
};
export default RDV;
