import dataService from "../../../../../../services/dataService";
import userAppEndpoints from "./user.app.endpoints";

export const SET_PAGE_INFO = '[USER APP SEARCH] SET_PAGE_INFO';
export const SET_SEARCH_DATA = '[USER APP SEARCH] SET_SEARCH_DATA';
export const GET_PAGED_USER = '[USER APP SEARCH] GET_PAGED_USER';
export const ON_RESET_SEARCH_DATA = '[USER APP SEARCH] ON_RESET';

export function getPagedUsers(searchRQ) {
    const request = dataService.post(userAppEndpoints.getPagedUsers, searchRQ);

    return (dispatch, getState) => {
        request.then((response) =>
            dispatch({
                type: GET_PAGED_USER,
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

export function reset() {
    return (dispatch, getState)=>{
        dispatch({
            type: ON_RESET_SEARCH_DATA,
        })
    }
}
