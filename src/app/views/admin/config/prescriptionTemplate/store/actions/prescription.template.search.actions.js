import dataService from "../../../../../../services/dataService";
import prescriptionTemplateAppEndpoints from "./prescription.template.app.endpoints";

export const SET_PAGE_INFO = '[PRESCRIPTION TEMPLATE SEARCH] SET_PAGE_INFO';
export const SET_SEARCH_DATA = '[PRESCRIPTION TEMPLATE SEARCH] SET_SEARCH_DATA';
export const GET_PAGED_PRESCRIPTION_TEMPLATE = '[PRESCRIPTION TEMPLATE SEARCH] GET_PAGED_PRESCRIPTION_TEMPLATE';
export const ON_RESET_SEARCH_DATA = "[PRESCRIPTION TEMPLATE SEARCH] ON_RESET_SEARCH_DATA";


export function getPagedPrescriptionTemplate(searchRQ) {
    const request = dataService.post(prescriptionTemplateAppEndpoints.getPagedPrescriptionTemplate, searchRQ);

    return (dispatch, getState) => {
        request.then((response) =>
            dispatch({
                type: GET_PAGED_PRESCRIPTION_TEMPLATE,
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
