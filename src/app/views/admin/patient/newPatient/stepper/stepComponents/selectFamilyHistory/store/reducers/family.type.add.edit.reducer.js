import {
    ADD_MEDICAL_DISEASE_ID,
    GET_ALL_FAMILY_TYPES,
    GET_MEDICAL_DISEASES_LIST,
    ON_ADD_EDIT_FORM_CHANGE,
    ON_SAVE_FAMILY_DISEASES,
    REMOVE_MEDICAL_DISEASE_ID,
    SET_PATIENT_INITIAL_DATA
} from "../actions";

import * as _ from "lodash";

const initialState = {
    familyTypes: [],
    formData: {},
    medicalDiseases: [],
    selectedMedicalDiseasesMap: {},
    currentMedicalDiseasesMap: {},
    familyTypeID: ''
};

const familyTypeAddEditReducer = function (state = initialState, action) {

    switch (action.type) {
        case GET_ALL_FAMILY_TYPES: {
            return {
                ...state,
                familyTypes: action.payload,
            }
        }

        case ON_ADD_EDIT_FORM_CHANGE : {
            return {
                ...state,
                formData: action.payload
            }
        }

        case ADD_MEDICAL_DISEASE_ID : {

            let {medicalDiseaseID, familyTypeID} = action.payload;
            let medicalDiseaseMap = _.cloneDeep(state.selectedMedicalDiseasesMap);

            if (medicalDiseaseMap[familyTypeID]) {
                medicalDiseaseMap[familyTypeID].push(medicalDiseaseID);
            } else {
                medicalDiseaseMap[familyTypeID] = [medicalDiseaseID];
            }

            return {
                ...state,
                selectedMedicalDiseasesMap: medicalDiseaseMap
            }

        }

        case REMOVE_MEDICAL_DISEASE_ID : {
            let {medicalDiseaseID, familyTypeID} = action.payload;
            let medicalDiseaseMap = _.cloneDeep(state.selectedMedicalDiseasesMap);
            let idArray = medicalDiseaseMap[familyTypeID];

            const index = idArray.indexOf(medicalDiseaseID);

            if (index > -1) {
                idArray.splice(index, 1);
            }
            medicalDiseaseMap[familyTypeID] = idArray;

            return {
                ...state,
                selectedMedicalDiseasesMap: medicalDiseaseMap
            }
        }

        case GET_MEDICAL_DISEASES_LIST: {
            return {
                ...state,
                medicalDiseases: action.payload
            }
        }

        case SET_PATIENT_INITIAL_DATA: {
            let {currentMedicalDiseasesMap} = action.payload;

            return {
                ...state,
                currentMedicalDiseasesMap: currentMedicalDiseasesMap ? currentMedicalDiseasesMap : {},
                selectedMedicalDiseasesMap: currentMedicalDiseasesMap ? currentMedicalDiseasesMap : {},
            }
        }

        case ON_SAVE_FAMILY_DISEASES: {
            return {
                ...state,
            }
        }

        default :
            return state;
    }
};

export default familyTypeAddEditReducer;

