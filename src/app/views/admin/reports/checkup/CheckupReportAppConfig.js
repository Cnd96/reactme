import React from 'react';
import Constants from "../../../../../utils/Constants";

export const CheckupReportAppConfig = {
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
            path: Constants.PAGES.checkupReport,
            component: React.lazy(() => import('./components/CheckupsReportBase')),
            // privileges: []
            isRestrictedRoute: true,
            name: 'Checkup Reports'
        },

    ]
};