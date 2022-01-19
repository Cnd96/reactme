import {combineReducers} from 'redux';
import physicalActivitySearchReducer from "./physical.activities.search.reducer";
import physicalActivityAddEditReducer from "./physical.activities.add.edit.reducer"

const reducer = combineReducers({
    physicalActivitySearch: physicalActivitySearchReducer,
    physicalActivityAddEdit: physicalActivityAddEditReducer
});

export default reducer;