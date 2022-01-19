import {combineReducers} from 'redux';
import instructionNoteAddEditReducer from "./instruction.note.add.edit.reducer";

const reducer = combineReducers({
    instructionNoteAddEdit: instructionNoteAddEditReducer
});

export default reducer;