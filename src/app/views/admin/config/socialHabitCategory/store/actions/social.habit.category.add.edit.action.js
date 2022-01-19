import dataService from "../../../../../../services/dataService";
import socialHabitCategoryAppEndpoints from "./social.habit.category.endpoints";

export const GET_SOCIAL_HABIT_CATEGORY = '[SOCIAL HABIT CATEGORY ADD EDIT] GET_SOCIAL_HABIT_CATEGORY';
export const ON_ADD_EDIT_FORM_CHANGE = '[SOCIAL HABIT CATEGORY  ADD EDIT] ON_ADD_EDIT_FORM_CHANGE';
export const ON_SAVE_UPDATE = '[SOCIAL HABIT CATEGORY ADD EDIT] ON_SAVE_UPDATE';
export const ON_RESET = '[SOCIAL HABIT CATEGORY ADD EDIT] ON_RESET';
export const ON_FORM_RESET = '[SOCIAL HABIT CATEGORY ADD EDIT] ON_FORM_RESET';


export function getSocialHabitCategoryByID(categoryID) {

    let endpoint = Object.assign({}, socialHabitCategoryAppEndpoints.getSocialHabitCategoryByID);
    endpoint.url = endpoint.url + '/' + categoryID;

    const request = dataService.get(endpoint);

    return (dispatch, getState) => {
        request.then((response) =>
            dispatch({
                type: GET_SOCIAL_HABIT_CATEGORY,
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

export function saveOrUpdateSocialHabitCategory(data) {
    const request = dataService.post(socialHabitCategoryAppEndpoints.saveOrUpdateSocialHabitCategory, data);

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


