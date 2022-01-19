import {combineReducers} from 'redux';
import socialHabitCategoryAddEditReducer from "./social.habit.category.add.edit.reducer"
import socialHabitCategorySearchReducer from "./social.habit.category.search.reducer";

const reducer = combineReducers({
    socialHabitCategorySearch: socialHabitCategorySearchReducer,
    socialHabitCategoryAddEdit: socialHabitCategoryAddEditReducer
});

export default reducer;
