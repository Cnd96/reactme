import {combineReducers} from 'redux';
import fitnessNoteAddEditReducer from "./fitness.note.add.edit.reducer";

const reducer = combineReducers({
    fitnessNoteAddEdit: fitnessNoteAddEditReducer
});

export default reducer;