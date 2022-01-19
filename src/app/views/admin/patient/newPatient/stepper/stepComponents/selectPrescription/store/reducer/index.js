import {combineReducers} from 'redux';
import selectPrescriptionTemplateReducer from "./select.prescription.reducer";

const reducer = combineReducers({
    selectPrescriptionTemplate: selectPrescriptionTemplateReducer
});

export default reducer;