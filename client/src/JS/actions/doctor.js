import {
    FAILED,
    GET_ALLPATIENTS,
    GET_ALLRENDEZVOUS,
    GET_PATIENT_BY_ID,
} from "../actiontypes/doctor";
import { LOAD, SIGNIN_DOCTOR } from "./../actiontypes/doctor";
import axios from "axios";
///////////////////////CRUD_ADMIN//////////////////////////
//Signin doctor
export const signIn = (doctor, history) => async (dispatch) => {
    dispatch({ type: LOAD });
    try {
        let result = await axios.post("/doctor/signin", doctor);
        dispatch({ type: SIGNIN_DOCTOR, payload: result.data });
        // history.push("/doctorroute");
    } catch (error) {
        dispatch({ type: FAILED, payload: error.response.data.errors });
    }
};
//add admin
// export const addAdmin = (newDoctor) => async (dispatch) => {
//     try {
//         await axios.post("/doctor/add_admin", newDoctor);
//     } catch (error) {
//         dispatch({ type: FAILED, payload: error.response });
//     }
// };
//get all patients
export const GetAllPatient = () => async (dispatch) => {
    dispatch({ type: LOAD });
    try {
        let result = await axios.get("/doctor/");
        dispatch({
            type: GET_ALLPATIENTS,
            payload: result.data,
        });
    } catch (error) {
        dispatch({
            type: FAILED,
            payload: error,
        });
    }
};
//Get_all_rdv
export const getAllRendezvous = () => async (dispatch) => {
    dispatch({ type: LOAD });
    try {
        let result = await axios.get("/doctor/lrdv");
        dispatch({
            type: GET_ALLRENDEZVOUS,
            payload: result.data,
        });
    } catch (error) {
        dispatch({
            type: FAILED,
            payload: error,
        });
    }
};
//add patient
export const addPatient = (newPatient) => async (dispatch) => {
    try {
        await axios.post("/doctor/add", newPatient);
        dispatch(GetAllPatient());
    } catch (error) {
        dispatch({ type: FAILED, payload: error.response });
    }
};

//addRDV
export const addRdv = (newRDV) => async (dispatch) => {
    try {
        await axios.post("/doctor/addrdv", newRDV);
        dispatch(getAllRendezvous());
    } catch (error) {
        dispatch({ type: FAILED, payload: error.response });
    }
};
//get patient
export const getPatient = (id) => async (dispatch) => {
    try {
        let result = await axios.get(`/doctor/${id}`);
        dispatch({
            type: GET_PATIENT_BY_ID,
            payload: result.data,
        });
    } catch (error) {
        dispatch({
            type: FAILED,
            payload: error,
        });
    }
};
//delete patient
export const deletePatient = (_id) => async (dispatch) => {
    try {
        await axios.delete(`/doctor/${_id}`);
        dispatch(GetAllPatient());
    } catch (error) {
        dispatch({ type: FAILED, payload: error.response });
    }
};

//editRDV
export const editRDV = (id, newRDV) => async (dispatch) => {
    try {
        await axios.put(`/doctor/${id}`, newRDV);
        dispatch(getAllRendezvous());
    } catch (error) {
        dispatch({ type: FAILED, payload: error.response });
    }
};
export const deleteRDV = (_id) => async (dispatch) => {
    try {
        await axios.delete(`/doctor/deleterdv/${_id}`);

        dispatch(getAllRendezvous());
    } catch (error) {
        dispatch({ type: FAILED, payload: error.response });
    }
};
