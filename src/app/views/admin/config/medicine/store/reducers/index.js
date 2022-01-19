import {combineReducers} from 'redux';
import medicineAddEditReducer from "./medicine.add.edit.reducer";
import medicineSearchReducer from "./medicine.search.reducer"

const reducer = combineReducers({
    medicineAddEdit: medicineAddEditReducer,
    medicineSearch: medicineSearchReducer
});

export default reducer;