import axios from "axios";
import { getAllRendezvous } from "../actions/doctor";
import {
    LOAD_PATIENT,
    SIGNUP_PATIENT,
    FAIL_PATIENT,
    SIGNIN_PATIENT,
    LOGOUT_PATIENT,
    GET_RENDEZVOUS,
    GET_PROFILE_BYID_PATIENT,
} from "./../actiontypes/patient";
export const signup = (newPatient, history) => async (dispatch) => {
    dispatch({ type: LOAD_PATIENT });
    try {
        let result = await axios.post("/patient/signup", newPatient);
        dispatch({ type: SIGNUP_PATIENT, payload: result.data });
        history.push("/profile");
    } catch (error) {
        dispatch({ type: FAIL_PATIENT, payload: error.response });
    }
};

export const signin = (patient, history) => async (dispatch) => {
    dispatch({ type: LOAD_PATIENT });
    try {
        let result = await axios.post("patient/signin", patient);
        dispatch({ type: SIGNIN_PATIENT, payload: result.data });
        history.push("/profile");
    } catch (error) {
        dispatch({ type: FAIL_PATIENT, payload: error.response });
    }
};

//LOGOUT
export const logout = () => {
    return {
        type: LOGOUT_PATIENT,
    };
};

// /////////////////CRUD Operations////////////////
// get
export const getRendezvous = () => async (dispatch) => {
    dispatch({ type: LOAD_PATIENT });
    try {
        let result = await axios.get("/patient/rendezvous");
        dispatch({ type: GET_RENDEZVOUS, payload: result.data });
    } catch (error) {
        dispatch({ type: FAIL_PATIENT, payload: error.response });
    }
};
//get patientprofile
export const getProfilePatient = (id) => async (dispatch) => {
    try {
        let result = await axios.get(`/patient/${id}`);
        dispatch({
            type: GET_PROFILE_BYID_PATIENT,
            payload: result.data,
        });
    } catch (error) {
        dispatch({
            type: FAIL_PATIENT,
            payload: error,
        });
    }
};
//  EDIT
export const editProfile = (id, newPatient) => async (dispatch) => {
    try {
        await axios.put(`/patient/${id}`, newPatient);
        dispatch(getProfilePatient(id));
    } catch (error) {
        dispatch({ type: FAIL_PATIENT, payload: error.response });
    }
};

// export const getdisprdv = (newRDV) => async (dispatch) => {
//     try {
//         await axios.post("/patient/availablerdv", newRDV);
//         dispatch(getAllRendezvous());
//     } catch (error) {
//         dispatch({ type: FAIL_PATIENT, payload: error.response });
//     }
// };
