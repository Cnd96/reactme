import {combineReducers} from 'redux';
import medicalTestRecordSearchReducer from "./medical.test.record.search.reducer";
import medicalTestRecordAddEditReducer from "./medical.test.record.add.edit.reducer";

const reducer = combineReducers({
    medicalTestRecordSearch: medicalTestRecordSearchReducer,
    medicalTestRecordAddEdit: medicalTestRecordAddEditReducer
});

export default reducer;