import React from 'react';
import Constants from "../../../../../utils/Constants";

export const UserAppConfig = {
    settings: {
        layout: {
            adminSideMenu: {
                display: true
            },
            adminTopMenu: {
                display: true
            },
            publicSideMenu1: {
                display: false
            }
        }
    },
    routes: [
        {
            path: Constants.PAGES.userAddEdit,
            component: React.lazy(() => import('./add-edit/UserAddEditApp')),
            privileges: [Constants.PRIVILEGE_CODES.HEALTH_TRACKER_SETTINGS_USER_ADD_EDIT],
            isRestrictedRoute: true,
            name: 'Users Add Edit'
        },
        {
            path: Constants.PAGES.users,
            component: React.lazy(() => import('./search/UserSearchApp')),
            privileges: [Constants.PRIVILEGE_CODES.HEALTH_TRACKER_SETTINGS_ROLE_VIEW],
            isRestrictedRoute: true,
            name: 'Users'
        },
    ]
};
