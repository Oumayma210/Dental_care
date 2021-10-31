import {
    LOAD_PATIENT,
    SIGNUP_PATIENT,
    FAIL_PATIENT,
    SIGNIN_PATIENT,
    LOGOUT_PATIENT,
} from "./../actiontypes/patient";
//initial state
const initialState = {
    patient: {},
    load_patient: false,
    errors: [],
    isAuth: false,
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
        default:
            return state;
    }
};
export default patientReducer;
