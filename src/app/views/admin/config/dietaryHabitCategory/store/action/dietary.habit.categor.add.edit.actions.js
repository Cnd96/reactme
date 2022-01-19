import dataService from "../../../../../../services/dataService";
import dietaryHabitCategoryAppEndpoints from "./dietary.habit.category.app.endpoints";

export const GET_DIETARY_HABIT_CATEGORY = '[DIETARY HABIT CATEGORY ADD EDIT] GET_DIETARY_HABIT_CATEGORY';
export const ON_ADD_EDIT_FORM_CHANGE = '[DIETARY HABIT CATEGORY ADD EDIT] ON_ADD_EDIT_FORM_CHANGE';
export const ON_SAVE_UPDATE = '[DIETARY HABIT CATEGORY ADD EDIT] ON_SAVE_UPDATE';
export const ON_RESET = '[DIETARY HABIT CATEGORY ADD EDIT] ON_RESET';
export const ON_FORM_RESET = '[DIETARY HABIT CATEGORY ADD EDIT] ON_FORM_RESET';


export function getDietaryHabitCategoryByID(DietaryHabitCategoryID) {

    let endpoint = Object.assign({}, dietaryHabitCategoryAppEndpoints.getDietaryHabitCategoryByID);
    endpoint.url = endpoint.url + '/' + DietaryHabitCategoryID;

    const request = dataService.get(endpoint);

    return (dispatch, getState) => {
        request.then((response) =>
            dispatch({
                type: GET_DIETARY_HABIT_CATEGORY,
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

export function saveOrUpdateDietaryHabitCategory(data) {
    const request = dataService.post(dietaryHabitCategoryAppEndpoints.saveOrUpdateDietaryHabitCategory, data);

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


