import {combineReducers} from 'redux';
import checkupHistoryReducer from "./checkup.history.app.reducer";

const reducer = combineReducers({
    checkupHistory: checkupHistoryReducer
});

export default reducer;