import React from 'react';
import Constants from "../../../../../utils/Constants";

export const SocialHabitCategoryAppConfig = {
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
            path: Constants.PAGES.socialHabitCategoryAddEdit,
            component: React.lazy(() => import('./add-edit/SocialHabitCategoryAddEditApp')),
            // privileges: []
            isRestrictedRoute: true,
            name: 'Social Habit Category Add Edit'
        },
        {
            path: Constants.PAGES.socialHabitCategory,
            component: React.lazy(() => import('./search/SocialHabitCategorySearchApp')),
            // privileges: []
            isRestrictedRoute: true,
            name: 'Social Habit Categories'
        },

    ]
};
