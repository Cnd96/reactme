import dataService from "../../../../../../services/dataService"
import userAppEndpoints from "./user.app.endpoints";

export const ON_ADD_EDIT_FORM_CHANGE = '[USER ADD EDIT] ON_ADD_EDIT_FORM_CHANGE';
export const ON_RESET = '[USER ADD EDIT] ON_RESET';
export const ON_SAVE_UPDATE_USER = '[USER ADD EDIT] ON_SAVE_UPDATE_USER';
export const ON_RESET_ADMIN_PASSWORD = '[USER ADD EDIT] ON_RESET_ADMIN_PASSWORD';
export const GET_USER = '[USER ADD EDIT] GET_USER';
export const GET_ACTIVE_USERS = '[USER ADD EDIT] GET_ACTIVE_USERS';
export const GET_ACTIVE_ROLES = '[USER ADD EDIT] GET_ACTIVE_ROLES';
export const SET_ROLE_CHANGE = '[USER ADD EDIT] SET_ROLE_CHANGE';
export const ON_UPDATE_IMAGE = '[USER ADD EDIT] ON_UPDATE_IMAGE';


export function onFormChnange(data) {

    return (dispatch, getState) => {
        dispatch({
            type: ON_ADD_EDIT_FORM_CHANGE,
            payload: data
        })
    }
}

export function reSet() {

    return (dispatch, getState) => {
        dispatch({
            type: ON_RESET,
            payload: {}
        })
    }
}

export function addAdminUser(data) {
    const request = dataService.post(userAppEndpoints.addAdminUser, data);

    return (dispatch, getState) => {
        request.then((response) => {
            dispatch({
                type: ON_SAVE_UPDATE_USER,
                payload: response.data.result
            })
        })
    }
}

export function updateAdminUser(data) {
    const request = dataService.post(userAppEndpoints.updateAdminUser, data);

    return (dispatch, getState) => {
        request.then((response) => {
            dispatch({
                type: ON_SAVE_UPDATE_USER,
                payload: response.data.result
            })
        })
    }
}

export function resetUserPassword(userID) {
    const request = dataService.post(userAppEndpoints.resetUserPassword, {
        userID
    });

    return (dispatch, getState) => {
        request.then((response) => {
            dispatch({
                type: ON_RESET_ADMIN_PASSWORD,
                payload: response.data.result
            })
        })
    }
}

export function updateUserImage(data) {

    const request = dataService.post(userAppEndpoints.updateUserImage, data);

    return (dispatch, getState) => {
        request.then((response) => {
            dispatch({
                type: ON_UPDATE_IMAGE,
                payload: response.data.result
            })
        })
    }
}

export function getUserDTO(userID) {

    let endPoint = Object.assign({}, userAppEndpoints.getUserUpdateDTO);
    endPoint.url = endPoint.url + '/' + userID;

    const request = dataService.get(endPoint);

    return (dispatch, getState) => {
        request.then((response) => {
            dispatch({
                type: GET_USER,
                payload: response.data.result
            })
        })
    }
}

export function getAllUsers() {

    const request = dataService.get(userAppEndpoints.getAllActiveUsers);

    return (dispatch, getState) => {
        request.then((response) => {
            dispatch({
                type: GET_ACTIVE_USERS,
                payload: response.data.result
            })
        })
    }

}

export function onRoleActionChange(data) {
    return (dispatch, getState) => {
        dispatch({
            type: SET_ROLE_CHANGE,
            payload: data
        })
    };
}


export function getAllRoles() {

    const request = dataService.get(userAppEndpoints.getRoles);

    return (dispatch, getState) => {
        request.then((response) => {
            dispatch({
                type: GET_ACTIVE_ROLES,
                payload: response.data.result
            })
        })
    }

}
