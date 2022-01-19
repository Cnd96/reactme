import dataService from "../../../../../../../../../services/dataService";
import selectOtherLettersEndpoints from "./select.other.letters.endpoints";


export const ON_SELECT_OTHER_LETTERS = '[OTHER LETTERS] ON_SELECT_OTHER_LETTERS';
export const GET_CHECKUP_INSTRUCTION_NOTE = '[OTHER LETTERS] GET CHECKUP INSTRUCTION NOTE';
export const GET_PATIENT = '[OTHER LETTERS] GET PATIENT';
export const GET_CHECKUP = '[OTHER LETTERS] GET CHECKUP';
export const CLEAR_STORE = '[OTHER LETTERS] CLEAR STORE';
export const GET_PRESCRIPTION = '[OTHER LETTERS] GET PRESCRIPTION';
export const GET_HOSPITAL_DETAILS = '[OTHER LETTERS] GET HOSPITAL DETAILS';
export const GET_DOCTOR_DETAILS = '[OTHER LETTERS] GET DOCTOR DETAILS';

export function onSelectOtherLetters(data) {
    return (dispatch, getState) => {
        dispatch({
            type: ON_SELECT_OTHER_LETTERS,
            payload: data
        })
    };
}

export function getCheckupInstructionNoteByCheckupID(data) {
    const request = dataService.post(selectOtherLettersEndpoints.getCheckupInstructionNote, data);
    return (dispatch, getState) => {

        request.then((response) =>
            dispatch({
                type: GET_CHECKUP_INSTRUCTION_NOTE,
                payload: response.data.result
            })
        );
    };
}

export function getPatientDTOByID(patientID) {

    let endpoint = Object.assign({}, selectOtherLettersEndpoints.getPatientDTOByID);
    endpoint.url = endpoint.url + '/' + patientID;

    const request = dataService.get(endpoint);

    return (dispatch, getState) => {
        request.then((response) =>
            dispatch({
                type: GET_PATIENT,
                payload: response.data.result
            })
        );
    };
}

export function getCheckupDTOByID(checkupID) {

    let endpoint = Object.assign({}, selectOtherLettersEndpoints.getCheckupDTOByID);
    endpoint.url = endpoint.url + '/' + checkupID;

    const request = dataService.get(endpoint);

    return (dispatch, getState) => {
        request.then((response) =>
            dispatch({
                type: GET_CHECKUP,
                payload: response.data.result
            })
        );
    };
}

export function clearStore() {
    return (dispatch, getState) => {
        dispatch({
            type: CLEAR_STORE,
        })
    };
}

export function getPrescriptionByID(prescriptionID) {

    let endpoint = Object.assign({}, selectOtherLettersEndpoints.getPrescriptionByID);
    endpoint.url = endpoint.url + '/' + prescriptionID;

    const request = dataService.get(endpoint);

    return (dispatch, getState) => {
        request.then((response) =>
            dispatch({
                type: GET_PRESCRIPTION,
                payload: response.data.result
            })
        );
    };
}

export function getHospitalByID(hospitalID) {

    let endpoint = Object.assign({}, selectOtherLettersEndpoints.getHospitalByID);
    endpoint.url = endpoint.url + '/' + hospitalID;

    const request = dataService.get(endpoint);

    return (dispatch, getState) => {
        request.then((response) =>
            dispatch({
                type: GET_HOSPITAL_DETAILS,
                payload: response.data.result
            })
        );
    };

}

export function getDoctorByID(doctorID) {

    let endpoint = Object.assign({}, selectOtherLettersEndpoints.getDoctorByID);
    endpoint.url = endpoint.url + '/' + doctorID;

    const request = dataService.get(endpoint);

    return (dispatch, getState) => {
        request.then((response) =>
            dispatch({
                type: GET_DOCTOR_DETAILS,
                payload: response.data.result
            })
        );
    };

}

