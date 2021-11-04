import {
    GET_ALLPATIENT,
    LOAD_PATIENTS,
    FAIL_PATIENTS,
    GET_ALLRENDEZ,
} from "../actiontypes/doctor";
//  initial state
const initialState = {
    patient: [],
    error: [],
    load: false,
    Rendez: [],
};
// pure function
const doctorReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case LOAD_PATIENTS:
            return { ...state, load: true };

        case GET_ALLPATIENT:
            return { ...state, load: false, patient: payload.patient };

        case FAIL_PATIENTS:
            return { ...state, load: false, error: payload };
        case GET_ALLRENDEZ:
            return { ...state, load: false, RENDEZ: payload.RENDEZ };

        default:
            return state;
    }
};
export default doctorReducer;
