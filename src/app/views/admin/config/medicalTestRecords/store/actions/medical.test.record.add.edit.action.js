import dataService from "../../../../../../services/dataService";
import medicalTestRecordAppEndpoints from "./medical.test.record.app.endpoints";

export const GET_MEDICAL_TEST_RECORD = '[MEDICAL TEST RECORD ADD EDIT] GET_MEDICAL_TEST_RECORD';
export const ON_ADD_EDIT_FORM_CHANGE = '[MEDICAL TEST RECORD ADD EDIT] ON_ADD_EDIT_FORM_CHANGE';
export const ON_SAVE_UPDATE = '[MEDICAL TEST RECORD ADD EDIT] ON_SAVE_UPDATE';
export const ON_RESET = '[MEDICAL TEST RECORD ADD EDIT] ON_RESET';
export const ON_FORM_RESET = '[MEDICAL TEST RECORD ADD EDIT] ON_FORM_RESET';
export const GET_MEDICAL_TEST_TYPES = '[MEDICAL TEST RECORD ADD EDIT]GET_MEDICAL_TEST_TYPES';


export function getMedicalTestRecordDTOByID(medicalTestRecordID) {

    let endpoint = Object.assign({}, medicalTestRecordAppEndpoints.getMedicalTestRecordDTOByID);
    endpoint.url = endpoint.url + '/' + medicalTestRecordID;

    const request = dataService.get(endpoint);

    return (dispatch, getState) => {
        request.then((response) =>
            dispatch({
                type: GET_MEDICAL_TEST_RECORD,
                payload: response.data.result
            })
        );
    };
}

export function getMedicalTestTypes() {

    const request = dataService.get(medicalTestRecordAppEndpoints.getMedicalTestTypes);
    return (dispatch, getState) => {
        request.then((response) =>
            dispatch({
                type: GET_MEDICAL_TEST_TYPES,
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

export function saveOrUpdateMedicalTestRecord(data) {
    const request = dataService.post(medicalTestRecordAppEndpoints.saveOrUpdateMedicalTestRecord, data);

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


