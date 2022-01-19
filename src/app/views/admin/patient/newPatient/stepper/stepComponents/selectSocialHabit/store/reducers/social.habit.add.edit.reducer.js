import {
    GET_SOCIAL_HABIT_CATEGORIES,
    ON_PATIENT_SELECT_SOCIAL_HABITS,
    ON_RESET_PATIENT_SOCIAL_HABITS,
    ON_SET_PATIENT_SOCIAL_HABITS_IDS
} from "../actions";
import * as _ from "lodash";

const initialState = {
    socialHabitCategories: [],
    socialHabitsIDs: {},
    allSocialHabitsIds: [],
    currentIDs: [],
    prevSocialHabitIds: []
};

const socialHabitSelectReducer = function (state = initialState, action) {

    switch (action.type) {
        case GET_SOCIAL_HABIT_CATEGORIES : {

            let allSocialHabitsIds = [];
            action.payload.forEach(element => {
                element.socialHabits.forEach(
                    x => {
                        allSocialHabitsIds.push(x.socialHabitID)
                    }
                )
            });
            return {
                ...state,
                socialHabitCategories: action.payload,
                allSocialHabitsIds: allSocialHabitsIds
            }
        }

        case ON_PATIENT_SELECT_SOCIAL_HABITS : {
            let obj = _.cloneDeep(state.socialHabitsIDs);
            if (action.payload.socialHabitCategoryID) {
                obj = Object.assign(obj, {[action.payload.socialHabitCategoryID]: action.payload.socialHabitID});
            }
            return {
                ...state,
                socialHabitsIDs: obj,
                currentIDs: Object.values(obj)
            }
        }

        case ON_SET_PATIENT_SOCIAL_HABITS_IDS : {
            let obj = Object.values(action.payload);
            return {
                ...state,
                prevSocialHabitIds: obj,
                currentIDs: obj,
                socialHabitsIDs: action.payload,
            }
        }

        case ON_RESET_PATIENT_SOCIAL_HABITS : {
            return {
                ...state,
                currentIDs: [],
                prevSocialHabitIds: [],
                socialHabitsIDs: {},
            }
        }

        default :
            return state;
    }
};

export default socialHabitSelectReducer;

