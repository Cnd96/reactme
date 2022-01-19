import {
    GET_WEB_CAM_IMAGES,
    ON_ADD_EDIT_FORM_CHANGE,
    ON_REMOVE_WEB_CAM_IMAGE_UPLOAD,
    ON_RESET_DATA,
    ON_SAVE_IMAGE_UPLOAD,
} from "../actions/image.upload.actions";
import Constants from "../../../../../../../../../../../utils/Constants";

const initialState = {
    formData: {},
    imageData: '',
    webCamImage: {},
    procedure: '',
    remark: '',
    status: Constants.STATUS_CONST.ACT,

    webCamImages: []
};

const webCamImageAddEditReducer = function (state = initialState, action) {

    switch (action.type) {

        case ON_SAVE_IMAGE_UPLOAD : {
            console.log(action.payload);
            return {
                ...state,
                imageData: action.payload
            }
        }

        case ON_ADD_EDIT_FORM_CHANGE : {
            return {
                ...state,
                formData: action.payload
            }
        }

        case ON_REMOVE_WEB_CAM_IMAGE_UPLOAD:
        case GET_WEB_CAM_IMAGES : {
            return {
                ...state,
                webCamImages: action.payload
            }
        }

        case ON_RESET_DATA : {
            return {
                ...state,
                ...initialState
            }
        }

        default :
            return state;
    }
};

export default webCamImageAddEditReducer;