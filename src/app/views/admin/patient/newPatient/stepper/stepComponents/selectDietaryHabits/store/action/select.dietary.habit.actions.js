import dataService from "../../../../../../../../../services/dataService";
import selectDietaryHabitAppEndpoints from "./select.dietary.habit.endpoints";


export const GET_DIETARY_CATEGORIES = '[SOCIAL HABIT SELECT] GET_DIETARY_CATEGORIES';
export const ON_CHECKUP_SELECT_DIETARY_HABITS = '[SOCIAL HABIT SELECT] ON_CHECKUP_SELECT_DIETARY_HABITS';
export const ON_CHECKUP_SAVE_DIETARY_HABITS = '[SOCIAL HABIT SELECT] ON_CHECKUP_SAVE_DIETARY_HABITS';
export const ON_SET_CHECKUP_DIETARY_HABITS_IDS = '[SOCIAL HABIT SELECT] ON_SET_CHECKUP_DIETARY_HABITS_IDS';
export const ON_RESET_CHECKUP_DIETARY_HABITS = '[SOCIAL HABIT SELECT] ON_RESET_CHECKUP_DIETARY_HABITS   ';

export function getDietaryCategories() {

    const request = dataService.get(selectDietaryHabitAppEndpoints.getDietaryCategories);

    return (dispatch, getState) => {
        request.then((response) => {
                dispatch({
                    type: GET_DIETARY_CATEGORIES,
                    payload: response.data.result
                });
            }
        );
    };
}

export function onSelectOption(data) {
    return (dispatch, getState) => {
        dispatch({
            type: ON_CHECKUP_SELECT_DIETARY_HABITS,
            payload: data
        })
    };
}

export function setCheckupDietaryHabitIds(data) {
    return (dispatch, getState) => {
        dispatch({
            type: ON_SET_CHECKUP_DIETARY_HABITS_IDS,
            payload: data
        })
    };
}

export function saveOrUpdateCheckupWithDietaryHabits(data) {
    const request = dataService.post(selectDietaryHabitAppEndpoints.saveOrUpdateCheckupWithDietaryHabits, data);

    return (dispatch, getState) => {
        return request.then((response) => {
                return dispatch({
                    type: ON_CHECKUP_SAVE_DIETARY_HABITS,
                    payload: response.data.result
                });
            }
        );
    };
}

export function onResetPatientDietaryHabits() {
    return (dispatch, getState) => {
        dispatch({
            type: ON_RESET_CHECKUP_DIETARY_HABITS,
            payload: {}
        })
    };
}

