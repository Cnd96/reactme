import dataService from "../../../../../../services/dataService";
import prescriptionTemplateAppEndpoints from "./prescription.template.app.endpoints";

export const GET_PRESCRIPTION_TEMPLATE = '[PRESCRIPTION TEMPLATE ADD EDIT] GET_PRESCRIPTION_TEMPLATE';
export const ON_ADD_EDIT_FORM_CHANGE = '[PRESCRIPTION TEMPLATE ADD EDIT] ON_ADD_EDIT_FORM_CHANGE';
export const ON_SAVE_UPDATE = '[PRESCRIPTION TEMPLATE ADD EDIT] ON_SAVE_UPDATE';
export const ON_RESET = '[PRESCRIPTION TEMPLATE ADD EDIT] ON_RESET';
export const ON_FORM_RESET = '[PRESCRIPTION TEMPLATE ADD EDIT] ON_FORM_RESET';
export const ON_SET_SELECTED_IDS = '[PRESCRIPTION TEMPLATE ADD EDIT] ON SET SELECTED IDS';
export const ON_ADD_MEDICINE = '[PRESCRIPTION TEMPLATE ADD EDIT] ON ADD MEDICINE';
export const GET_DOES_LIST = '[PRESCRIPTION TEMPLATE ADD EDIT] GET DOES LIST';
export const GET_MEAL_TIME_LIST = '[PRESCRIPTION TEMPLATE ADD EDIT] GET MEAL TIME LIST';
export const GET_FREQUENT_LIST = '[PRESCRIPTION TEMPLATE ADD EDIT] GET FREQUENT LIST';
export const GET_MEDICINE_VALUE_LIST = '[PRESCRIPTION TEMPLATE ADD EDIT] GET MEDICINE VALUE LIST';
export const ADD_TEMPLATE_MEDICINE = '[PRESCRIPTION TEMPLATE ADD EDIT] ADD TEMPLATE MEDICINE';
export const TOGGLE_STATE = '[PRESCRIPTION TEMPLATE ADD EDIT] TOGGLE_STATE';


export function getPrescriptionTemplateByID(categoryID) {

    let endpoint = Object.assign({}, prescriptionTemplateAppEndpoints.getPrescriptionTemplateByID);
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

export function saveOrUpdatePrescriptionTemplate(data) {
    const request = dataService.post(prescriptionTemplateAppEndpoints.saveOrUpdatePrescriptionTemplate, data);

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

export function onSetSelectedIDs(data) {
    return (dispatch, getState) => {
        dispatch({
            type: ON_SET_SELECTED_IDS,
            payload: data
        })
    };
}

export function onAddMedicine(data) {
    return (dispatch, getState) => {
        dispatch({
            type: ON_ADD_MEDICINE,
            payload: data
        })
    };
}


export function getDoseList(data) {
    const request = dataService.post(prescriptionTemplateAppEndpoints.getDoseListOptions, data);
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
    const request = dataService.post(prescriptionTemplateAppEndpoints.getMealTimeListOptions, data);
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
    const request = dataService.post(prescriptionTemplateAppEndpoints.getFrequentListOptions, data);
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

export function getMedicineValueList(data) {
    const request = dataService.post(prescriptionTemplateAppEndpoints.getMedicineListOptions, data);
    return (dispatch, getState) => {
        request.then((response) => {
                let dataToAdd = response.data.result;
                if(dataToAdd.length>0){
                    dataToAdd.forEach(d=>{
                        if(d.tradeName){
                            d.label= d.label + ' (' +d.tradeName+')'
                            d.medicineName= d.medicineName + ' (' +d.medicineName+')'
                            d.value= d.value + ' (' +d.value+')'
                        }
                    })
                }
                dispatch({
                    type: GET_MEDICINE_VALUE_LIST,
                    payload: dataToAdd
                });
            }
        );
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




