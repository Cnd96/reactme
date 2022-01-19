import React from 'react';
import Constants from "../../../../utils/Constants";

export const DashboardAppConfig = {
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
            path: Constants.PAGES.adminDashboard,
            component: React.lazy(() => import('./DashboardApp')),
            // privileges: []
            isRestrictedRoute: true,
            exact: true
        },

    ]
};
