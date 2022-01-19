import dataService from "../../../../../../services/dataService";
import patientSearchAppEndpoints from "./patient.search.app.endpoints";

export const SET_PAGE_INFO = '[PATIENT APP SEARCH] SET_PAGE_INFO';
export const SET_SEARCH_DATA = '[PATIENT APP SEARCH] SET_SEARCH_DATA';
export const GET_PAGED_PATIENTS = '[PATIENT APP SEARCH] GET_PAGED_PATIENTS';
export const ON_SEARCH_FORM_RESET = '[PATIENT APP SEARCH] ON_SEARCH_FORM_RESET';

export function getPagedPatients(searchRQ) {
    const request = dataService.post(patientSearchAppEndpoints.getPagedPatients, searchRQ);

    return (dispatch, getState) => {
        request.then((response) =>
            dispatch({
                type: GET_PAGED_PATIENTS,
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
