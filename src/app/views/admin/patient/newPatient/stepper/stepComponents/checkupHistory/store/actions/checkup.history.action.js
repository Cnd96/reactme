import dataService from "../../../../../../../../../services/dataService";
import checkupHistoryAppEndpoints from "./checkup.history.app.endpoints";

export const GET_CHECKUP_HISTORY_GRAPH_DATA = '[CHECKUP HISTORY DATA] GET CHECKUP HISTORY GRAPH DATA';
export const GET_CHECKUP_HISTORY_FULL_DATA = '[CHECKUP HISTORY DATA] GET CHECKUP HISTORY FULL DATA';
export const ON_RESET_CHECKUP_HISTORY = '[CHECKUP HISTORY DATA] RESET CHECKUP HISTORY DATA';


export function getCheckupHistoryNumericValuesOnlyByPatientID(data) {
    const request = dataService.post(checkupHistoryAppEndpoints.getCheckupHistoryNumericValuesOnlyByPatientID, data);
    return (dispatch, getState) => {
        request.then((response) =>
            dispatch({
                type: GET_CHECKUP_HISTORY_GRAPH_DATA,
                payload: response.data.result
            })
        );
    };

}

export function resetCheckupHistory() {
    return (dispatch, getState) => {
        dispatch({
            type: ON_RESET_CHECKUP_HISTORY,
            payload: {}
        })
    };
}

export function getCheckupFullHistoryByPatientID(data) {
    const request = dataService.post(checkupHistoryAppEndpoints.getCheckupFullHistoryByPatientID, data);
    return (dispatch, getState) => {
        request.then((response) =>
            dispatch({
                type: GET_CHECKUP_HISTORY_FULL_DATA,
                payload: response.data.result
            })
        );
    };

}