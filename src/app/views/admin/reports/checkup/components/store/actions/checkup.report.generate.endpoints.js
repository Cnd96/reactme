import {DEFAULT_REPORT_GENERATED} from "../../../../../../../../utils/MessageUtil";

let checkupReportsByDateAppEndpoints = {

    getCheckUpsDetailCSVReport: {
        headerParam: {
            showLoading: true,
            showToast: true,
            skipAuth: false
        },
        url: '/api/report/getCheckUpsDetailCSVReport',
        type: 'POST'
    },

    downloadCheckUpsByDateDetailCSVReport: {
        headerParam: {
            showLoading: true,
            showToast: true,
            skipAuth: false,
            message: DEFAULT_REPORT_GENERATED
        },
        url: '/api/report/downloadReport',
        type: 'GET'
    }
};

export default checkupReportsByDateAppEndpoints;
