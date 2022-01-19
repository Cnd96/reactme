import {
    ADD_DIAGNOSIS_ID,
    GET_DIAGNOSIS_LIST,
    ON_SAVE_CHECKUP_DIAGNOSIS,
    REMOVE_DIAGNOSIS_ID,
    SET_CURRENT_SELECTED_IDS
} from "../actions/select.diagnosis.add.edit.action";

const initialState = {
    diagnosis: [],
    selectedDiagnosisIDs: [],
    currentDiagnosisIDs: [],
};

const diagnosisSelectReducer = function (state = initialState, action) {

    switch (action.type) {
        case GET_DIAGNOSIS_LIST: {
            return {
                ...state,
                diagnosis: action.payload,
            }
        }

        case ADD_DIAGNOSIS_ID : {
            let selectedIDs = _.cloneDeep(state.selectedDiagnosisIDs);
            const index = selectedIDs.indexOf(action.payload);
            if (index === -1) {
                return {
                    ...state,
                    selectedDiagnosisIDs: [...selectedIDs, action.payload]
                }
            } else {
                return {
                    ...state
                }
            }
        }

        case REMOVE_DIAGNOSIS_ID : {
            const index = state.selectedDiagnosisIDs.indexOf(action.payload);
            let selectedIDs = _.cloneDeep(state.selectedDiagnosisIDs);
            if (index > -1) {
                selectedIDs.splice(index, 1);
            }
            return {
                ...state,
                selectedDiagnosisIDs: [...selectedIDs],
            }
        }

        case SET_CURRENT_SELECTED_IDS : {
            let ids = [...action.payload];
            return {
                ...state,
                selectedDiagnosisIDs: ids,
                currentDiagnosisIDs: ids,
            }
        }

        case ON_SAVE_CHECKUP_DIAGNOSIS : {
            return {
                ...state
            }
        }

        default :
            return state;
    }
};

export default diagnosisSelectReducer;