import {combineReducers} from 'redux';
import prescriptionTemplateAddEditReducer from "./prescription.template.add.edit.reducer";
import prescriptionTemplateSearchReducer from "./prescription.template.search.reducer"

const reducer = combineReducers({
    prescriptionTemplateSearch: prescriptionTemplateSearchReducer,
    prescriptionTemplateAddEdit: prescriptionTemplateAddEditReducer

});

export default reducer;