import dataService from "../../../../../../services/dataService";
import physicalActivityAppEndpoints from "./physical.activities.app.endpoints";

export const SET_PAGE_INFO = '[PHYSICAL ACTIVITY SEARCH] SET_PAGE_INFO';
export const SET_SEARCH_DATA = '[PHYSICAL ACTIVITY SEARCH] SET_SEARCH_DATA';
export const GET_PAGED_PHYSICAL_ACTIVITY = '[PHYSICAL ACTIVITY SEARCH] GET_PAGED_PHYSICAL_ACTIVITY';
export const GET_PHYSICAL_ACTIVITY_CATEGORIES = '[PHYSICAL ACTIVITY SEARCH] GET_PHYSICAL_ACTIVITY_CATEGORIES';
export const ON_RESET_SEARCH_DATA = "[PHYSICAL ACTIVITY SEARCH] ON_RESET_SEARCH_DATA";


export function getPagedPhysicalActivities(searchRQ) {
    const request = dataService.post(physicalActivityAppEndpoints.getPagedPhysicalActivities, searchRQ);

    return (dispatch, getState) => {
        request.then((response) =>
            dispatch({
                type: GET_PAGED_PHYSICAL_ACTIVITY,
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

export function getPhysicalActivityCategories() {
    const request = dataService.get(physicalActivityAppEndpoints.getPhysicalActivityCategories);

    return (dispatch, getState) => {
        request.then((response) =>
            dispatch({
                type: GET_PHYSICAL_ACTIVITY_CATEGORIES,
                payload: response.data.result
            })
        );
    }
}
