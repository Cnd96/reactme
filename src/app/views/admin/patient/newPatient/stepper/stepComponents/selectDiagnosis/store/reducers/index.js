import {combineReducers} from 'redux';
import diagnosisSelectReducer from "./select.diagnosis.add.edit.reducer";

const reducer = combineReducers({
    diagnosisSelect: diagnosisSelectReducer
});

export default reducer;