import dataService from "../../../../../../../../../../services/dataService";
import webCamImageEndPoints from "./image.upload.app.end.points";

export const ON_SAVE_IMAGE_UPLOAD = '[IMAGE UPLOAD] ON_SAVE_IMAGE_UPLOAD';
export const ON_ADD_EDIT_FORM_CHANGE = '[IMAGE UPLOAD] ON_ADD_EDIT_FORM_CHANGE';
export const GET_WEB_CAM_IMAGES = '[IMAGE UPLOAD] GET_WEB_CAM_IMAGES';
export const ON_RESET_DATA = '[IMAGE UPLOAD] ON_RESET_DATA';
export const ON_REMOVE_WEB_CAM_IMAGE_UPLOAD = '[IMAGE UPLOAD] ON_REMOVE_WEB_CAM_IMAGE_UPLOAD';


export function saveOrUpdateWebCamImage(data) {
    const request = dataService.post(webCamImageEndPoints.saveOrUpdateWebCamImage, data);

    return (dispatch, getState) => {
        return request.then((response) => {
                console.log(response);
                return dispatch({
                    type: ON_SAVE_IMAGE_UPLOAD,
                    payload: response.data.result
                });
            }
        );
    };
}

export function getWebCamImages(data) {
    const request = dataService.post(webCamImageEndPoints.getWebCamImages, data);

    return (dispatch, getState) => {
        return request.then((response) => {
                console.log(response);
                return dispatch({
                    type: GET_WEB_CAM_IMAGES,
                    payload: response.data.result
                });
            }
        );
    };
}

export function removeWebCamImage(data) {
    const request = dataService.post(webCamImageEndPoints.removeWebCamImage, data);

    return (dispatch, getState) => {
        return request.then((response) => {
                console.log(response);
                return dispatch({
                    type: ON_REMOVE_WEB_CAM_IMAGE_UPLOAD,
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

export function onResetData(data) {
    return (dispatch, getState) => {
        dispatch({
            type: ON_RESET_DATA,
            payload: data
        })
    };
}


