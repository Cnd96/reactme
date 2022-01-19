import * as Actions from '../../store/actions/index';
import {
    addMedicineLine,
    initMedicineLines,
    setMedicineLines
} from "../../../../../../../../../../utils/HealthTrackerUtils";
import {cloneDeep, find} from "lodash";


const initialState = {
    prescriptionTemplateList: [],
    prescriptionTemplateID: '',
    prescription: '',
    medicineList: [],
    dose: {},
    mealTime: {},
    frequents: {},
    addedTemplateMedicine: []
};

const selectPrescriptionTemplateReducer = function (state = initialState, action) {

    switch (action.type) {
        case Actions.GET_PRESCRIPTION_TEMPLATE_LIST:
            return {
                ...state,
                prescriptionTemplateList: action.payload
            };

        case Actions.ON_SELECT_PRESCRIPTION:
            return {
                ...state,
                prescriptionTemplateID: action.payload
            };
        // case Actions.ON_CHECKUP_SAVE_PRESCRIPTION:
        case Actions.GET_PRESCRIPTION :
        case Actions.GET_PRESCRIPTION_TEMPLATE : {

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
                    updated: true,
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

            let prescription = cloneDeep(state.prescription);
            return {
                ...state,
                prescription: {...prescription, ...action.payload},
                addedTemplateMedicine: retrievedItems
            }
        }

        case Actions.GET_DOES_LIST : {
            return {
                ...state,
                dose: Object.assign({}, state.dose, action.payload)
            }
        }

        case Actions.GET_MEAL_TIME_LIST : {
            return {
                ...state,
                mealTime: Object.assign({}, state.mealTime, action.payload)
            }
        }

        case Actions.GET_FREQUENT_LIST : {
            return {
                ...state,
                frequents: Object.assign({}, state.frequents, action.payload)
            }
        }

        case Actions.ADD_TEMPLATE_MEDICINE : {
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


        case Actions.TOGGLE_STATE : {
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

        case Actions.ON_RESET_PRESCRIPTION : {

            return {
                ...state,
                addedTemplateMedicine: [],
                prescriptionTemplateID: '',
                prescription: '',
            }

        }

        case Actions.GET_MEDICINE_VALUE_LIST: {
            return {
                ...state,
                medicineList: action.payload
            }
        }

        default:
            return state;
    }

};

export default selectPrescriptionTemplateReducer;
