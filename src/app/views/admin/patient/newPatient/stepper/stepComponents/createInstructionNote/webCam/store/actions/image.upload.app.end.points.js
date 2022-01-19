import {DEFAULT_SAVE_UPDATE} from "../../../../../../../../../../../utils/MessageUtil";

let webCamImageEndPoints = {

    saveOrUpdateWebCamImage: {
        headerParam: {
            showLoading: true,
            showToast: true,
            skipAuth: false,
            isFileUpload: true,
            message: DEFAULT_SAVE_UPDATE
        },
        url: '/api/document/uploadWebCamImage',
        type: 'POST'
    },

    getWebCamImages: {
        headerParam: {
            showLoading: true,
            showToast: true,
            skipAuth: false,
        },
        url: '/api/document/getWebCamImages',
        type: 'POST'
    },

    removeWebCamImage: {
        headerParam: {
            showLoading: true,
            showToast: true,
            skipAuth: false,
            message: DEFAULT_SAVE_UPDATE
        },
        url: '/api/document/removeWebCamImage',
        type: 'POST'
    },

};

export default webCamImageEndPoints;