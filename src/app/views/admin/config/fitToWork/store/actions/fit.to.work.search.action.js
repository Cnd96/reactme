import dataService from "../../../../../../services/dataService";
import fitToWorkAppEndpoints from "./fit.to.work.app.endpoints";

export const SET_PAGE_INFO = '[FIT TO WORK SEARCH] SET_PAGE_INFO';
export const SET_SEARCH_DATA = '[FIT TO WORK SEARCH] SET_SEARCH_DATA';
export const GET_PAGED_FIT_TO_WORKS = '[FIT TO WORK SEARCH] GET_PAGED_FIT_TO_WORKS';
export const GET_FIT_TO_WORK_LIST = '[FIT TO WORK SEARCH] GET_FIT_TO_WORK_LIST';
export const ON_RESET_SEARCH_DATA = '[FIT TO WORK SEARCH] ON_RESET_SEARCH_DATA';
export const ON_REORDER_FIT_TO_WORK = '[FIT TO WORK ADD EDIT] ON_REORDER_FIT_TO_WORK';

export function getPagedFitToWorks(searchRQ) {
    const request = dataService.post(fitToWorkAppEndpoints.getPagedFitToWorks, searchRQ);

    return (dispatch, getState) => {
        request.then((response) =>
            dispatch({
                type: GET_PAGED_FIT_TO_WORKS,
                payload: response.data.result
            })
        );
    }
}

export function getFitToWorkList(searchRQ) {
    const request = dataService.post(fitToWorkAppEndpoints.getFitToWorkList, searchRQ);

    return (dispatch, getState) => {
        request.then((response) =>
            dispatch({
                type: GET_FIT_TO_WORK_LIST,
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

// export function updateFitToWorkOrder(data) {
//     const request = dataService.post(fitToWorkAppEndpoints.updateFitToWorkOrder, data);
//
//     return (dispatch, getState) => {
//         request.then((response) =>
//             dispatch({
//                 type: GET_FIT_TO_WORK_LIST,
//                 payload: response.data.result
//             })
//         );
//     }
// }
