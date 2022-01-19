import React from 'react';
import Constants from "../../../../../utils/Constants";

export const MedicalDiseasesAppConfig = {
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
            path: Constants.PAGES.medicalDiseasesAddEdit,
            component: React.lazy(() => import('./add-edit/MedicalDiseasesAddEditApp')),
            privileges: [Constants.PRIVILEGE_CODES.HEALTH_TRACKER_SETTINGS_CONFIG_EDIT],
            isRestrictedRoute: true,
            name: 'Medical Diseases Add Edit'
        },
        {
            path: Constants.PAGES.medicalDiseases,
            component: React.lazy(() => import('./search/MedicalDiseaseSearchApp')),
            privileges: [Constants.PRIVILEGE_CODES.HEALTH_TRACKER_SETTINGS_CONFIG_VIEW],
            isRestrictedRoute: true,
            name: 'Medical Diseases'
        },

    ]
};
