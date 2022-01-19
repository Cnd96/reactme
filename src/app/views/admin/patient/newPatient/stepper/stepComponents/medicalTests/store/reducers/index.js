import {combineReducers} from 'redux';
import patientMedicalTestAddEditReducer from "./patient.add.medical.test.results.reducer";

const reducer = combineReducers({
    patientMedicalTestAddEdit: patientMedicalTestAddEditReducer
});

export default reducer;