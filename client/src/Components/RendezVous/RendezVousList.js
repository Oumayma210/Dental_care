import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRendezvous } from "../../JS/actions/patient";
// import { Spinner } from "react-bootstrap";
const RendezVousList = () => {
    const dispatch = useDispatch();
    const Rendez = useSelector((state) => state.patientReducer.Rendez);
    const load = useSelector((state) => state.patientReducer.load);
    useEffect(() => {
        dispatch(getRendezvous());
    }, [dispatch]);
    console.log(Rendez);
    return (
        <div
            style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-around",
            }}
        >
            {load ? <h2>spinner</h2> : Rendez.map((el) => <p>{el.date}</p>)}
        </div>
    );
};

export default RendezVousList;
