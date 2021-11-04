import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { Spinner } from "react-bootstrap";
import { GetAllPatient } from "./../JS/actions/doctor";
const PatientsList = () => {
    const dispatch = useDispatch();
    const getAllPatient = useSelector(
        (state) => state.doctorReducer.getAllPatient
    );
    const load = useSelector((state) => state.doctorReducer.load);
    useEffect(() => {
        dispatch(GetAllPatient());
    }, [dispatch]);
    console.log(getAllPatient);
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
                getAllPatient.map((el) => <p>{el.doctorName}</p>)
            )}
        </div>
    );
};

export default PatientsList;
