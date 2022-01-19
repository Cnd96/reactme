import {DEFAULT_REPORT_GENERATED} from "../../../../../../../../../../utils/MessageUtil";

let patientSummeryAppEndpoints = {

    getPatientDTOByID: {
        headerParam: {
            showLoading: true,
            showToast: true,
            skipAuth: false
        },
        url: '/api/patient/getPatientDTOByID',
        type: 'GET'
    },

    getPatientSocialHabits: {
        headerParam: {
            showLoading: true,
            showToast: true,
            skipAuth: false
        },
        url: '/api/socialHabit/getSocialHabitsList',
        type: 'POST'
    },

    getDietaryHabitsList: {
        headerParam: {
            showLoading: true,
            showToast: true,
            skipAuth: false
        },
        url: '/api/dietary/getDietaryHabitsList',
        type: 'POST'
    },

    getPhysicalActivitiesList:{
        headerParam: {
            showLoading: true,
            showToast: true,
            skipAuth: false
        },
        url: '/api/physicalActivity/getPhysicalActivitiesList',
        type: 'POST'
    },

    getPatientFamilyDiseasesList: {
        headerParam: {
            showLoading: true,
            showToast: true,
            skipAuth: false
        },
        url: '/api/medicalDisease/getPatientFamilyDiseasesList',
        type: 'POST'
    },

    getCheckupMedicalTestResultsList: {
        headerParam: {
            showLoading: true,
            showToast: true,
            skipAuth: false
        },
        url: '/api/medicalTest/getCheckupMedicalTestResultsList',
        type: 'POST'
    },

    getCheckupDiagnosisList: {
        headerParam: {
            showLoading: true,
            showToast: true,
            skipAuth: false
        },
        url: '/api/diagnosis/getCheckupDiagnosisList',
        type: 'POST'
    },


    getCheckupFollowup: {
        headerParam: {
            showLoading: true,
            showToast: true,
            skipAuth: false
        },
        url: '/api/followUp/getCheckupFollowup',
        type: 'POST'
    },

    getCheckupFitToWork: {
        headerParam: {
            showLoading: true,
            showToast: true,
            skipAuth: false
        },
        url: '/api/fitToWork/getCheckupFitToWork',
        type: 'POST'
    },

    getCheckupInstructionNote: {
        headerParam: {
            showLoading: true,
            showToast: true,
            skipAuth: false
        },
        url: '/api/instructionNote/getCheckupInstructionNote',
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

    getCheckupDietNoteByCheckupID: {
        headerParam: {
            showLoading: true,
            showToast: true,
            skipAuth: false
        },
        url: '/api/dietNote/getCheckupDietNote',
        type: 'GET'
    },

    getCheckupFitnessNoteByCheckupID: {
        headerParam: {
            showLoading: true,
            showToast: true,
            skipAuth: false
        },
        url: '/api/fitnessNote/getCheckupFitnessNote',
        type: 'GET'
    },

    getFitnessNoteDTOByID: {
        headerParam: {
            showLoading: true,
            showToast: true,
            skipAuth: false
        },
        url: '/api/fitnessNote/getFitnessNoteDTOByID',
        type: 'GET'
    },

    getCheckupDTOByID: {
        headerParam: {
            showLoading: true,
            showToast: true,
            skipAuth: false
        },
        url: '/api/checkup/getCheckupDTOByID',
        type: 'GET'
    },

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

export default patientSummeryAppEndpoints;
