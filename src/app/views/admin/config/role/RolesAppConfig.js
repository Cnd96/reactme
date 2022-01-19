import React from 'react';
import Constants from "../../../../../utils/Constants";

export const RolesAppConfig = {
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
            path: Constants.PAGES.roleAddEdit,
            component: React.lazy(() => import('./add-edit/RoleAddEditApp')),
            privileges: [Constants.PRIVILEGE_CODES.HEALTH_TRACKER_SETTINGS_ROLE_ADD_EDIT],
            isRestrictedRoute: true,
            name: 'Role Add Edit',
        },
        {
            path: Constants.PAGES.roles,
            component: React.lazy(() => import('./search/RolesSearchApp')),
            privileges: [Constants.PRIVILEGE_CODES.HEALTH_TRACKER_SETTINGS_ROLE_VIEW],
            isRestrictedRoute: true,
            name: 'Roles',
        },

    ]
};
