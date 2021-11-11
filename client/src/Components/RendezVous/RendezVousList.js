import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRendezvous } from "../../JS/actions/patient";
import RdvCard from "./RdvCard";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom"; // import { Spinner } from "react-bootstrap";
const RendezVousList = ({ history }) => {
    const dispatch = useDispatch();
    const Rendez = useSelector((state) => state.patientReducer.Rendez);
    const load = useSelector((state) => state.patientReducer.load);
    useEffect(() => {
        dispatch(getRendezvous());
    }, [dispatch]);
    return (
        <div
            style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-around",
            }}
        >
            {load ? (
                <h2>spinner</h2>
            ) : (
                Rendez.map((el) => <RdvCard rdv={el} key={el._id} />)
            )}
            <br />
            <Link to="/doctorroute">
                <br />
                <Button
                    style={{
                        fontSize: "30px",
                        height: "60px",
                        width: "60px",
                        border: "none",
                        borderRadius: "30px",
                        backgroundColor: "black",
                        color: "white",
                    }}
                >
                    {" "}
                    {/* <i class="fa fa-backward" aria-hidden="true"></i> */}
                    <i class="fa fa-angle-double-left" aria-hidden="true"></i>
                </Button>
            </Link>{" "}
        </div>
    );
};

export default RendezVousList;
