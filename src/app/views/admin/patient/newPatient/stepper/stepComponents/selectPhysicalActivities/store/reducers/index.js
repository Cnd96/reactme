import {combineReducers} from 'redux';
import selectPhysicalActivityReducer from "./select.physical.activities.reducer";

const reducer = combineReducers({
    selectPhysicalActivity: selectPhysicalActivityReducer
});

export default reducer;