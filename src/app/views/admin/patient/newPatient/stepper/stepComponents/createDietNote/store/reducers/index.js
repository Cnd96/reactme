import {combineReducers} from 'redux';
import dietNoteAddEditReducer from "./diet.note.add.edit.reducer";

const reducer = combineReducers({
    dietNoteAddEdit: dietNoteAddEditReducer
});

export default reducer;