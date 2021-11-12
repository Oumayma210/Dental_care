import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Spinner, Button } from "react-bootstrap";
import PatientCard from "./PatientCard";
import { GetAllPatient } from "./../JS/actions/doctor";
import { Link } from "react-router-dom";

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
            <h6 style={{ color: "black", textAlign:"center" , fontSize:"25px"}}>
                Liste de patients: {patient.length}
            </h6>
            {load ? (
                <Spinner animation="border" />
            ) : (
                patient.map((el) => <PatientCard patient={el} key={el._id} />)
            )}
            <br />
            <div>
                <Link to="/doctorroute">
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
                        <i
                            class="fa fa-angle-double-left"
                            aria-hidden="true"
                        ></i>
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default PatientsList;
