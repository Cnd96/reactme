import {combineReducers} from 'redux';
import fitToWorkSelectReducer from "./select.fit.to.work.reducer";

const reducer = combineReducers({
    fitToWorkSelect: fitToWorkSelectReducer
});

export default reducer;