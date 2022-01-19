import dataService from "../../../../../../services/dataService";
import medicineAppEndpoints from "./medicine.app.endpoints";

export const GET_MEDICINE = '[MEDICINE ADD EDIT] GET_MEDICINE';
export const ON_ADD_EDIT_FORM_CHANGE = '[MEDICINE ADD EDIT] ON_ADD_EDIT_FORM_CHANGE';
export const ON_SAVE_UPDATE = '[MEDICINE ADD EDIT] ON_SAVE_UPDATE';
export const ON_RESET = '[MEDICINE ADD EDIT] ON_RESET';
export const ON_FORM_RESET = '[MEDICINE ADD EDIT] ON_FORM_RESET';


export function getMedicineDTOByID(medicalTestTypeID) {

    let endpoint = Object.assign({}, medicineAppEndpoints.getMedicineDTOByID);
    endpoint.url = endpoint.url + '/' + medicalTestTypeID;

    const request = dataService.get(endpoint);

    request.then((response) => {
            console.log(response);
        }
    );

    return (dispatch, getState) => {
        request.then((response) =>
            dispatch({
                type: GET_MEDICINE,
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

export function saveOrUpdateMedicine(data) {
    const request = dataService.post(medicineAppEndpoints.saveOrUpdateMedicine, data);

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


