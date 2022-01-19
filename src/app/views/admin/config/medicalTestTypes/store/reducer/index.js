import {combineReducers} from 'redux';
import medicalTestTypeSearchReducer from "./medical.test.type.search.reducer";
import medicalTestTypeAddEditReducer from "./medical.test.type.add.edit.reducer"

const reducer = combineReducers({
    medicalTestTypeSearch: medicalTestTypeSearchReducer,
    medicalTestTypeAddEdit: medicalTestTypeAddEditReducer

});

export default reducer;