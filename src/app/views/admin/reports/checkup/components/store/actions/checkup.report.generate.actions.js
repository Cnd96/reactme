import dataService from "../../../../../../../services/dataService";
import checkupReportsByDateAppEndpoints from "./checkup.report.generate.endpoints";

export const GET_CSV_FILE_URL = '[CHECKUP GENERATE CSV ] GET_CSV_FILE_URL';
export const DOWNLOAD_CSV_FILE = '[CHECKUP GENERATE CSV ] DOWNLOAD_CSV_FILE';
export const SET_SEARCH_DATA = '[CHECKUP GENERATE CSV ] SET_SEARCH_DATA';
export const ON_RESET_SEARCH_DATA = '[CHECKUP GENERATE CSV ] ON_RESET_SEARCH_DATA';
export const SET_INCLUDE_SOCIAL_HABITS = '[CHECKUP GENERATE CSV ] SET_INCLUDE_SOCIAL_HABITS';
export const SET_INCLUDE_FAMILY_HISTORY = '[CHECKUP GENERATE CSV ] SET_INCLUDE_FAMILY_HISTORY';
export const SET_INCLUDE_DIETARY_HABITS = '[CHECKUP GENERATE CSV ] SET_INCLUDE_DIETARY_HABITS';
export const SET_INCLUDE_PHYSICAL_ACTIVITIES = '[CHECKUP GENERATE CSV ] SET_INCLUDE_PHYSICAL_ACTIVITIES';
export const SET_INCLUDE_INSTRUCTION = '[CHECKUP GENERATE CSV ] SET_INCLUDE_INSTRUCTION';


export function getCheckUpsDetailCSVReport(searchRQ) {
    const request = dataService.post(checkupReportsByDateAppEndpoints.getCheckUpsDetailCSVReport, searchRQ);

    return (dispatch, getState) => {
        return request.then((response) => {
                return dispatch({
                    type: GET_CSV_FILE_URL,
                    payload: response.data.result
                });
            }
        );
    };
}

export function downloadCheckUpsByDateDetailCSVReport(fileName) {

    let endpoint = Object.assign({}, checkupReportsByDateAppEndpoints.downloadCheckUpsByDateDetailCSVReport);
    endpoint.url = endpoint.url + '/' + fileName;

    const request = dataService.get(endpoint);

    request.then((response) => {
            console.log(response.data.result);
            let blob = new Blob([response.data.result], {type: 'text/csv'});
            let url = window.URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = fileName;
            a.target = '_blank';
            a.click();
        }
    );

    return (dispatch, getState) => {
        request.then((response) =>
            dispatch({
                type: DOWNLOAD_CSV_FILE,
                payload: response.data.result
            })
        );
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

export function setIncludeSocialHabits(data) {
    return (dispatch, getState) => {
        dispatch({
            type: SET_INCLUDE_SOCIAL_HABITS,
            payload: data
        });
    };
}

export function setIncludeFamilyHistory(data) {
    return (dispatch, getState) => {
        dispatch({
            type: SET_INCLUDE_FAMILY_HISTORY,
            payload: data
        });
    };
}

export function setIncludeDietaryHabits(data) {
    return (dispatch, getState) => {
        dispatch({
            type: SET_INCLUDE_DIETARY_HABITS,
            payload: data
        });
    };
}

export function setIncludePhysicalActivities(data) {
    return (dispatch, getState) => {
        dispatch({
            type: SET_INCLUDE_PHYSICAL_ACTIVITIES,
            payload: data
        });
    };
}

export function setIncludeInstruction(data) {
    return (dispatch, getState) => {
        dispatch({
            type: SET_INCLUDE_INSTRUCTION,
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
