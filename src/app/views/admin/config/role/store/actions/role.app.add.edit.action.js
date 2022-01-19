import dataService from "../../../../../../services/dataService";
import rolesAppEndpoints from './role.app.endpoints';

export const GET_ROLE = '[ROLE ADD EDIT] GET_ROLE';
export const GET_ALL_PRIVILEGES = '[ROLE ADD EDIT] GET ALL PRIVILEGES';
export const ON_ADD_EDIT_FORM_CHANGE = '[ROLE ADD EDIT] ON_ADD_EDIT_FORM_CHANGE';
export const ON_PRIVILEGE_CHANGE = '[ROLE ADD EDIT] ON_PRIVILEGE_CHANGE';
export const ON_SAVE_UPDATE = '[ROLE ADD EDIT] ON_SAVE_UPDATE';
export const ON_RESET = '[ROLE ADD EDIT] ON_RESET';

export function getAllPrivileges() {

    const request = dataService.get(rolesAppEndpoints.getSystemPrivileges);

    return (dispatch, getState) => {
        request.then((response) => {
                dispatch({
                    type: GET_ALL_PRIVILEGES,
                    payload: response.data.result
                });
            }
        );
    };

}

export function getRole(roleID) {

    let endpoint = Object.assign({}, rolesAppEndpoints.getRoleUpdateDTO);
    endpoint.url = endpoint.url + '/' + roleID;

    const request = dataService.get(endpoint);

    return (dispatch, getState) => {
        request.then((response) =>
            dispatch({
                type: GET_ROLE,
                payload: response.data.result
            })
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

export function onPrivilegeChange(data) {
    return (dispatch, getState) => {
        dispatch({
            type: ON_PRIVILEGE_CHANGE,
            payload: data
        })
    };
}

export function reset() {
    return (dispatch, getState) => {
        dispatch({
            type: ON_RESET,
            payload: {}
        })
    };
}

export function saveUpdateRole(data) {
    const request = dataService.post(rolesAppEndpoints.saveOrUpdateRole, data);

    return (dispatch, getState) => {
        request.then((response) => {
                dispatch({
                    type: ON_SAVE_UPDATE,
                    payload: response.data.result
                });
            }
        );
    };
}


