import dataService from "../../../../../../services/dataService";
import medicineAppEndpoints from "./medicine.app.endpoints";

export const SET_PAGE_INFO = '[MEDICINE SEARCH] SET_PAGE_INFO';
export const SET_SEARCH_DATA = '[MEDICINE SEARCH] SET_SEARCH_DATA';
export const GET_PAGED_MEDICINE = '[MEDICINE SEARCH] GET_PAGED_MEDICINE';
export const ON_RESET_SEARCH_DATA = '[MEDICINE SEARCH] ON_RESET_SEARCH_DATA';


export function getPagedMedicine(searchRQ) {
    const request = dataService.post(medicineAppEndpoints.getPagedMedicine, searchRQ);

    return (dispatch, getState) => {
        request.then((response) =>
            dispatch({
                type: GET_PAGED_MEDICINE,
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
