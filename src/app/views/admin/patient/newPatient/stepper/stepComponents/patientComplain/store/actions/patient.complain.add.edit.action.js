import dataService from "../../../../../../../../../services/dataService";
import selectPatientComplainAppEndpoints from "./patient.complain.end.points";

export const ON_ADD_EDIT_FORM_CHANGE = '[PATIENT COMPLAIN ] ON_ADD_EDIT_FORM_CHANGE';
export const GET_PATIENT_COMPLAIN_LIST = '[PATIENT COMPLAIN ] GET_PATIENT_COMPLAIN_LIST';
export const GET_PATIENT_COMPLAIN = '[ PATIENT COMPLAIN ] GET_PATIENT_COMPLAINT';
export const ON_SAVE_PATIENT_COMPLAIN = '[PATIENT COMPLAIN ] ON_SAVE_PATIENT_COMPLAIN';
export const ON_RESET_FORM = '[PATIENT COMPLAIN ] ON_RESET_FORM';
export const ON_SET_PATIENT_COMPLAIN_TO_FORM = '[PATIENT COMPLAIN ] ON_SET_PATIENT_COMPLAIN_TO_FORM';
export const ON_RESET_PATIENT_COMPLAIN = '[PATIENT COMPLAIN ] ON_RESET_PATIENT_COMPLAIN_FORM';

export function getPatientsComplainList(data) {
    const request = dataService.post(selectPatientComplainAppEndpoints.getPatientsComplainList, data);

    return (dispatch, getState) => {
        request.then((response) =>
            dispatch({
                type: GET_PATIENT_COMPLAIN_LIST,
                payload: response.data.result
            })
        );
    }
}

export function getPatientComplainByID(patientComplainID) {
    let endpoint = Object.assign({}, selectPatientComplainAppEndpoints.getPatientComplainByID);
    endpoint.url = endpoint.url + '/' + patientComplainID;

    const request = dataService.get(endpoint);

    return (dispatch, getState) => {
        request.then((response) =>
            dispatch({
                type: GET_PATIENT_COMPLAIN,
                payload: response.data.result
            })
        );
    };
}


export function saveOrUpdatePatientComplain(data) {
    const request = dataService.post(selectPatientComplainAppEndpoints.saveOrUpdatePatientComplain, data);

    return (dispatch, getState) => {
        return request.then((response) => {
                return dispatch({
                    type: ON_SAVE_PATIENT_COMPLAIN,
                    payload: response.data.result
                });
            }
        );
    };
}

export function saveOrUpdatePatientComplainWithMessage(data) {
    const request = dataService.post(selectPatientComplainAppEndpoints.saveOrUpdatePatientComplainWithMessage, data);

    return (dispatch, getState) => {
        return request.then((response) => {
                return dispatch({
                    type: ON_SAVE_PATIENT_COMPLAIN,
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


export function onResetForm() {
    return (dispatch, getState) => {
        return dispatch({
            type: ON_RESET_FORM,
            payload: {}
        })
    };
}


export function onResetPatrintComplain() {

    return (dispatch, getState) => {
        return dispatch({
            type: ON_RESET_PATIENT_COMPLAIN,
            payload: {}
        })
    };
}

export function onSetPatientComplainToForm(data) {

    return (dispatch, getState) => {
        return dispatch({
            type: ON_SET_PATIENT_COMPLAIN_TO_FORM,
            payload: data
        })
    };
}

