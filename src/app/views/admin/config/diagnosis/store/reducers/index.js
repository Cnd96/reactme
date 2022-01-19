import {combineReducers} from 'redux';
import diagnosisAddEditReducer from "./diagnosis.add.edit.reducer";
import diagnosisAppReducer from "./diagnosis.reducer";


const reducer = combineReducers({
    diagnosisAddEdit: diagnosisAddEditReducer,
    diagnosisSearch: diagnosisAppReducer
});

export default reducer;