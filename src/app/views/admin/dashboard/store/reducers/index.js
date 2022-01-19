import {combineReducers} from 'redux';
import dashboardReducer from './dashboard.reducer';

const reducer = combineReducers({
    dashboardReducer: dashboardReducer
});

export default reducer;
