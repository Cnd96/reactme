import dataService from "../../../../../../../../../services/dataService";
import familyTypeAppEndpoints from "./family.type.endpoints";

export const GET_ALL_FAMILY_TYPES = '[FAMILY TYPE ADD EDIT] GET_ALL_FAMILY_TYPES';
export const ON_ADD_EDIT_FORM_CHANGE = '[FAMILY TYPE ADD EDIT] ON_ADD_EDIT_FORM_CHANGE';
export const GET_MEDICAL_DISEASES_LIST = '[FAMILY TYPE ADD EDIT] GET_MEDICAL_DISEASES_LIST';
export const ADD_MEDICAL_DISEASE_ID = '[FAMILY TYPE ADD EDIT] SET_MEDICAL_DISEASE_ID';
export const REMOVE_MEDICAL_DISEASE_ID = '[FAMILY TYPE ADD EDIT] REMOVE_MEDICAL_DISEASE_ID';
export const ON_SAVE_FAMILY_DISEASES = '[FAMILY TYPE ADD EDIT] ON_SAVE_FAMILY_DISEASES';
export const SET_PATIENT_INITIAL_DATA = '[FAMILY TYPE ADD EDIT] SET_PATIENT_INITIAL_DATA';

export function getAllFamilyTypes() {

    const request = dataService.get(familyTypeAppEndpoints.getAllFamilyTypes);

    return (dispatch, getState) => {
        request.then((response) => {
                dispatch({
                    type: GET_ALL_FAMILY_TYPES,
                    payload: response.data.result
                });
            }
        );
    };
}

export function onFormChange(data) {
    return (dispatch, getState) => {
        dispatch({
            type: ON_ADD_EDIT_FORM_CHANGE,
            payload: data
        })
    };
}

export function onAddMedicalDiseaseID(data) {
    return (dispatch, getState) => {
        dispatch({
            type: ADD_MEDICAL_DISEASE_ID,
            payload: data
        })
    };
}

export function onRemoveMedicalDiseaseID(data) {
    return (dispatch, getState) => {
        dispatch({
            type: REMOVE_MEDICAL_DISEASE_ID,
            payload: data
        })
    };
}

export function getMedicalDiseasesList(searchRQ) {
    const request = dataService.post(familyTypeAppEndpoints.getMedicalDiseasesList, searchRQ);
    return (dispatch, getState) => {
        request.then((response) =>
            dispatch({
                type: GET_MEDICAL_DISEASES_LIST,
                payload: response.data.result
            })
        );
    }
}

export function saveOrUpdatePatientWithFamilyDiseases(data) {
    const request = dataService.post(familyTypeAppEndpoints.saveOrUpdatePatientWithFamilyDiseases, data);

    return (dispatch, getState) => {
        return request.then((response) => {
                return dispatch({
                    type: ON_SAVE_FAMILY_DISEASES,
                    payload: response.data.result
                });
            }
        );
    };
}


export function setPatientInitialData(data) {
    return (dispatch, getState) => {
        dispatch({
            type: SET_PATIENT_INITIAL_DATA,
            payload: data
        })
    };
}

