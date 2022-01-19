import dataService from "../../../../../../services/dataService";
import dietaryHabitAppEndpoints from "./dietary.habit.app.endpoints";

export const SET_PAGE_INFO = '[DIETARY HABIT SEARCH] SET_PAGE_INFO';
export const SET_SEARCH_DATA = '[DIETARY HABIT SEARCH] SET_SEARCH_DATA';
export const GET_PAGED_DIETARY_HABIT = '[DIETARY HABIT SEARCH] GET_PAGED_DIETARY_HABIT';
export const GET_DIETARY_HABIT_CATEGORIES = '[DIETARY HABIT SEARCH] GET_DIETARY_HABIT_CATEGORIES';
export const ON_RESET_SEARCH_DATA = "[DIETARY HABIT SEARCH] ON_RESET_SEARCH_DATA";


export function getPagedDietaryHabit(searchRQ) {
    const request = dataService.post(dietaryHabitAppEndpoints.getPagedDietaryHabits, searchRQ);

    return (dispatch, getState) => {
        request.then((response) =>
            dispatch({
                type: GET_PAGED_DIETARY_HABIT,
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

export function onResetSearchData() {

    return (dispatch, getState) => {
        dispatch({
            type: ON_RESET_SEARCH_DATA,
        })
    }
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
