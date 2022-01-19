import dataService from "../../../../../../services/dataService";
import socialHabitAppEndpoints from "./socail.habit.app.endpoints";

export const GET_SOCIAL_HABIT_CATEGORIES = '[SOCIAL HABIT APP ADD EDIT] GET_SOCIAL_HABIT_CATEGORIES';
export const ON_ADD_EDIT_FORM_CHANGE = '[SOCIAL HABIT APP ADD EDIT] ON_ADD_EDIT_FORM_CHANGE';
export const ON_RESET_FORM_DATA = '[SOCIAL HABIT APP ADD EDIT] ON_RESET_FORM_DATA';
export const ON_SAVE_UPDATE_SOCIAL_HABIT = '[SOCIAL HABIT APP ADD EDIT]ON_SAVE_UPDATE_SOCIAL_HABIT';
export const GET_SOCIAL_HABIT = '[SOCIAL HABIT APP ADD EDIT] GET_SOCIAL_HABIT';
export const ON_RESET_SOCIAL_HABIT = '[SOCIAL HABIT APP ADD EDIT] ON_RESET_SOCIAL_HABIT';


export function getSocialHabitCategories() {
    const request = dataService.get(socialHabitAppEndpoints.getSocialHabitCategoryList);

    return (dispatch, getState) => {
        request.then((response) =>
            dispatch({
                type: GET_SOCIAL_HABIT_CATEGORIES,
                payload: response.data.result
            })
        );
    }
}


export function saveOrUpdateSocialHabit(data) {
    const request = dataService.post(socialHabitAppEndpoints.saveOrUpdateSocialHabit, data);

    return (dispatch, getState) => {
        request.then((response) => {
                dispatch({
                    type: ON_SAVE_UPDATE_SOCIAL_HABIT,
                    payload: response.data.result
                });
            }
        );
    };
}


export function onFormChange(data) {

    return (dispatch, getState) => {
        dispatch({
            type: ON_ADD_EDIT_FORM_CHANGE,
            payload: data
        })
    }
}

export function onFormReset() {

    return (dispatch, getState) => {
        dispatch({
            type: ON_RESET_FORM_DATA,
            payload: {}
        })
    }
}

export function onResetSocailHabit() {

    return (dispatch, getState) => {
        dispatch({
            type: ON_RESET_SOCIAL_HABIT,
            payload: {}
        })
    }
}


export function getSocialHabitDTOByID(socialHabitID) {

    let endpoint = Object.assign({}, socialHabitAppEndpoints.getSocialHabitDTOByID);
    endpoint.url = endpoint.url + '/' + socialHabitID;

    const request = dataService.get(endpoint);

    return (dispatch, getState) => {
        request.then((response) =>
            dispatch({
                type: GET_SOCIAL_HABIT,
                payload: response.data.result
            })
        );
    };

}











