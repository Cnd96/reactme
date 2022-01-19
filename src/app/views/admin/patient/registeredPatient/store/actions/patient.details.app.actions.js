import dataService from "../../../../../../services/dataService";
import patientDetailsAppEndpoints from "./patient.details.app.endpoints";

export const GET_PATIENT = '[PATIENT DETAILS APP] GET PATIENT';
export const RESET_PATIENT = '[PATIENT DETAILS APP] GET PATIENT';
export const GET_PAGED_CHECKUPS = '[PATIENT DETAILS APP] GET_PAGED_CHECKUPS';

export function getPatientDTOByID(patientID) {

    let endpoint = Object.assign({}, patientDetailsAppEndpoints.getPatientDTOByID);
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

export function resetPatientDetails() {

    return (dispatch, getState) => {
        dispatch({
            type: RESET_PATIENT,
            payload: {}
        });
    };
}

export function getPagedCheckups(searchRQ) {
    const request = dataService.post(patientDetailsAppEndpoints.getPagedCheckups, searchRQ);

    return (dispatch, getState) => {
        request.then((response) =>
            dispatch({
                type: GET_PAGED_CHECKUPS,
                payload: response.data.result
            })
        );
    }
}
