import {combineReducers} from 'redux';
import followUpSelectReducer from "./select.follow.up.reducer";

const reducer = combineReducers({
    followUpSelect: followUpSelectReducer
});

export default reducer;