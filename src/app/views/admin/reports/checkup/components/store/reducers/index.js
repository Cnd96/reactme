import {combineReducers} from 'redux';
import checkupReportAppReducer from "./checkup.report.generate.reducer";


const reducer = combineReducers({
    checkupReport: checkupReportAppReducer,
});

export default reducer;