import {combineReducers} from 'redux';
import patientAddEditReducer from "./patient.add.edit.reducer";

const reducer = combineReducers({
    patientAddEdit: patientAddEditReducer
});

export default reducer;