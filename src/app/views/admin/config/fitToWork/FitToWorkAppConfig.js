import React from 'react';
import Constants from "../../../../../utils/Constants";


export const FitToWorkAppConfig = {
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
            path: Constants.PAGES.fitToWorkAddEdit,
            component: React.lazy(() => import('./add-edit/FitToWorkAddEditApp')),
            // privileges: []
            isRestrictedRoute: true,
            name: 'Fit To Works Add Edit'
        },
        {
            path: Constants.PAGES.fitToWork,
            component: React.lazy(() => import('./search/FitToWorkSearchApp')),
            // privileges: []
            isRestrictedRoute: true,
            name: 'Fit To Works'
        },
    ]
};