import {combineReducers} from 'redux';
import checkupAddEditReducer from "./checkup.add.edit.reducer";

const reducer = combineReducers({
    checkupAddEdit: checkupAddEditReducer
});

export default reducer;