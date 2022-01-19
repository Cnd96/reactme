import dataService from "../../../../../../services/dataService";
import physicalActivityAppEndpoints from "./physical.activities.app.endpoints";

export const GET_PHYSICAL_ACTIVITY = '[PHYSICAL ACTIVITY ADD EDIT] GET_PHYSICAL_ACTIVITY';
export const GET_PHYSICAL_ACTIVITY_CATEGORIES = '[PHYSICAL ACTIVITY  ADD EDIT] GET_PHYSICAL_ACTIVITY_CATEGORIES';
export const ON_ADD_EDIT_FORM_CHANGE = '[PHYSICAL ACTIVITY ADD EDIT] ON_ADD_EDIT_FORM_CHANGE';
export const ON_SAVE_UPDATE = '[PHYSICAL ACTIVITY ADD EDIT] ON_SAVE_UPDATE';
export const ON_RESET = '[PHYSICAL ACTIVITY ADD EDIT] ON_RESET';
export const ON_FORM_RESET = '[PHYSICAL ACTIVITY  ADD EDIT] ON_FORM_RESET';


export function getPhysicalActivityByID(physicalActivityID) {

    let endpoint = Object.assign({}, physicalActivityAppEndpoints.getPhysicalActivityByID);
    endpoint.url = endpoint.url + '/' + physicalActivityID;

    const request = dataService.get(endpoint);

    return (dispatch, getState) => {
        request.then((response) =>
            dispatch({
                type: GET_PHYSICAL_ACTIVITY,
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

export function saveOrUpdatePhysicalActivity(data) {
    const request = dataService.post(physicalActivityAppEndpoints.saveOrUpdatePhysicalActivity, data);

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

export function getPhysicalActivityCategories() {
    const request = dataService.get(physicalActivityAppEndpoints.getPhysicalActivityCategories);

    return (dispatch, getState) => {
        request.then((response) =>
            dispatch({
                type: GET_PHYSICAL_ACTIVITY_CATEGORIES,
                payload: response.data.result
            })
        );
    }
}


