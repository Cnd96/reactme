import dataService from "../../../../../../../../../services/dataService";
import medicalTestEndpoints from "./patient.add.medical.test.results.app.endpoints";


export const GET_MEDICAL_TEST_TYPES = '[PATIENT MEDICAL TEST ADD EDIT] GET_MEDICAL_TEST_TYPES';
export const SET_MEDICAL_TEST_RESULTS = '[PATIENT MEDICAL TEST ADD EDIT] SET_MEDICAL_TEST_RESULTS';
export const ON_ADD_CHECKUP_MEDICAL_TEST_RESULTS = '[PATIENT MEDICAL TEST ADD EDIT] ON_ADD_CHECKUP_MEDICAL_TEST_RESULTS';
export const ON_RESET = '[PATIENT MEDICAL TEST ADD EDIT] ON_RESET';

export function getMedicalTestTypes() {

    const request = dataService.get(medicalTestEndpoints.getMedicalTestTypes);
    return (dispatch, getState) => {
        request.then((response) => {
                dispatch({
                    type: GET_MEDICAL_TEST_TYPES,
                    payload: response.data.result
                });
            }
        );
    };
}


export function onSetMedicalResult(data) {
    return (dispatch, getState) => {
        dispatch({
            type: SET_MEDICAL_TEST_RESULTS,
            payload: data
        })
    };
}

export function saveOrUpdateCheckupWithPatientMedicalTestsResults(data) {
    const request = dataService.post(medicalTestEndpoints.saveOrUpdateCheckupWithPatientMedicalTestsResults, data);

    return (dispatch, getState) => {
        return request.then((response) => {
                return dispatch({
                    type: ON_ADD_CHECKUP_MEDICAL_TEST_RESULTS,
                    payload: response.data.result
                });
            }
        );
    };
}

export function resetMedicalTest() {
    return (dispatch, getState) => {
        dispatch({
            type: ON_RESET,
            payload: {}
        })
    };
}