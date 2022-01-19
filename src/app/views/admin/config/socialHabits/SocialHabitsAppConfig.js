import React from 'react';
import Constants from "../../../../../utils/Constants";


export const SocialHabitsAppConfig = {
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
            path: Constants.PAGES.socialHabitsAddEdit,
            component: React.lazy(() => import('./habit-add-edit/SocialHabitAddEditApp')),
            // privileges: []
            isRestrictedRoute: true,
            name: 'Social Habits Add Edit'
        },
        {
            path: Constants.PAGES.socialHabits,
            component: React.lazy(() => import('./search/SocialHabitSearchApp')),
            // privileges: []
            isRestrictedRoute: true,
            name: 'Social Habits'
        },

    ]
};