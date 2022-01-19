import dataService from "../../../../../../services/dataService";
import diagnosisAppEndpoints from "./diagnosis.app.endpoints";

export const SET_PAGE_INFO = '[DIAGNOSIS SEARCH] SET_PAGE_INFO';
export const SET_SEARCH_DATA = '[DIAGNOSIS SEARCH] SET_SEARCH_DATA';
export const GET_PAGED_DIAGNOSIS = '[DIAGNOSIS SEARCH] GET_PAGED_DIAGNOSIS';
export const ON_RESET_SEARCH_DATA = "[DIAGNOSIS SEARCH] ON_RESET_SEARCH_DATA";


export function getPagedDiagnosis(searchRQ) {
    const request = dataService.post(diagnosisAppEndpoints.getPagedDiagnosis, searchRQ);

    return (dispatch, getState) => {
        request.then((response) =>
            dispatch({
                type: GET_PAGED_DIAGNOSIS,
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
