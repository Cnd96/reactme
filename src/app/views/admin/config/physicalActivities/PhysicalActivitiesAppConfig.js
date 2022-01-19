import React from 'react';
import Constants from "../../../../../utils/Constants";

export const PhysicalActivitiesAppConfig = {
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
            path: Constants.PAGES.physicalActivityAddEdit,
            component: React.lazy(() => import('./add-edit/PhysicalActivitiesAddEditApp')),
            // privileges: []
            isRestrictedRoute: true,
            name: 'Activity Levels Add Edit'
        },
        {
            path: Constants.PAGES.physicalActivity,
            component: React.lazy(() => import('./search/PhysicalActivitiesSearchApp')),
            // privileges: []
            isRestrictedRoute: true,
            name: 'Activity Levels'
        },
    ]
};