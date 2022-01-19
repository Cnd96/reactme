import medicalDiseaseAppEndpoints from "./medical.disease.app.endpoints";
import dataService from "../../../../../../services/dataService";

export const SET_PAGE_INFO = '[MEDICAL DISEASE SEARCH] SET_PAGE_INFO';
export const SET_SEARCH_DATA = '[MEDICAL DISEASE SEARCH] SET_SEARCH_DATA';
export const GET_PAGED_MEDICAL_DISEASES = '[MEDICAL DISEASE SEARCH] GET_PAGED_MEDICAL_DISEASES';
export const ON_RESET_SEARCH_DATA = "[MEDICAL DISEASE SEARCH] ON_RESET_SEARCH_DATA";


export function getPagedMedicalDiseases(searchRQ) {
    const request = dataService.post(medicalDiseaseAppEndpoints.getPagedMedicalDiseases, searchRQ);

    return (dispatch, getState) => {
        request.then((response) =>
            dispatch({
                type: GET_PAGED_MEDICAL_DISEASES,
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
