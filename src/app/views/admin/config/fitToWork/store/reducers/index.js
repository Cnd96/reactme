import {combineReducers} from 'redux';
import fitToWorkAddEditReducer from "./fit.to.work.add.edit.reducer";
import fitToWorkSearchReducer from "./fit.to.work.search.reducer";

const reducer = combineReducers({
    fitToWorkSearch: fitToWorkSearchReducer,
    fitToWorkAddEdit: fitToWorkAddEditReducer
});

export default reducer;