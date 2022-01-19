import {combineReducers} from 'redux';
import physicalActivityCategorySearchReducer from "./physical.activity.category.seach.reducer";
import physicalActivitiesCategoryAddEditReducer from "./physical.activity.category.add.edit.reducer"

const reducer = combineReducers({
    physicalActivityCategorySearch: physicalActivityCategorySearchReducer,
    physicalActivitiesCategoryAddEdit: physicalActivitiesCategoryAddEditReducer

});

export default reducer;