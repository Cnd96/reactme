import dataService from "../../../../../../../../../services/dataService";

import selectAllergyHistoryAppEndpoints from "./allergy.app.end.points";

export const SET_PAGE_INFO = '[ALLERGY HISTORY] SET_PAGE_INFO';
export const SET_SEARCH_DATA = '[ALLERGY HISTORY] SET_SEARCH_DATA';
export const GET_PAGED_ALLERGY_HISTORY = '[ALLERGY HISTORY] GET_PAGED_ALLERGY_HISTORY';
export const ON_RESET_SEARCH_DATA = '[ALLERGY HISTORY] ON_RESET_SEARCH_DATA';

export function getPagedAllergyHistory(searchRQ) {
    const request = dataService.post(selectAllergyHistoryAppEndpoints.getPagedAllergyHistory, searchRQ);

    return (dispatch, getState) => {
        request.then((response) =>
            dispatch({
                type: GET_PAGED_ALLERGY_HISTORY,
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

export function removeAllergyHistory(removeRQ) {
    const request = dataService.post(selectAllergyHistoryAppEndpoints.removeAllergyHistory, removeRQ);

    return (dispatch, getState) => {
        request.then((response) =>
            dispatch({
                type: GET_PAGED_ALLERGY_HISTORY,
                payload: response.data.result
            })
        );
    }
}

