import {combineReducers} from 'redux';
import followUpSearchReducer from "./follow.up.search.reducer";
import followUpAddEditReducer from "./follow.up.add.edit.reducer";

const reducer = combineReducers({
    followUpSearch: followUpSearchReducer,
    followUpAddEdit: followUpAddEditReducer
});

export default reducer;