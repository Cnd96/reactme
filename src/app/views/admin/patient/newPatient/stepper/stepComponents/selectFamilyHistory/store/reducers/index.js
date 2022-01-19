import {combineReducers} from 'redux';
import familyTypeAddEditReducer from "./family.type.add.edit.reducer";

const reducer = combineReducers({
    familyTypeAddEdit: familyTypeAddEditReducer
});

export default reducer;