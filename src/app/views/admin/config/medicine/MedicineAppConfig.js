import React from 'react';
import Constants from "../../../../../utils/Constants";

export const MedicineAppConfig = {
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
            path: Constants.PAGES.medicineAddEdit,
            component: React.lazy(() => import('./add-edit/MedicineAddEditApp')),
            // privileges: []
            isRestrictedRoute: true,
            name: 'Drugs Add Edit'
        },
        {
            path: Constants.PAGES.medicine,
            component: React.lazy(() => import('./search/MedicineSearchApp')),
            // privileges: []
            isRestrictedRoute: true,
            name: 'Drugs'
        },

    ]
};

export default MedicineAppConfig;