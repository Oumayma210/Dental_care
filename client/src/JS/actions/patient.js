import axios from "axios";
import {
    LOAD_PATIENT,
    SIGNUP_PATIENT,
    FAIL_PATIENT,
    SIGNIN_PATIENT,
    LOGOUT_PATIENT,
    GET_RENDEZVOUS,
} from "./../actiontypes/patient";
export const signup = (newPatient, history) => async (dispatch) => {
    dispatch({ type: LOAD_PATIENT });
    try {
        let result = await axios.post("/patient/signup", newPatient);
        dispatch({ type: SIGNUP_PATIENT, payload: result.data });
        history.push("/profile");
    } catch (error) {
        dispatch({ type: FAIL_PATIENT, payload: error.response.data.errors });
    }
};

export const signin = (patient, history) => async (dispatch) => {
    dispatch({ type: LOAD_PATIENT });
    try {
        let result = await axios.post("patient/signin", patient);
        dispatch({ type: SIGNIN_PATIENT, payload: result.data });
        history.push("/profile");
    } catch (error) {
        dispatch({ type: FAIL_PATIENT, payload: error.response.data.errors });
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
//  EDIT
export const editProfile = (id, newPatient) => async (dispatch) => {
    try {
        await axios.put(`/patient/${id}`, newPatient);
    } catch (error) {
        dispatch({ type: FAIL_PATIENT, payload: error.response });
    }
};
