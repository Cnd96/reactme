import {DEFAULT_SAVE_UPDATE} from "../../../../../../../../../../utils/MessageUtil";

let dietNoteAppEndpoints = {

    saveOrUpdateDietNote: {
        headerParam: {
            showLoading: true,
            showToast: true,
            skipAuth: false,
        },
        url: '/api/dietNote/saveOrUpdateDietNote',
        type: 'POST'
    },

    getDietNoteDTOByID: {
        headerParam: {
            showLoading: true,
            showToast: true,
            skipAuth: false
        },
        url: '/api/dietNote/getDietNoteDTOByID',
        type: 'GET'
    },

};

export default dietNoteAppEndpoints;