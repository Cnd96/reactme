import * as Actions from '../../actions/notebook';
import * as _ from 'lodash';

const initialSettings = getInitialSettings();

const initialState = {
    initial: initialSettings,
    current: _.merge({}, initialSettings),
    sidebarShow: 'responsive',
    minimize: false,
};

const settings = function (state = initialState, action) {
    switch (action.type) {

        case Actions.SET_SETTINGS: {
            let value = action.payload;
            const newSettings = _.merge(
                {},
                state.current,
                value);

            return {
                ...state,
                current: newSettings,
            };
        }

        case Actions.RESET_DEFAULT_SETTINGS : {
            return {
                ...state,
                current: _.merge({}, state.defaults),
            };
        }

        case Actions.SET_SHOW_SIDE_BAR : {
            return {
                ...state,
                sidebarShow: action.payload
            }
        }

        default: {
            return state;
        }
    }
};

function getInitialSettings() {
    return {
        settings: {
            layout: {
                adminSideMenu: {
                    display: false
                },
                adminTopMenu: {
                    display: false
                },
                publicSideMenu1: {
                    display: false
                }
            }
        }
    };
}

export default settings;
