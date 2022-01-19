import {combineReducers} from 'redux';
import patientSummeryReportReducer from "./patient.summery.report.reducer";

const reducer = combineReducers({
    patientSummeryReport: patientSummeryReportReducer
});

export default reducer;