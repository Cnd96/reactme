import dataService from "../../../../../../services/dataService";
import physicalActivityCategoryAppEndpoints from "./physical.activity.category.app.ednpoints";

export const SET_PAGE_INFO = '[PHYSICAL ACTIVITY CATEGORY SEARCH] SET_PAGE_INFO';
export const SET_SEARCH_DATA = '[PHYSICAL ACTIVITY CATEGORY SEARCH] SET_SEARCH_DATA';
export const GET_PAGED_PHYSICAL_ACTIVITY_CATEGORY = '[PHYSICAL ACTIVITY CATEGORY SEARCH] GET_PAGED_PHYSICAL_ACTIVITY_CATEGORY';
export const ON_RESET_SEARCH_DATA = "[PHYSICAL ACTIVITY CATEGORY SEARCH] ON_RESET_SEARCH_DATA";


export function getPagedPhysicalActivityCategory(searchRQ) {
    const request = dataService.post(physicalActivityCategoryAppEndpoints.getPagedPhysicalActivityCategory, searchRQ);

    return (dispatch, getState) => {
        request.then((response) =>
            dispatch({
                type: GET_PAGED_PHYSICAL_ACTIVITY_CATEGORY,
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
