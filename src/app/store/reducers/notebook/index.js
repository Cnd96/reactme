import {combineReducers} from 'redux';
import settings from './settings.reducer';
import login from '../../../auth/store/reducers/login.reducer';

const torReducers = combineReducers({
    settings,
    login
});

export default torReducers;
