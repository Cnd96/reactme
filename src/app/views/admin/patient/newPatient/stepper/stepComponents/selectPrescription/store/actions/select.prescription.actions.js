import dataService from "../../../../../../../../../services/dataService";
import selectPrescriptionTemplateAppEndpoints from "./select.prescription.template.app.endpoints";

export const GET_PRESCRIPTION_TEMPLATE_LIST = '[SELECT PRESCRIPTION TEMPLATE] GET_PRESCRIPTION_TEMPLATE_LIST';
export const GET_MEDICINE_VALUE_LIST = '[SELECT PRESCRIPTION TEMPLATE] GET MEDICINE VALUE LIST';
export const ON_SELECT_PRESCRIPTION = '[SELECT PRESCRIPTION TEMPLATE] ON SELECT PRESCRIPTION';
export const ON_RESET_PRESCRIPTION = '[SELECT PRESCRIPTION TEMPLATE] ON RESET PRESCRIPTION';
export const GET_PRESCRIPTION_TEMPLATE = '[SELECT PRESCRIPTION TEMPLATE]  GET_PRESCRIPTION_TEMPLATE';
export const GET_PRESCRIPTION = '[SELECT PRESCRIPTION TEMPLATE]  GET_PRESCRIPTION';
export const GET_DOES_LIST = '[SELECT PRESCRIPTION TEMPLATE] GET DOES LIST';
export const GET_MEAL_TIME_LIST = '[SELECT PRESCRIPTION TEMPLATE] GET MEAL TIME LIST';
export const GET_FREQUENT_LIST = '[SELECT PRESCRIPTION TEMPLATE] GET FREQUENT LIST';
export const ON_CHECKUP_SAVE_PRESCRIPTION = '[SELECT PRESCRIPTION TEMPLATE] ON_CHECKUP_SAVE_PRESCRIPTION';
export const ADD_TEMPLATE_MEDICINE = '[SELECT PRESCRIPTION TEMPLATE] ADD TEMPLATE MEDICINE';
export const TOGGLE_STATE = '[SELECT PRESCRIPTION TEMPLATE] TOGGLE_STATE';


export function getPrescriptionTemplateList() {
    let endpoint = Object.assign({}, selectPrescriptionTemplateAppEndpoints.getPrescriptionTemplateList);
    const request = dataService.get(endpoint);

    return (dispatch, getState) => {
        request.then((response) =>
            dispatch({
                type: GET_PRESCRIPTION_TEMPLATE_LIST,
                payload: response.data.result
            })
        );
    };
}

export function getMedicineValueList(data) {
    const request = dataService.post(selectPrescriptionTemplateAppEndpoints.getMedicineListOptions, data);
    return (dispatch, getState) => {
        request.then((response) => {
                dispatch({
                    type: GET_MEDICINE_VALUE_LIST,
                    payload: response.data.result
                });
            }
        );
    };
}


export function onSelectPrescription(data) {
    return (dispatch, getState) => {
        dispatch({
            type: ON_SELECT_PRESCRIPTION,
            payload: data
        })
    };
}

export function onResetPrescription() {
    return (dispatch, getState) => {
        dispatch({
            type: ON_RESET_PRESCRIPTION,
        })
    };
}

export function getPrescriptionTemplateByID(categoryID) {

    let endpoint = Object.assign({}, selectPrescriptionTemplateAppEndpoints.getPrescriptionTemplateByID);
    endpoint.url = endpoint.url + '/' + categoryID;

    const request = dataService.get(endpoint);

    return (dispatch, getState) => {
        request.then((response) =>
            dispatch({
                type: GET_PRESCRIPTION_TEMPLATE,
                payload: response.data.result
            })
        );
    };
}

export function getPrescriptionByID(prescriptionID) {

    let endpoint = Object.assign({}, selectPrescriptionTemplateAppEndpoints.getPrescriptionByID);
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

export function getDoseList(data) {
    const request = dataService.post(selectPrescriptionTemplateAppEndpoints.getDoseListOptions, data);
    return (dispatch, getState) => {
        request.then((response) => {
                dispatch({
                    type: GET_DOES_LIST,
                    payload: {[data.medicineID]: response.data.result}
                });
            }
        );
    };
}

export function getMealTimeList(data) {
    const request = dataService.post(selectPrescriptionTemplateAppEndpoints.getMealTimeListOptions, data);
    return (dispatch, getState) => {
        request.then((response) => {
                dispatch({
                    type: GET_MEAL_TIME_LIST,
                    payload: {[data.medicineID]: response.data.result}
                });
            }
        );
    };
}

export function getFrequentList(data) {
    const request = dataService.post(selectPrescriptionTemplateAppEndpoints.getFrequentListOptions, data);
    return (dispatch, getState) => {
        request.then((response) => {
                dispatch({
                    type: GET_FREQUENT_LIST,
                    payload: {[data.medicineID]: response.data.result}
                });
            }
        );
    };
}

export function addTemplateMedicine(data) {

    return (dispatch, getState) => {
        dispatch({
            type: ADD_TEMPLATE_MEDICINE,
            payload: data
        })
    };
}

export function toggleState(data) {

    return (dispatch, getState) => {
        dispatch({
            type: TOGGLE_STATE,
            payload: data
        })
    };
}

export function saveOrUpdateCheckupWithPrescription(data) {
    const request = dataService.post(selectPrescriptionTemplateAppEndpoints.saveOrUpdateCheckupWithPrescription, data);

    return (dispatch, getState) => {
        return request.then((response) => {
                return dispatch({
                    type: ON_CHECKUP_SAVE_PRESCRIPTION,
                    payload: response.data.result
                });
            }
        );
    };
}




