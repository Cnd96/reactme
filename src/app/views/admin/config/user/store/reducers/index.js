import {combineReducers} from 'redux';
import userAppReducer from './user.app.recucer';
import userAddEditReducer from './user.app.add.edit.reducer';

const reducer = combineReducers({
    userSearch: userAppReducer,
    userAddEdit: userAddEditReducer
});

export default reducer;
