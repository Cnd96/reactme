import dataService from "../../../../../../services/dataService";
import fitToWorkAppEndpoints from "./fit.to.work.app.endpoints";

export const GET_FIT_TO_WORK = '[FIT TO WORK ADD EDIT] GET_FIT_TO_WORK';
export const ON_ADD_EDIT_FORM_CHANGE = '[FIT TO WORK ADD EDIT] ON_ADD_EDIT_FORM_CHANGE';
export const ON_SAVE_UPDATE = '[FIT TO WORK ADD EDIT] ON_SAVE_UPDATE';
export const ON_RESET = '[FIT TO WORK ADD EDIT] ON_RESET';
export const ON_FORM_RESET = '[FIT TO WORK ADD EDIT] ON_FORM_RESET';


export function getFitToWorkByID(fitToWorkID) {

    let endpoint = Object.assign({}, fitToWorkAppEndpoints.getFitToWorkByID);
    endpoint.url = endpoint.url + '/' + fitToWorkID;

    const request = dataService.get(endpoint);

    return (dispatch, getState) => {
        request.then((response) =>
            dispatch({
                type: GET_FIT_TO_WORK,
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

export function saveOrUpdateFitToWork(data) {
    const request = dataService.post(fitToWorkAppEndpoints.saveOrUpdateFitToWork, data);

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


