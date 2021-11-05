import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Spinner } from "react-bootstrap";
import { GetAllPatient } from "./../JS/actions/doctor";
import PatientCard from './PatientCard';
const PatientsList = () => {
    const dispatch = useDispatch();
    const patient = useSelector((state) => state.doctorReducer.patient);
    const load = useSelector((state) => state.doctorReducer.load);
    useEffect(() => {
        dispatch(GetAllPatient());
    }, [dispatch]);
    console.log(patient);
    return (
        <div
            style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-around",
            }}
        >
          
            {load ? (
                <Spinner animation="border" />
            ) : (
                patient.map((el) => (
                    <PatientCard patient={el} key={el._id} />
                ))
            )}
        </div>
    );
};

export default PatientsList;
