import {
    GET_DIETARY_CATEGORIES,
    ON_CHECKUP_SELECT_DIETARY_HABITS,
    ON_RESET_CHECKUP_DIETARY_HABITS,
    ON_SET_CHECKUP_DIETARY_HABITS_IDS
} from "../action/select.dietary.habit.actions";
import * as _ from "lodash";

const initialState = {
    dietaryCategories: [],
    dietaryHabitsIDs: {},
    allDietaryHabitsIds: [],
    currentIDs: [],
    prevDietaryHabitIds: []
};

const selectDietaryHabitReducer = function (state = initialState, action) {

    switch (action.type) {
        case GET_DIETARY_CATEGORIES : {
            let allDietaryHabitsIds = [];
            action.payload.forEach(element => {
                element.dietaryHabits.forEach(
                    x => {
                        allDietaryHabitsIds.push(x.dietaryHabitID)
                    }
                )
            });
            return {
                ...state,
                dietaryCategories: action.payload,
                allDietaryHabitsIds: allDietaryHabitsIds
            }
        }

        case ON_CHECKUP_SELECT_DIETARY_HABITS : {
            let obj = _.cloneDeep(state.dietaryHabitsIDs);
            if (action.payload.dietaryCategoryID) {
                obj = Object.assign(obj, {[action.payload.dietaryCategoryID]: action.payload.dietaryHabitID});
            }
            return {
                ...state,
                dietaryHabitsIDs: obj,
                currentIDs: Object.values(obj)
            }
        }

        case ON_SET_CHECKUP_DIETARY_HABITS_IDS : {
            let obj = Object.values(action.payload);
            return {
                ...state,
                prevDietaryHabitIds: obj,
                currentIDs: obj,
                dietaryHabitsIDs: action.payload,
            }
        }

        case ON_RESET_CHECKUP_DIETARY_HABITS : {
            return {
                ...state,
                currentIDs: [],
                prevDietaryHabitIds: [],
                dietaryHabitsIDs: {},
            }
        }

        default :
            return state;
    }
};

export default selectDietaryHabitReducer;

