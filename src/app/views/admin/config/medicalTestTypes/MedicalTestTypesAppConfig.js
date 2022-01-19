import React from 'react';
import Constants from "../../../../../utils/Constants";

export const MedicalTestTypesAppConfig = {
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
            path: Constants.PAGES.medicalTestTypesAddEdit,
            component: React.lazy(() => import('./add-edit/MedicalTestTypesAddEditApp')),
            // privileges: []
            isRestrictedRoute: true,
            name: 'Medical Test Types Add Edit'
        },
        {
            path: Constants.PAGES.medicalTestTypes,
            component: React.lazy(() => import('./search/MedicalTestTypesSearchApp')),
            // privileges: []
            isRestrictedRoute: true,
            name: 'Medical Test Types'
        },

    ]
};