import dataService from "../../../../../../../../../services/dataService";
import dietNoteAppEndpoints from "./diet.note.app.endpoints";

export const ON_SAVE_DIET_NOTE = '[DIET NOTE ADD EDIT] ON_SAVE_DIET_NOTE';
export const ON_ADD_EDIT_FORM_CHANGE = '[DIET NOTE ADD EDIT]ON_ADD_EDIT_FORM_CHANGE';
export const GET_DIET_NOTE = '[DIET NOTE ADD EDIT] GET_DIET_NOTE';
export const REMOVE_DIET_NOTE_DATA = '[DIET NOTE ADD EDIT] REMOVE_DIET_NOTE_DATA';

export function saveOrUpdateDietNote(data) {
    const request = dataService.post(dietNoteAppEndpoints.saveOrUpdateDietNote, data);

    return (dispatch, getState) => {
        return request.then((response) => {
                return dispatch({
                    type: ON_SAVE_DIET_NOTE,
                    payload: response.data.result
                });
            }
        );
    };
}

export function onFormChange(data) {
    return (dispatch, getState) => {
        dispatch({
            type: ON_ADD_EDIT_FORM_CHANGE,
            payload: data
        })
    };
}

export function getDietNoteDTOByID(dietNoteID) {

    let endpoint = Object.assign({}, dietNoteAppEndpoints.getDietNoteDTOByID);
    endpoint.url = endpoint.url + '/' + dietNoteID;

    const request = dataService.get(endpoint);

    return (dispatch, getState) => {
        request.then((response) =>
            dispatch({
                type: GET_DIET_NOTE,
                payload: response.data.result
            })
        );
    };
}

export function onResetDietNoteData() {
    return (dispatch, getState) => {
        dispatch({
            type: REMOVE_DIET_NOTE_DATA,
            payload: {}
        })
    };
}
