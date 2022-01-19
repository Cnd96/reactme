import {combineReducers} from 'redux';
import roleAppReducer from './role.app.reducer';
import roleAddEditReducer from './role.add.edit.reducer';

const reducer = combineReducers({
    rolesSearch: roleAppReducer,
    roleAddEdit: roleAddEditReducer
});

export default reducer;
