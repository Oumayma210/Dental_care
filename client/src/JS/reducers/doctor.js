import {
    FAILED,
    GET_ALLPATIENTS,
    GET_ALLRENDEZVOUS,
    GET_PATIENT_BY_ID,
} from "../actiontypes/doctor";
import { LOAD, SIGNIN_DOCTOR } from "./../actiontypes/doctor";
const initialState = {
    patientList: {},
    patient: {},
    load: false,
    errors: [],
    isAuth: false,
    RdvList: [],
};
//pure function
const doctorReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case LOAD:
            return { ...state, load: true };
        case SIGNIN_DOCTOR:
            localStorage.setItem("token", payload.token);
            return {
                ...state,
                load: false,
                isAuth: true,
            };
        case GET_ALLPATIENTS:
            return {
                ...state,
                patientList: payload.patientList,
            };
        case GET_PATIENT_BY_ID:
            return { ...state, patient: payload };

        case GET_ALLRENDEZVOUS:
            return {
                ...state,
                load: false,
                RdvList: payload.RdvList,
            };
        case FAILED:
            return { ...state, load: false, error: payload };
        default:
            return state;
    }
};
export default doctorReducer;
