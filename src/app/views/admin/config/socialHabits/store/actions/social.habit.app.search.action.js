import dataService from "../../../../../../services/dataService";
import socialHabitAppEndpoints from "./socail.habit.app.endpoints";

export const SET_PAGE_INFO = '[SOCIAL HABIT APP SEARCH] SET_PAGE_INFO';
export const SET_SEARCH_DATA = '[SOCIAL HABIT APP SEARCH] SET_SEARCH_DATA';
export const GET_PAGED_SOCIAL_HABITS = '[SOCIAL HABIT APP SEARCH] GET_PAGED_SOCIAL_HABITS';
export const GET_SOCIAL_HABIT_CATEGORIES = '[SOCIAL HABIT APP SEARCH] GET_SOCIAL_HABIT_CATEGORIES';
export const ON_SEARCH_FORM_RESET = '[SOCIAL HABIT APP SEARCH] ON_SEARCH_FORM_RESET';
export const ON_RESET = '[SOCIAL HABIT APP SEARCH] ON_RESET';

export function getPagedSocialHabits(searchRQ) {
    const request = dataService.post(socialHabitAppEndpoints.getPagedSocialHabits, searchRQ);

    return (dispatch, getState) => {
        request.then((response) =>
            dispatch({
                type: GET_PAGED_SOCIAL_HABITS,
                payload: response.data.result
            })
        );
    }
}

export function setPageInfo(pageInfo) {
    return (dispatch, getState) => {
        dispatch({
            type: SET_PAGE_INFO,
            payload: pageInfo
        });
    };
}

export function setSearchData(data) {
    return (dispatch, getState) => {
        dispatch({
            type: SET_SEARCH_DATA,
            payload: data
        });
    };
}

export function resetSearchData() {
    return (dispatch, getState) => {
        dispatch({
            type: ON_SEARCH_FORM_RESET
        });
    }
}

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


