// usage of combine reducer
import { combineReducers } from "redux";
import patientReducer from "./patient";
import doctorReducer from "./doctor";

const rootReducer = combineReducers({
    patientReducer,
    doctorReducer,
});
export default rootReducer;
