import dataService from "../../../../../../services/dataService";
import medicalTestTypeAppEndpoints from "./medical.test.type.endpoints";

export const SET_PAGE_INFO = '[MEDICAL TEST TYPE SEARCH] SET_PAGE_INFO';
export const SET_SEARCH_DATA = '[MEDICAL TEST TYPE SEARCH] SET_SEARCH_DATA';
export const GET_PAGED_MEDICAL_TEST_TYPE = '[MEDICAL TEST TYPE SEARCH] GET_PAGED_MEDICAL_TEST_TYPE';
export const ON_RESET_SEARCH_DATA = '[MEDICAL TEST TYPE SEARCH] ON_RESET_SEARCH_DATA';


export function getPagedMedicalTestTypes(searchRQ) {
    const request = dataService.post(medicalTestTypeAppEndpoints.getPagedMedicalTestTypes, searchRQ);

    return (dispatch, getState) => {
        request.then((response) =>
            dispatch({
                type: GET_PAGED_MEDICAL_TEST_TYPE,
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
