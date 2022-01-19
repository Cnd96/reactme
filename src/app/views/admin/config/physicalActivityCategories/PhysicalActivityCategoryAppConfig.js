import React from 'react';
import Constants from "../../../../../utils/Constants";

export const PhysicalActivityCategoryAppConfig = {
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
            path: Constants.PAGES.physicalActivityCategoryAddEdit,
            component: React.lazy(() => import('./add-edit/PhysicalActivityCategoryAddEditApp')),
            // privileges: []
            isRestrictedRoute: true,
            name: 'Physical Activity Category Add Edit'
        },
        {
            path: Constants.PAGES.physicalActivityCategory,
            component: React.lazy(() => import('./search/PhysicalActivityCategorySearchApp')),
            // privileges: []
            isRestrictedRoute: true,
            name: 'Physical Activity Categories'
        },

    ]
};