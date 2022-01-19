import dataService from "../../../../../../services/dataService";
import medicalTestTypeAppEndpoints from "./medical.test.type.endpoints";

export const GET_MEDICAL_TEST_TYPE = '[MEDICAL TEST TYPE ADD EDIT] GET_MEDICAL_TEST_TYPE';
export const ON_ADD_EDIT_FORM_CHANGE = '[MEDICAL TEST TYPE ADD EDIT] ON_ADD_EDIT_FORM_CHANGE';
export const ON_SAVE_UPDATE = '[MEDICAL TEST TYPE ADD EDIT] ON_SAVE_UPDATE';
export const ON_RESET = '[MEDICAL TEST TYPE ADD EDIT] ON_RESET';
export const ON_FORM_RESET = '[MEDICAL TEST TYPE ADD EDIT] ON_FORM_RESET';


export function getMedicalTestTypeDTOByID(medicalTestTypeID) {

    let endpoint = Object.assign({}, medicalTestTypeAppEndpoints.getMedicalTestTypeDTOByID);
    endpoint.url = endpoint.url + '/' + medicalTestTypeID;

    const request = dataService.get(endpoint);

    return (dispatch, getState) => {
        request.then((response) =>
            dispatch({
                type: GET_MEDICAL_TEST_TYPE,
                payload: response.data.result
            })
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

export function reset() {
    return (dispatch, getState) => {
        dispatch({
            type: ON_RESET,
            payload: {}
        })
    };
}

export function onFormReset() {
    return (dispatch, getState) => {
        dispatch({
            type: ON_FORM_RESET,
            payload: {}
        })
    };
}

export function saveUpdateMedicalTestType(data) {
    const request = dataService.post(medicalTestTypeAppEndpoints.saveOrUpdateMedicalTestType, data);

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


