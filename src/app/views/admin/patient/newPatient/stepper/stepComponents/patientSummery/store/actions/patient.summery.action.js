import patientSummeryAppEndpoints from "./patient.summery.endpoints";
import dataService from "../../../../../../../../../services/dataService";

export const GET_PATIENT_SOCIAL_HABITS = '[PATIENT SUMMERY REPORT] GET_PATIENT_SOCIAL_HABITS';
export const GET_PATIENT_FAMILY_DISEASES = '[PATIENT SUMMERY REPORT] GET_PATIENT_FAMILY_DISEASES';
export const GET_CHECKUP_MEDICAL_TEST_RESULTS = '[PATIENT SUMMERY REPORT] GET_CHECKUP_MEDICAL_TEST_RESULTS';
export const GET_CHECKUP_DIAGNOSIS_LIST = '[PATIENT SUMMERY REPORT] GET_CHECKUP_DIAGNOSIS_LIST';
export const GET_CHECKUP_DIET_NOTE = '[PATIENT SUMMERY REPORT] GET_CHECKUP_DIET_NOTE';
export const GET_CHECKUP_FITNESS_NOTE = '[PATIENT SUMMERY REPORT] GET_CHECKUP_FITNESS_NOTE';
export const GET_CHECKUP_FOLLOW_UP = '[PATIENT SUMMERY REPORT] GET_CHECKUP_FOLLOW_UP';
export const GET_CHECKUP_FIT_TO_WORK = '[PATIENT SUMMERY REPORT] GET_CHECKUP_FIT_TO_WORK';
export const GET_CHECKUP_INSTRUCTION_NOTE = '[PATIENT SUMMERY REPORT] GET_CHECKUP_INSTRUCTION_NOTE';
export const GET_CHECKUP_DIETARY_HABITS = '[PATIENT SUMMERY REPORT] GET_CHECKUP_DIETARY_HABITS';
export const GET_CHECKUP_PHYSICAL_ACTIVITIES = '[PATIENT SUMMERY REPORT] GET_CHECKUP_PHYSICAL_ACTIVITIES';
export const GET_PATIENT = '[PATIENT SUMMERY REPORT] GET_PATIENT';
export const GET_CHECKUP = '[PATIENT SUMMERY REPORT] GET_CHECKUP';
export const GET_CSV_FILE_URL = '[PATIENT SUMMERY REPORT] GET_CSV_FILE_URL';
export const DOWNLOAD_CSV_FILE = '[PATIENT SUMMERY REPORT] DOWNLOAD_CSV_FILE';

export function getPatientDTOByID(patientID) {

    let endpoint = Object.assign({}, patientSummeryAppEndpoints.getPatientDTOByID);
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

    let endpoint = Object.assign({}, patientSummeryAppEndpoints.getCheckupDTOByID);
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

export function getPatientSocialHabits(data) {

    const request = dataService.post(patientSummeryAppEndpoints.getPatientSocialHabits, data);

    return (dispatch, getState) => {
        return request.then((response) => {
                return dispatch({
                    type: GET_PATIENT_SOCIAL_HABITS,
                    payload: response.data.result
                });
            }
        );
    };
}


export function getPatientFamilyDiseasesList(data) {

    const request = dataService.post(patientSummeryAppEndpoints.getPatientFamilyDiseasesList, data);

    return (dispatch, getState) => {
        return request.then((response) => {
                return dispatch({
                    type: GET_PATIENT_FAMILY_DISEASES,
                    payload: response.data.result
                });
            }
        );
    };
}

export function getDietaryHabitsList(data) {

    const request = dataService.post(patientSummeryAppEndpoints.getDietaryHabitsList, data);

    return (dispatch, getState) => {
        return request.then((response) => {
                return dispatch({
                    type: GET_CHECKUP_DIETARY_HABITS,
                    payload: response.data.result
                });
            }
        );
    };
}


export function getPhysicalActivitiesList(data) {

    const request = dataService.post(patientSummeryAppEndpoints.getPhysicalActivitiesList, data);

    return (dispatch, getState) => {
        return request.then((response) => {
                return dispatch({
                    type: GET_CHECKUP_PHYSICAL_ACTIVITIES,
                    payload: response.data.result
                });
            }
        );
    };
}

export function getCheckupMedicalTestResultsList(data) {

    const request = dataService.post(patientSummeryAppEndpoints.getCheckupMedicalTestResultsList, data);

    return (dispatch, getState) => {
        return request.then((response) => {
                return dispatch({
                    type: GET_CHECKUP_MEDICAL_TEST_RESULTS,
                    payload: response.data.result
                });
            }
        );
    };
}

export function getCheckupDiagnosisList(data) {

    const request = dataService.post(patientSummeryAppEndpoints.getCheckupDiagnosisList, data);

    return (dispatch, getState) => {
        return request.then((response) => {
                return dispatch({
                    type: GET_CHECKUP_DIAGNOSIS_LIST,
                    payload: response.data.result
                });
            }
        );
    };
}

export function getCheckupDietNoteDTOByID(dietNoteID) {

    let endpoint = Object.assign({}, patientSummeryAppEndpoints.getDietNoteDTOByID);
    endpoint.url = endpoint.url + '/' + dietNoteID;

    const request = dataService.get(endpoint);

    return (dispatch, getState) => {
        request.then((response) =>
            dispatch({
                type: GET_CHECKUP_DIET_NOTE,
                payload: response.data.result
            })
        );
    };
}

export function getCheckupDietNoteByCheckupID(data) {

    const request = dataService.post(patientSummeryAppEndpoints.getCheckupDietNoteByCheckupID, data);
    return (dispatch, getState) => {
        request.then((response) =>
            dispatch({
                type: GET_CHECKUP_DIET_NOTE,
                payload: response.data.result
            })
        );
    };
}

export function getCheckupFitnessNoteDTOByID(fitnessNoteID) {

    let endpoint = Object.assign({}, patientSummeryAppEndpoints.getFitnessNoteDTOByID);
    endpoint.url = endpoint.url + '/' + fitnessNoteID;

    const request = dataService.get(endpoint);

    return (dispatch, getState) => {
        request.then((response) =>
            dispatch({
                type: GET_CHECKUP_FITNESS_NOTE,
                payload: response.data.result
            })
        );
    };
}

export function getCheckupFitnessNoteByCheckupID(data) {

    const request = dataService.post(patientSummeryAppEndpoints.getCheckupFitnessNoteByCheckupID, data);
    return (dispatch, getState) => {
        request.then((response) =>
            dispatch({
                type: GET_CHECKUP_FITNESS_NOTE,
                payload: response.data.result
            })
        );
    };
}

export function getCheckupInstructionNoteByCheckupID(data) {

    const request = dataService.post(patientSummeryAppEndpoints.getCheckupInstructionNote, data);
    return (dispatch, getState) => {
        request.then((response) =>
            dispatch({
                type: GET_CHECKUP_INSTRUCTION_NOTE,
                payload: response.data.result
            })
        );
    };
}

export function getCheckupFollowUp(data) {

    const request = dataService.post(patientSummeryAppEndpoints.getCheckupFollowup, data);

    return (dispatch, getState) => {
        return request.then((response) => {
                return dispatch({
                    type: GET_CHECKUP_FOLLOW_UP,
                    payload: response.data.result
                });
            }
        );
    };
}


export function getCheckupFitToWork(data) {

    const request = dataService.post(patientSummeryAppEndpoints.getCheckupFitToWork, data);

    return (dispatch, getState) => {
        return request.then((response) => {
                return dispatch({
                    type: GET_CHECKUP_FIT_TO_WORK,
                    payload: response.data.result
                });
            }
        );
    };
}


export function getCheckUpsDetailCSVReport(searchRQ) {
    const request = dataService.post(patientSummeryAppEndpoints.getCheckUpsDetailCSVReport, searchRQ);

    return (dispatch, getState) => {
        return request.then((response) => {
                return dispatch({
                    type: GET_CSV_FILE_URL,
                    payload: response.data.result
                });
            }
        );
    };
}

export function downloadCheckUpsByDateDetailCSVReport(fileName) {

    let endpoint = Object.assign({}, patientSummeryAppEndpoints.downloadCheckUpsByDateDetailCSVReport);
    endpoint.url = endpoint.url + '/' + fileName;

    const request = dataService.get(endpoint);

    request.then((response) => {
            console.log(response.data.result);
            let blob = new Blob([response.data.result], {type: 'text/csv'});
            let url = window.URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = fileName;
            a.target = '_blank';
            a.click();
        }
    );

    return (dispatch, getState) => {
        request.then((response) =>
            dispatch({
                type: DOWNLOAD_CSV_FILE,
                payload: response.data.result
            })
        );
    };
}







