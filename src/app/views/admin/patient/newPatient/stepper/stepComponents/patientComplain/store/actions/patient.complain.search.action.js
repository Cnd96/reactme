import dataService from "../../../../../../../../../services/dataService";

import selectPatientComplainAppEndpoints from "./patient.complain.end.points";

export const SET_PAGE_INFO = '[PATIENT COMPLAIN] SET_PAGE_INFO';
export const SET_SEARCH_DATA = '[PATIENT COMPLAIN] SET_SEARCH_DATA';
export const GET_PAGED_PATIENT_COMPLAINS = '[PATIENT COMPLAIN] GET_PAGED_PATIENT_COMPLAINS';
export const ON_RESET_SEARCH_DATA = '[PATIENT COMPLAIN] ON_RESET_SEARCH_DATA';

export function getPagedPatientComplains(searchRQ) {
    const request = dataService.post(selectPatientComplainAppEndpoints.getPagedPatientComplains, searchRQ);

    return (dispatch, getState) => {
        request.then((response) =>
            dispatch({
                type: GET_PAGED_PATIENT_COMPLAINS,
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

export function removePatientComplain(removeRQ) {
    const request = dataService.post(selectPatientComplainAppEndpoints.removePatientComplain, removeRQ);

    return (dispatch, getState) => {
        request.then((response) =>
            dispatch({
                type: GET_PAGED_PATIENT_COMPLAINS,
                payload: response.data.result
            })
        );
    }
}

