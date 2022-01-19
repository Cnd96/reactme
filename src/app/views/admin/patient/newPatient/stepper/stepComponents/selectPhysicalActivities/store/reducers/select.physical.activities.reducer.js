import {
    GET_PHYSICAL_ACTIVITIES_CATEGORIES,
    ON_CHECKUP_SELECT_PHYSICAL_ACTIVITIES,
    ON_RESET_CHECKUP_PHYSICAL_ACTIVITIES,
    ON_SET_CHECKUP_PHYSICAL_ACTIVITY_IDS,
} from "../actions/select.physical.activities.actions";
import * as _ from "lodash";

const initialState = {
    physicalActivityCategories: [],
    physicalActivityIDs: {},
    allPhysicalActivityIds: [],
    currentIDs: [],
    prevPhysicalActivityIds: []
};

const selectPhysicalActivityReducer = function (state = initialState, action) {

    switch (action.type) {
        case GET_PHYSICAL_ACTIVITIES_CATEGORIES : {
            let allPhysicalActivitiesIDs = [];

            action.payload.forEach(element => {
                element.physicalActivities.forEach(
                    x => {
                        allPhysicalActivitiesIDs.push(x.physicalActivityID)
                    }
                )
            });

            return {
                ...state,
                physicalActivityCategories: action.payload,
                allPhysicalActivityIds: allPhysicalActivitiesIDs
            }
        }

        case ON_CHECKUP_SELECT_PHYSICAL_ACTIVITIES : {
            let obj = _.cloneDeep(state.physicalActivityIDs);
            if (action.payload.physicalActivityID) {
                obj = Object.assign(obj, {[action.payload.physicalActivityCategoryID]: action.payload.physicalActivityID});
            }
            return {
                ...state,
                physicalActivityIDs: obj,
                currentIDs: Object.values(obj)
            }
        }

        case ON_SET_CHECKUP_PHYSICAL_ACTIVITY_IDS : {
            let obj = Object.values(action.payload);
            return {
                ...state,
                prevPhysicalActivityIds: obj,
                currentIDs: obj,
                physicalActivityIDs: action.payload,
            }
        }

        case ON_RESET_CHECKUP_PHYSICAL_ACTIVITIES : {
            return {
                ...state,
                currentIDs: [],
                prevPhysicalActivityIds: [],
                physicalActivityIDs: {},
            }
        }

        default :
            return state;
    }
};

export default selectPhysicalActivityReducer;

