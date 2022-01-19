import {combineReducers} from 'redux';
import login from './login.reducer';

const authReducers = combineReducers({
    login,
});

export default authReducers;
