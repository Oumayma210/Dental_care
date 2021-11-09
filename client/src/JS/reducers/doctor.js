import {
    FAILED,
    GET_ALLPATIENTS,
    GET_ALLRENDEZVOUS,
    GET_PATIENT_BY_ID,
} from "../actiontypes/doctor";
import { LOAD, SIGNIN_DOCTOR } from "./../actiontypes/doctor";
const initialState = {
    patient: [],
    patientToGet:{},
    load: false,
    errors: [],
    isAuthdoc: false,
    Rendez: [],
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
                isAuthdoc: true,
            };
        case GET_ALLPATIENTS:
            return {
                ...state,
                load: false,
                patient: payload.patient,
            };
        case GET_PATIENT_BY_ID:
            return { ...state, load: false, patient: payload.patientToGet };

        case GET_ALLRENDEZVOUS:
            return {
                ...state,
                load: false,
                Rendez: payload.Rendez,
            };
        case FAILED:
            return { ...state, load: false, error: payload };
        default:
            return state;
    }
};
export default doctorReducer;
