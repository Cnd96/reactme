import React from 'react';
import Constants from "../../../../../utils/Constants";

export const FollowUpAppConfig = {
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
            path: Constants.PAGES.followUpsAddEdit,
            component: React.lazy(() => import('./add-edit/FollowUpAddEditApp')),
            // privileges: []
            isRestrictedRoute: true,
            name: 'Follow Ups Add Edit'
        },
        {
            path: Constants.PAGES.followUps,
            component: React.lazy(() => import('./search/FollowUpSearchApp')),
            // privileges: []
            isRestrictedRoute: true,
            name: 'Follow Ups'
        },

    ]
};