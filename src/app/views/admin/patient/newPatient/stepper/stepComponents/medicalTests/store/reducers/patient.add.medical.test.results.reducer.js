import {
    GET_MEDICAL_TEST_TYPES,
    ON_ADD_CHECKUP_MEDICAL_TEST_RESULTS,
    ON_RESET,
    SET_MEDICAL_TEST_RESULTS
} from "../actions";
import * as _ from "lodash";

const initialState = {
    medicalTestTypes: [],
    medicalTestResults: {},
    checkup: {},
    formData: {}
};

const patientMedicalTestAddEditReducer = function (state = initialState, action) {

    switch (action.type) {
        case GET_MEDICAL_TEST_TYPES : {
            return {
                ...state,
                medicalTestTypes: action.payload,
            }
        }

        case SET_MEDICAL_TEST_RESULTS : {
            let obj = _.cloneDeep(state.formData);
            let value = action.payload.value ? action.payload.value : '';
            let measureUnit = action.payload.measureUnit ? action.payload.measureUnit : '';
            let testRecord = {value: value, measureUnit: measureUnit};
            obj = Object.assign(obj, {[action.payload.medicalTestRecordID]: testRecord});

            return {
                ...state,
                formData: obj
            }
        }

        case ON_RESET : {
            return {
                ...state,
                ...initialState
            }
        }

        case ON_ADD_CHECKUP_MEDICAL_TEST_RESULTS : {
            return {
                ...state,
                checkup: action.payload
            }
        }
        default :
            return state;
    }
};

export default patientMedicalTestAddEditReducer;