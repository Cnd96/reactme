import {combineReducers} from 'redux';
import socialHabitSelectReducer from "./social.habit.add.edit.reducer";

const reducer = combineReducers({
    socialHabitSelect: socialHabitSelectReducer
});

export default reducer;