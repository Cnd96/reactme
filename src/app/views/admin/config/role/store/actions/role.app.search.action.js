import dataService from "../../../../../../services/dataService";
import rolesAppEndpoints from "./role.app.endpoints";

export const SET_PAGE_INFO = '[ROLES APP SEARCH] SET_PAGE_INFO';
export const SET_SEARCH_DATA = '[ROLES APP SEARCH] SET_SEARCH_DATA';
export const GET_PAGED_ROLES = '[ROLES APP SEARCH] GET_PAGED_ROLES';
export const ON_SEARCH_FORM_RESET = '[ROLES APP SEARCH] ON_SEARCH_FORM_RESET';

export function getPagedRoles(searchRQ) {
    const request = dataService.post(rolesAppEndpoints.getPagedRoles, searchRQ);

    return (dispatch, getState) => {
        request.then((response) =>
            dispatch({
                type: GET_PAGED_ROLES,
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
