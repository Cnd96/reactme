import {combineReducers} from 'redux';
import selectDietaryHabitReducer from "./select.dietary.habit.reducer";

const reducer = combineReducers({
    selectDietaryHabit: selectDietaryHabitReducer
});

export default reducer;