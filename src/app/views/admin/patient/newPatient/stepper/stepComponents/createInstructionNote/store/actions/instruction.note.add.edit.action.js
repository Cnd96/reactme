import dataService from "../../../../../../../../../services/dataService";
import instructionNoteAppEndpoints from "./instruction.note.app.endpoints";

export const ON_SAVE_INSTRUCTION_NOTE = '[INSTRUCTION NOTE ADD EDIT] ON_SAVE_INSTRUCTION_NOTE';
export const ON_ADD_EDIT_FORM_CHANGE = '[INSTRUCTION NOTE ADD EDIT] ON_ADD_EDIT_FORM_CHANGE';
export const GET_INSTRUCTION_NOTE = '[INSTRUCTION NOTE ADD EDIT] GET_INSTRUCTION_NOTE';
export const ON_RESET_INSTRUCTION_NOTE_DATA = '[INSTRUCTION NOTE ADD EDIT] ON_RESET_INSTRUCTION_NOTE_DATA';

export function saveOrUpdateInstructionNote(data) {
    const request = dataService.post(instructionNoteAppEndpoints.saveOrUpdateInstructionNote, data);

    return (dispatch, getState) => {
        return request.then((response) => {
                return dispatch({
                    type: ON_SAVE_INSTRUCTION_NOTE,
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

export function getInstructionNoteDTOByID(instructionNoteID) {

    let endpoint = Object.assign({}, instructionNoteAppEndpoints.getInstructionNoteDTOByID);
    endpoint.url = endpoint.url + '/' + instructionNoteID;

    const request = dataService.get(endpoint);

    return (dispatch, getState) => {
        request.then((response) =>
            dispatch({
                type: GET_INSTRUCTION_NOTE,
                payload: response.data.result
            })
        );
    };
}

export function getInstructionNoteDTOByCheckupID(checkupID) {

    let endpoint = Object.assign({}, instructionNoteAppEndpoints.getInstructionNoteDTOByCheckupID);
    endpoint.url = endpoint.url + '/' + checkupID;

    const request = dataService.get(endpoint);

    return (dispatch, getState) => {
        request.then((response) =>
            dispatch({
                type: GET_INSTRUCTION_NOTE,
                payload: response.data.result
            })
        );
    };
}


export function onRemoveInstructionData() {
    return (dispatch, getState) => {
        dispatch({
            type: ON_RESET_INSTRUCTION_NOTE_DATA,
            payload: {}
        })
    };
}

