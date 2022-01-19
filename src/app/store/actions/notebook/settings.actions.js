export const SET_SETTINGS = '[SETTINGS] SET SETTINGS';
export const SET_SHOW_SIDE_BAR = '[SETTINGS] TOGGLE SIDE BAR';
export const SET_DEFAULT_SETTINGS = '[SETTINGS] SET DEFAULT SETTINGS';
export const SET_INITIAL_SETTINGS = '[SETTINGS] SET INITIAL SETTINGS';
export const RESET_DEFAULT_SETTINGS = '[SETTINGS] RESET DEFAULT SETTINGS';
export const SHOW_MAIN_LOADING = '[SETTINGS] SHOW MAIN LOADING';
export const HIDE_MAIN_LOADING = '[SETTINGS] HIDE MAIN LOADING';

export function setSettings(value) {
    return {
        type: SET_SETTINGS,
        payload: value
    }
}

export function resetSettings(value) {
    return {
        type: RESET_DEFAULT_SETTINGS,
        value
    }
}

export function setShowSidebar(value) {
    return {
        type: SET_SHOW_SIDE_BAR,
        payload: value
    }
}
