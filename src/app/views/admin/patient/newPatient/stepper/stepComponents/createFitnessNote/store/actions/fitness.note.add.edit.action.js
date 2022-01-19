import dataService from "../../../../../../../../../services/dataService";
import fitnessNoteAppEndpoints from "./fitness.note.app.endpoints";

export const ON_SAVE_FITNESS_NOTE = '[FITNESS NOTE ADD EDIT] ON_SAVE_DIET_NOTE';
export const ON_ADD_EDIT_FORM_CHANGE = '[FITNESS NOTE ADD EDIT] ON_ADD_EDIT_FORM_CHANGE';
export const GET_FITNESS_NOTE = '[FITNESS NOTE ADD EDIT] GET_FITNESS_NOTE';
export const ON_RESET_FITNESS_NOTE_DATA = '[FITNESS NOTE ADD EDIT] ON_RESET_FITNESS_NOTE_DATA';

export function saveOrUpdateFitnessNote(data) {
    const request = dataService.post(fitnessNoteAppEndpoints.saveOrUpdateFitnessNote, data);

    return (dispatch, getState) => {
        return request.then((response) => {
                return dispatch({
                    type: ON_SAVE_FITNESS_NOTE,
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

export function getFitnessNoteDTOByID(fitnessNoteID) {

    let endpoint = Object.assign({}, fitnessNoteAppEndpoints.getFitnessNoteDTOByID);
    endpoint.url = endpoint.url + '/' + fitnessNoteID;

    const request = dataService.get(endpoint);

    return (dispatch, getState) => {
        request.then((response) =>
            dispatch({
                type: GET_FITNESS_NOTE,
                payload: response.data.result
            })
        );
    };
}

export function onRemoveFitnessNoteData() {
    return (dispatch, getState) => {
        dispatch({
            type: ON_RESET_FITNESS_NOTE_DATA,
            payload: {}
        })
    };
}

