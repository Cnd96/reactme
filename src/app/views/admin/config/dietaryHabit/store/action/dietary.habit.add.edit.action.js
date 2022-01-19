import dataService from "../../../../../../services/dataService";
import dietaryHabitAppEndpoints from "./dietary.habit.app.endpoints";

export const GET_DIETARY_HABIT = '[DIETARY HABIT ADD EDIT] GET_DIETARY_HABIT';
export const GET_DIETARY_HABIT_CATEGORIES = '[DIETARY HABIT ADD EDIT] GET_DIETARY_HABIT_CATEGORIES';
export const ON_ADD_EDIT_FORM_CHANGE = '[DIETARY HABIT ADD EDIT] ON_ADD_EDIT_FORM_CHANGE';
export const ON_SAVE_UPDATE = '[DIETARY HABIT ADD EDIT] ON_SAVE_UPDATE';
export const ON_RESET = '[DIETARY HABIT ADD EDIT] ON_RESET';
export const ON_FORM_RESET = '[DIETARY HABIT ADD EDIT] ON_FORM_RESET';


export function getDietaryHabitByID(dietaryHabitID) {

    let endpoint = Object.assign({}, dietaryHabitAppEndpoints.getDietaryHabitByID);
    endpoint.url = endpoint.url + '/' + dietaryHabitID;

    const request = dataService.get(endpoint);

    return (dispatch, getState) => {
        request.then((response) =>
            dispatch({
                type: GET_DIETARY_HABIT,
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

export function saveOrUpdateDietaryHabit(data) {
    const request = dataService.post(dietaryHabitAppEndpoints.saveOrUpdateDietaryHabit, data);

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

export function getDietaryCategories() {
    const request = dataService.get(dietaryHabitAppEndpoints.getDietaryCategories);

    return (dispatch, getState) => {
        request.then((response) =>
            dispatch({
                type: GET_DIETARY_HABIT_CATEGORIES,
                payload: response.data.result
            })
        );
    }
}


