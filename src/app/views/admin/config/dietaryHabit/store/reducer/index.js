import {combineReducers} from 'redux';
import dietaryHabitSearchReducer from "./dietary.habit.search.reducer";
import dietaryHabitAddEditReducer from "./dietary.habit.add.edit.reducer";

const reducer = combineReducers({
    dietaryHabitSearch: dietaryHabitSearchReducer,
    dietaryHabitAddEdit: dietaryHabitAddEditReducer
});

export default reducer;