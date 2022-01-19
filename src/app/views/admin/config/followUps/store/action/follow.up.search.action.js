import dataService from "../../../../../../services/dataService";
import followUpAppEndpoints from "./follow.up.app.endpoints";

export const SET_PAGE_INFO = '[FOLLOW UP SEARCH] SET_PAGE_INFO';
export const SET_SEARCH_DATA = '[FOLLOW UP SEARCH] SET_SEARCH_DATA';
export const GET_PAGED_FOLLOW_UPS = '[FOLLOW UP SEARCH] GET_PAGED_FOLLOW_UPS';
export const GET_FOLLOW_UP_LIST = '[FOLLOW UP SEARCH] GET_FOLLOW_UP_LIST';
export const ON_RESET_SEARCH_DATA = '[FOLLOW UP SEARCH] ON_RESET_SEARCH_DATA';

export function getPagedFollowUps(searchRQ) {
    const request = dataService.post(followUpAppEndpoints.getPagedFollowUps, searchRQ);

    return (dispatch, getState) => {
        request.then((response) =>
            dispatch({
                type: GET_PAGED_FOLLOW_UPS,
                payload: response.data.result
            })
        );
    }
}

export function getFollowUpList(searchRQ) {
    const request = dataService.post(followUpAppEndpoints.getFollowUpList, searchRQ);

    return (dispatch, getState) => {
        request.then((response) =>
            dispatch({
                type: GET_FOLLOW_UP_LIST,
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


export function saveReOrderedList(data) {
    const request = dataService.post(followUpAppEndpoints.saveReOrderedList, data);

    return (dispatch, getState) => {
        request.then((response) =>
            dispatch({
                type: GET_FOLLOW_UP_LIST,
                payload: response.data.result
            })
        );
    }
}
