import {combineReducers} from 'redux';
import notebook from './notebook'

const createReducer = (asyncReducers) =>
    combineReducers({
        notebook,
        ...asyncReducers
    });

export default createReducer;
