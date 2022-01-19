import {
    ADD_TEMPLATE_MEDICINE,
    GET_DOES_LIST,
    GET_FREQUENT_LIST,
    GET_MEAL_TIME_LIST,
    GET_MEDICINE_VALUE_LIST,
    GET_PRESCRIPTION_TEMPLATE,
    ON_ADD_EDIT_FORM_CHANGE,
    ON_FORM_RESET,
    ON_RESET,
    ON_SAVE_UPDATE,
    ON_SET_SELECTED_IDS,
    TOGGLE_STATE
} from "../actions/index";
import {addMedicineLine, initMedicineLines, setMedicineLines} from "../../../../../../../utils/HealthTrackerUtils";
import {cloneDeep, find} from "lodash";

const initialState = {
    medicineList: [],
    prescriptionTemplate: {},
    formData: {},
    selectedIDS: [],
    dose: {},
    mealTime: {},
    frequents: {},
    addedTemplateMedicine: initMedicineLines()
};

const prescriptionTemplateAddEditReducer = function (state = initialState, action) {

    switch (action.type) {
        case ON_ADD_EDIT_FORM_CHANGE : {
            return {
                ...state,
                formData: action.payload
            }
        }
        //
        // case ON_SAVE_UPDATE : {
        //     return {
        //         ...state,
        //         prescriptionTemplate: action.payload
        //     }
        // }
        case ON_SAVE_UPDATE :
        case GET_PRESCRIPTION_TEMPLATE : {

            let prescriptionTemplateMedicine = cloneDeep(action.payload.addedTemplateMedicine);

            let dataLength = prescriptionTemplateMedicine.length;

            let addedTemplateMedicine = [];

            if (dataLength > 0) {
                addedTemplateMedicine = setMedicineLines(dataLength);
            } else {
                addedTemplateMedicine = cloneDeep(state.addedTemplateMedicine);
            }
            let retrievedItems = [];
            prescriptionTemplateMedicine.forEach((medicine, index) => {
                let item = Object.assign({}, {...addedTemplateMedicine[index]}, {...medicine}, {
                    updated: false,
                    removed: false
                });
                retrievedItems.push(item);
            });

            console.log(retrievedItems);

            if (retrievedItems.length == 0) {
                retrievedItems = initMedicineLines();
            } else {
                retrievedItems.push(addMedicineLine());
            }

            return {
                ...state,
                prescriptionTemplate: action.payload,
                addedTemplateMedicine: retrievedItems
            }
        }

        case ON_FORM_RESET: {
            return {
                ...state,
                formData: {}
            }
        }

        case ON_RESET : {
            return {
                ...state,
                ...initialState
            }
        }

        case ON_SET_SELECTED_IDS : {
            return {
                ...state,
                selectedIDS: [...state.selectedIDS, ...action.payload]

            }
        }


        case GET_DOES_LIST : {
            return {
                ...state,
                dose: Object.assign({}, state.dose, action.payload)
            }
        }

        case GET_MEAL_TIME_LIST : {
            return {
                ...state,
                mealTime: Object.assign({}, state.mealTime, action.payload)
            }
        }

        case GET_FREQUENT_LIST : {
            return {
                ...state,
                frequents: Object.assign({}, state.frequents, action.payload)
            }
        }

        case ADD_TEMPLATE_MEDICINE : {
            let {uuid, ...data} = action.payload;
            let addedItems = cloneDeep(state.addedTemplateMedicine);
            let item = find(addedItems, (lineItem) => lineItem.uuid == uuid);
            if (item) {
                item = Object.assign(item, {...data}, {updated: true, removed: false});
            } else {
                addedItems.push({uuid, ...data});
            }

            let index = _.findIndex(addedItems, item);

            if (index === addedItems.length - 1) {
                addedItems.push(addMedicineLine());
            }

            return {
                ...state,
                addedTemplateMedicine: addedItems
            }
        }


        case TOGGLE_STATE : {
            let {uuid, ...data} = action.payload;
            let addedItems = cloneDeep(state.addedTemplateMedicine);
            let item = find(addedItems, (lineItem) => lineItem.uuid == uuid);
            if (item) {

                item = Object.assign(item, {...data}, {updated: true}, {removed: !data.removed});
            }

            return {
                ...state,
                addedTemplateMedicine: addedItems
            }
        }

        case GET_MEDICINE_VALUE_LIST: {
            return {
                ...state,
                medicineList: action.payload
            }
        }

        default :
            return state;

    }

};

export default prescriptionTemplateAddEditReducer;