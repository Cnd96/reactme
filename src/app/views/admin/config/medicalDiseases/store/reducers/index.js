import {combineReducers} from 'redux';
import medicalDiseaseAddEditReducer from './medical.disease.add.edit.reducer';
import medicalDiseaseAppReducer from "./medical.disease";

const reducer = combineReducers({
    medicalDiseaseSearch: medicalDiseaseAppReducer,
    medicalDiseaseAddEdit: medicalDiseaseAddEditReducer
});

export default reducer;