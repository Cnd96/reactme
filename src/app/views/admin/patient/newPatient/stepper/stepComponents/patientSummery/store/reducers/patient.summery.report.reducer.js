import {
    DOWNLOAD_CSV_FILE,
    GET_CHECKUP,
    GET_CHECKUP_DIAGNOSIS_LIST,
    GET_CHECKUP_DIET_NOTE,
    GET_CHECKUP_DIETARY_HABITS,
    GET_CHECKUP_FIT_TO_WORK,
    GET_CHECKUP_FITNESS_NOTE,
    GET_CHECKUP_FOLLOW_UP,
    GET_CHECKUP_INSTRUCTION_NOTE,
    GET_CHECKUP_MEDICAL_TEST_RESULTS,
    GET_CHECKUP_PHYSICAL_ACTIVITIES,
    GET_CSV_FILE_URL,
    GET_PATIENT,
    GET_PATIENT_FAMILY_DISEASES,
    GET_PATIENT_SOCIAL_HABITS
} from "../actions/patient.summery.action";

const initialState = {
    patient: {},
    checkup: {},
    showPages: {},
    patientSocialHabits: [],
    patientFamilyDiseases: [],
    checkupMedicalTestResults: [],
    checkupDietaryHabits: [],
    checkupPhysicalActivities: [],
    checkupDiagnosis: [],
    checkupDietNote: {},
    checkupFitnessNote: {},
    instructionNote: {},
    followUp: {},
    fitToWork: {},
    responseFileUrl: '',
    downloadFile: {},
};

const patientSummeryReportReducer = function (state = initialState, action) {

    switch (action.type) {

        case GET_PATIENT : {
            return {
                ...state,
                patient: action.payload
            }
        }

        case GET_CHECKUP : {
            return {
                ...state,
                checkup: action.payload
            }
        }

        case GET_PATIENT_SOCIAL_HABITS : {
            return {
                ...state,
                patientSocialHabits: action.payload
            }
        }

        case GET_CHECKUP_DIETARY_HABITS : {
            return {
                ...state,
                checkupDietaryHabits: action.payload
            }
        }

        case GET_CHECKUP_PHYSICAL_ACTIVITIES : {
            return {
                ...state,
                checkupPhysicalActivities: action.payload
            }
        }

        case GET_PATIENT_FAMILY_DISEASES: {
            return {
                ...state,
                patientFamilyDiseases: action.payload
            }
        }

        case GET_CHECKUP_MEDICAL_TEST_RESULTS: {
            return {
                ...state,
                checkupMedicalTestResults: action.payload
            }
        }

        case GET_CHECKUP_DIAGNOSIS_LIST: {
            return {
                ...state,
                checkupDiagnosis: action.payload
            }
        }

        case GET_CHECKUP_DIET_NOTE : {
            return {
                ...state,
                checkupDietNote: action.payload
            }
        }

        case GET_CHECKUP_INSTRUCTION_NOTE : {
            return {
                ...state,
                instructionNote: action.payload
            }
        }

        case GET_CHECKUP_FITNESS_NOTE : {
            return {
                ...state,
                checkupFitnessNote: action.payload
            }
        }

        case GET_CHECKUP_FOLLOW_UP : {
            return {
                ...state,
                followUp: action.payload
            }
        }

        case GET_CHECKUP_FIT_TO_WORK : {
            return {
                ...state,
                fitToWork: action.payload
            }
        }

        case GET_CSV_FILE_URL:
            return {
                ...state,
                responseFileUrl: action.payload
            };

        case DOWNLOAD_CSV_FILE: {
            return {
                ...state,
                downloadFile: action.payload
            }
        }


        default :
            return state;
    }
};

export default patientSummeryReportReducer;
