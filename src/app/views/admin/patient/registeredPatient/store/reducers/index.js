import {combineReducers} from 'redux';
import patientSearchAppReducer from "./patient.search.app.reducer";
import patientDetailsAppReducer from "./patinet.details.app.reducer";

const reducer = combineReducers({
    patientSearch: patientSearchAppReducer,
    patientDetails: patientDetailsAppReducer
});

export default reducer;