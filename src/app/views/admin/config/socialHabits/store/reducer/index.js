import {combineReducers} from 'redux';
import socialHabitSearchReducer from './socail.habit.search.reducer';
import socialHabitAddEditReducer from './social.habit.add.edit.reducer'

const reducer = combineReducers({
    socialHabitSearch: socialHabitSearchReducer,
    socialHabitAddEdit: socialHabitAddEditReducer
});

export default reducer;
