import {combineReducers} from 'redux';
import selectOtherLetterReducer from "./select.other.letters.reducer";

const reducer = combineReducers({
    selectOtherLetter: selectOtherLetterReducer
});

export default reducer;