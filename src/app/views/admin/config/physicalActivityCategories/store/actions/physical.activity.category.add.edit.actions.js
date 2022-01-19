import dataService from "../../../../../../services/dataService";
import physicalActivityCategoryAppEndpoints from "./physical.activity.category.app.ednpoints";

export const GET_PHYSICAL_ACTIVITIES_CATEGORY = '[PHYSICAL ACTIVITIES CATEGORY ADD EDIT] GET_PHYSICAL_ACTIVITIES_CATEGORY';
export const ON_ADD_EDIT_FORM_CHANGE = '[PHYSICAL ACTIVITIES  CATEGORY ADD EDIT] ON_ADD_EDIT_FORM_CHANGE';
export const ON_SAVE_UPDATE = '[PHYSICAL ACTIVITIES CATEGORY ADD EDIT] ON_SAVE_UPDATE';
export const ON_RESET = '[PHYSICAL ACTIVITIES CATEGORY ADD EDIT] ON_RESET';
export const ON_FORM_RESET = '[PHYSICAL ACTIVITIES CATEGORY ADD EDIT] ON_FORM_RESET';


export function getPhysicalActivityCategoryByID(categoryID) {

    let endpoint = Object.assign({}, physicalActivityCategoryAppEndpoints.getPhysicalActivityCategoryByID);
    endpoint.url = endpoint.url + '/' + categoryID;

    const request = dataService.get(endpoint);

    return (dispatch, getState) => {
        request.then((response) =>
            dispatch({
                type: GET_PHYSICAL_ACTIVITIES_CATEGORY,
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

export function saveOrUpdatePhysicalActivityCategory(data) {
    const request = dataService.post(physicalActivityCategoryAppEndpoints.saveOrUpdatePhysicalActivityCategory, data);

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


