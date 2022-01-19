import {combineReducers} from 'redux';
import patientCheckupSearchAppReducer from "./patient.checkup.search.reducer";

const reducer = combineReducers({
    patientCheckupSearch: patientCheckupSearchAppReducer
});

export default reducer;