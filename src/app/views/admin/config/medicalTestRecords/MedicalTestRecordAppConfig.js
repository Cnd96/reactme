import React from 'react';
import Constants from "../../../../../utils/Constants";

export const MedicalTestRecordAppConfig = {
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
            path: Constants.PAGES.medicalTestRecordsAddEdit,
            component: React.lazy(() => import('./add-edit/MedicalTestRecordAddEditApp')),
            // privileges: []
            isRestrictedRoute: true,
            name: 'Medical Report Records Add Edit'
        },
        {
            path: Constants.PAGES.medicalTestRecords,
            component: React.lazy(() => import('./search/MedicalTestRecordSearchApp')),
            // privileges: []
            isRestrictedRoute: true,
            name: 'Medical Report Records'
        },

    ]
};