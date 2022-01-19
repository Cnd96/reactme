import {combineReducers} from 'redux';
import allergyHistoryAddEditReducer from "./allergy.history.add.edit.reducer";
import allergyHistorySearchReducer from "./allergy.history.search.reducer";

const reducer = combineReducers({
    allergyHistoryAddEdit: allergyHistoryAddEditReducer,
    allergyHistorySearch: allergyHistorySearchReducer
});

export default reducer;