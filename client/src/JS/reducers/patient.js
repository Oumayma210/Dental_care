import {
    LOAD_PATIENT,
    SIGNUP_PATIENT,
    FAIL_PATIENT,
    SIGNIN_PATIENT,
    LOGOUT_PATIENT,
    GET_RENDEZVOUS,
    GET_PROFILE_BYID_PATIENT,
} from "./../actiontypes/patient";
//initial state
const initialState = {
    patient: {},
    profileToGet: [],
    load_patient: false,
    errors: [],
    isAuth: false,
    Rendez: [],
};
//pure function
const patientReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case LOAD_PATIENT:
            return { ...state, load_patient: true };
        case SIGNUP_PATIENT:
            localStorage.setItem("token", payload.token);
            return {
                ...state,
                load_patient: false,
                patient: payload.patient,
                isAuth: true,
            };
        case SIGNIN_PATIENT:
            localStorage.setItem("token", payload.token);
            return {
                ...state,
                load_patient: false,
                patient: payload.patient,
                isAuth: true,
            };
        case GET_PROFILE_BYID_PATIENT:
            return { ...state, load: false, patient: payload.profileToGet };
        case FAIL_PATIENT:
            return { ...state, load_patient: false, error: payload };
        case LOGOUT_PATIENT:
            localStorage.removeItem("token");
            return {
                patient: {},
                load_patient: false,
                errors: [],
                isAuth: false,
            };
        case GET_RENDEZVOUS:
            return {
                ...state,
                load: false,
                Rendez: payload.Rendez,
            };
        default:
            return state;
    }
};
export default patientReducer;
