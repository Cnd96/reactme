import React from 'react';
import Constants from "../../../../../utils/Constants";

export const DiagnosisAppConfig = {
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
            path: Constants.PAGES.diagnosisAddEdit,
            component: React.lazy(() => import('./add-edit/DiagnosisAddEditApp')),
            // privileges: []
            isRestrictedRoute: true,
            name: 'Diagnosis Add Edit'
        },
        {
            path: Constants.PAGES.diagnosis,
            component: React.lazy(() => import('./search/DiagnosisSearchApp')),
            // privileges: []
            isRestrictedRoute: true,
            name: 'Diagnosis'
        },

    ]
};
