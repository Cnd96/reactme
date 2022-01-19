import React from 'react';
import Constants from "../../../utils/Constants";

export const PublicAppConfig = {
    settings: {
        layout: {
            adminSideMenu: {
                display: false
            },
            adminTopMenu: {
                display: false
            },
            publicSideMenu1: {
                display: true
            }
        }
    },
    routes: [
        {
            path: Constants.PAGES.public,
            component: React.lazy(() => import('./home/HomeApp')),
            // privileges: []
            isRestrictedRoute: false,
            exact: true
        },

    ]
};
