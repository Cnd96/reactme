import {combineReducers} from 'redux';
import dietaryHabitCategorySearchReducer from "./dietary.habit.category.search.reducer";
import dietaryHabitCategoryAddEditReducer from "./dietary.habit.category.add.edit.reducer";

const reducer = combineReducers({
    dietaryHabitCategorySearch: dietaryHabitCategorySearchReducer,
    dietaryHabitCategoryAddEdit: dietaryHabitCategoryAddEditReducer
});

export default reducer;