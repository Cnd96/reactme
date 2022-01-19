import React from 'react';
import Constants from "../../../../../utils/Constants";

export const DietaryHabitAppConfig = {
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
            path: Constants.PAGES.dietaryHabitsAddEdit,
            component: React.lazy(() => import('./add-edit/DietaryHabitAddEditApp')),
            // privileges: []
            isRestrictedRoute: true,
            name: 'Dietary Quiz Add Edit'
        },
        {
            path: Constants.PAGES.dietaryHabits,
            component: React.lazy(() => import('./search/DietaryHabitSearchApp')),
            // privileges: []
            isRestrictedRoute: true,
            name: 'Dietary Quizzes'
        },
    ]
};