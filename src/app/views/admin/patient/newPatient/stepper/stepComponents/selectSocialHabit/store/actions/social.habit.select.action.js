import dataService from "../../../../../../../../../services/dataService";
import socialHabitAppEndpoints from "./social.habit.select.endpoints";


export const GET_SOCIAL_HABIT_CATEGORIES = '[SOCIAL HABIT SELECT] GET_SOCIAL_HABIT_CATEGORIES';
export const ON_PATIENT_SELECT_SOCIAL_HABITS = '[SOCIAL HABIT SELECT] ON_PATIENT_SELECT_SOCIAL_HABITS';
export const ON_PATIENT_SAVE_SOCIAL_HABITS = '[SOCIAL HABIT SELECT] ON_PATIENT_SAVE_SOCIAL_HABITS';
export const ON_SET_PATIENT_SOCIAL_HABITS_IDS = '[SOCIAL HABIT SELECT] ON_SET_PATIENT_SOCIAL_HABITS_IDS';
export const ON_RESET_PATIENT_SOCIAL_HABITS = '[SOCIAL HABIT SELECT]ON_RESET_PATIENT_SOCIAL_HABITS';

export function getSocialHabitCategories() {

    const request = dataService.get(socialHabitAppEndpoints.getSocialHabitCategories);

    return (dispatch, getState) => {
        request.then((response) => {
                dispatch({
                    type: GET_SOCIAL_HABIT_CATEGORIES,
                    payload: response.data.result
                });
            }
        );
    };
}

export function onSelectOption(data) {
    return (dispatch, getState) => {
        dispatch({
            type: ON_PATIENT_SELECT_SOCIAL_HABITS,
            payload: data
        })
    };
}

export function setPatientSocialHabitIds(data) {
    return (dispatch, getState) => {
        dispatch({
            type: ON_SET_PATIENT_SOCIAL_HABITS_IDS,
            payload: data
        })
    };
}

export function saveOrUpdatePatientWithSocialHabits(data) {
    const request = dataService.post(socialHabitAppEndpoints.saveOrUpdatePatientWithSocialHabits, data);

    return (dispatch, getState) => {
        return request.then((response) => {
                return dispatch({
                    type: ON_PATIENT_SAVE_SOCIAL_HABITS,
                    payload: response.data.result
                });
            }
        );
    };
}

export function onResetPatientSocialHabits() {
    return (dispatch, getState) => {
        dispatch({
            type: ON_RESET_PATIENT_SOCIAL_HABITS,
            payload: {}
        })
    };
}

