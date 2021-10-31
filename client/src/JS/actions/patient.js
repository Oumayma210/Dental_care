import axios from "axios";
import {
    LOAD_PATIENT,
    SIGNUP_PATIENT,
    FAIL_PATIENT,
    SIGNIN_PATIENT,
    LOGOUT_PATIENT,
} from "./../actiontypes/patient";
export const signup = (newPatient, history) => async (dispatch) => {
    dispatch({ type: LOAD_PATIENT });
    try {
        let result = await axios.post("/Patient/signup", newPatient);
        dispatch({ type: SIGNUP_PATIENT, payload: result.data });
        history.push("/profile");
    } catch (error) {
        dispatch({ type:FAIL_PATIENT, payload: error.response.data.errors });
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
        type: LOGOUT_PATIENT
    };
};
