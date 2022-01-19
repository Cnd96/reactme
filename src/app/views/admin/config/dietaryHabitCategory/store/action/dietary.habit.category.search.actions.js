import dataService from "../../../../../../services/dataService";
import dietaryHabitCategoryAppEndpoints from "./dietary.habit.category.app.endpoints";

export const SET_PAGE_INFO = '[DIETARY HABIT CATEGORY SEARCH] SET_PAGE_INFO';
export const SET_SEARCH_DATA = '[DIETARY HABIT CATEGORY SEARCH] SET_SEARCH_DATA';
export const GET_PAGED_DIETARY_HABIT_CATEGORY = '[DIETARY HABIT CATEGORY SEARCH] GET_PAGED_DIETARY_HABIT_CATEGORY';
export const ON_RESET_SEARCH_DATA = "[DIETARY HABIT CATEGORY SEARCH] ON_RESET_SEARCH_DATA";


export function getPagedDietaryHabitCategories(searchRQ) {
    const request = dataService.post(dietaryHabitCategoryAppEndpoints.getPagedDietaryHabitCategory, searchRQ);

    return (dispatch, getState) => {
        request.then((response) =>
            dispatch({
                type: GET_PAGED_DIETARY_HABIT_CATEGORY,
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
