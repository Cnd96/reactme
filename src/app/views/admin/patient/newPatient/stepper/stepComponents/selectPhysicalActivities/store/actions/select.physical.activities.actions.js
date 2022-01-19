import dataService from "../../../../../../../../../services/dataService";
import selectPhysicalActivitiesAppEndpoints from "./select.physical.activities.endpoints";

export const GET_PHYSICAL_ACTIVITIES_CATEGORIES = '[PHYSICAL ACTIVITIES SELECT] GET_PHYSICAL_ACTIVITIES_CATEGORIES';
export const ON_CHECKUP_SELECT_PHYSICAL_ACTIVITIES = '[PHYSICAL ACTIVITIES SELECT] ON_CHECKUP_SELECT_PHYSICAL_ACTIVITIES';
export const ON_CHECKUP_SAVE_PHYSICAL_ACTIVITIES = '[PHYSICAL ACTIVITIES SELECT] ON_CHECKUP_SAVE_PHYSICAL_ACTIVITIES';
export const ON_SET_CHECKUP_PHYSICAL_ACTIVITY_IDS = '[PHYSICAL ACTIVITIES SELECT] ON_SET_CHECKUP_PHYSICAL_ACTIVITY_IDS';
export const ON_RESET_CHECKUP_PHYSICAL_ACTIVITIES = '[PHYSICAL ACTIVITIES SELECT] ON_RESET_CHECKUP_PHYSICAL_ACTIVITIES   ';

export function getPhysicalActivityCategories() {
    const request = dataService.get(selectPhysicalActivitiesAppEndpoints.getPhysicalActivityCategories);

    return (dispatch, getState) => {
        request.then((response) => {
                dispatch({
                    type: GET_PHYSICAL_ACTIVITIES_CATEGORIES,
                    payload: response.data.result
                });
            }
        );
    };
}

export function onSelectOption(data) {
    return (dispatch, getState) => {
        dispatch({
            type: ON_CHECKUP_SELECT_PHYSICAL_ACTIVITIES,
            payload: data
        })
    };
}

export function setCheckupPhysicalActivityIds(data) {
    return (dispatch, getState) => {
        dispatch({
            type: ON_SET_CHECKUP_PHYSICAL_ACTIVITY_IDS,
            payload: data
        })
    };
}

export function saveOrUpdateCheckupWithPhysicalActivities(data) {
    const request = dataService.post(selectPhysicalActivitiesAppEndpoints.saveOrUpdateCheckupWithPhysicalActivities, data);

    return (dispatch, getState) => {
        return request.then((response) => {
                return dispatch({
                    type: ON_CHECKUP_SAVE_PHYSICAL_ACTIVITIES,
                    payload: response.data.result
                });
            }
        );
    };
}

export function onResetPhysicalActivity() {
    return (dispatch, getState) => {
        dispatch({
            type: ON_RESET_CHECKUP_PHYSICAL_ACTIVITIES,
            payload: {}
        })
    };
}

