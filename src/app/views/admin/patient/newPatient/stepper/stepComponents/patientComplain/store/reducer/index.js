import {combineReducers} from 'redux';
import patientComplainAddEditReducer from "./patient.complain.add.edit.reducer";
import patientComplainSearchReducer from "./patient.complain.sreach.reducer";

const reducer = combineReducers({
    patientComplainAddEdit: patientComplainAddEditReducer,
    patientComplainSearch: patientComplainSearchReducer
});

export default reducer;