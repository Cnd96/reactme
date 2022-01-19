import React from 'react';
import Constants from "../../../../../utils/Constants";

export const PrescriptionTemplateAppConfig = {
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
            path: Constants.PAGES.prescriptionTemplateAddEdit,
            component: React.lazy(() => import('./add-edit/PrescriptionTemplateAddEditApp')),
            // privileges: []
            isRestrictedRoute: true,
            name: 'Prescription Template Add Edit'
        },
        {
            path: Constants.PAGES.prescriptionTemplate,
            component: React.lazy(() => import('./search/PrescriptionTemplateSearchApp')),
            // privileges: []
            isRestrictedRoute: true,
            name: 'Prescription Template'
        },

    ]
};