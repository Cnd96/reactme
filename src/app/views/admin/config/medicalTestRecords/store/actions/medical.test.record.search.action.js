import dataService from "../../../../../../services/dataService";
import medicalTestRecordAppEndpoints from "./medical.test.record.app.endpoints";

export const SET_PAGE_INFO = '[MEDICAL TEST TYPE SEARCH] SET_PAGE_INFO';
export const SET_SEARCH_DATA = '[MEDICAL TEST TYPE SEARCH] SET_SEARCH_DATA';
export const GET_PAGED_MEDICAL_TEST_RECORD = '[MEDICAL TEST RECORD SEARCH] GET_PAGED_MEDICAL_TEST_RECORD';
export const ON_RESET_SEARCH_DATA = '[MEDICAL TEST TYPE SEARCH] ON_RESET_SEARCH_DATA';
export const GET_MEDICAL_TEST_TYPES = '[MEDICAL TEST TYPE SEARCH] GET_MEDICAL_TEST_TYPES';


export function getPagedMedicalTestRecords(searchRQ) {
    const request = dataService.post(medicalTestRecordAppEndpoints.getPagedMedicalTestRecords, searchRQ);

    return (dispatch, getState) => {
        request.then((response) =>
            dispatch({
                type: GET_PAGED_MEDICAL_TEST_RECORD,
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

export function getMedicalTestTypes() {

    const request = dataService.get(medicalTestRecordAppEndpoints.getMedicalTestTypes);
    return (dispatch, getState) => {
        request.then((response) =>
            dispatch({
                type: GET_MEDICAL_TEST_TYPES,
                payload: response.data.result
            })
        );
    };

}
