import dataService from "../../../../../../../../services/dataService";
import patientCheckupSearchAppEndpoints from "./patient.checkup.search.endpoints";

export const SET_PAGE_INFO = '[PATIENT CHECKUP APP SEARCH] SET_PAGE_INFO';
export const SET_SEARCH_DATA = '[PATIENT CHECKUP APP SEARCH] SET_SEARCH_DATA';
export const GET_PAGED_PATIENT_CHECKUPS = '[PATIENT CHECKUP APP SEARCH] GET_PAGED_PATIENT_CHECKUPS';
export const ON_SEARCH_FORM_RESET = '[PATIENT CHECKUP APP SEARCH] ON_SEARCH_FORM_RESET';
export const ON_PAGED_DATA_RESET = '[PATIENT CHECKUP APP SEARCH] ON_PAGED_DATA_RESET';

export function getPagedPatientCheckups(searchRQ) {
    const request = dataService.post(patientCheckupSearchAppEndpoints.getPagedCheckups, searchRQ);

    return (dispatch, getState) => {
        request.then((response) =>
            dispatch({
                type: GET_PAGED_PATIENT_CHECKUPS,
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

export function resetPagedData() {
    return (dispatch, getState) => {
        dispatch({
            type: ON_PAGED_DATA_RESET
        });
    }
}
