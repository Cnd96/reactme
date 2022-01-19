import medicalDiseaseAppEndpoints from "./medical.disease.app.endpoints";
import dataService from "../../../../../../services/dataService";

export const ON_ADD_EDIT_FORM_CHANGE = '[MEDICAL DISEASE ADD EDIT] ON_ADD_EDIT_FORM_CHANGE';
export const ON_SAVE_UPDATE = '[MEDICAL DISEASE ADD EDIT] ON_SAVE_UPDATE';
export const ON_RESET = '[MEDICAL DISEASE ADD EDIT] ON_RESET';
export const GET_MEDICAL_DISEASE = '[MEDICAL DISEASE ADD EDIT] GET_MEDICAL_DISEASE';


export function onFormChange(data) {
    return (dispatch, getState) => {
        dispatch({
            type: ON_ADD_EDIT_FORM_CHANGE,
            payload: data
        })
    };
}

export function saveOrUpdateMedicalDisease(data) {
    const request = dataService.post(medicalDiseaseAppEndpoints.saveOrUpdateMedicalDisease, data);

    return (dispatch, getState) => {
        request.then((response) => {
                dispatch({
                    type: ON_SAVE_UPDATE,
                    payload: response.data.result
                });
            }
        );
    };
}

export function reset() {
    return (dispatch, getState) => {
        dispatch({
            type: ON_RESET,
            payload: {}
        })
    };
}

export function getMedicalDiseaseDTOByID(medicalDiseaseID) {

    let endpoint = Object.assign({}, medicalDiseaseAppEndpoints.getMedicalDiseaseDTOByID);
    endpoint.url = endpoint.url + '/' + medicalDiseaseID;

    const request = dataService.get(endpoint);

    return (dispatch, getState) => {
        request.then((response) =>
            dispatch({
                type: GET_MEDICAL_DISEASE,
                payload: response.data.result
            })
        );
    };

}


