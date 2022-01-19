import React from 'react';
import Constants from "../../../../../utils/Constants";

export const DietaryHabitCategoryAppConfig = {
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
            path: Constants.PAGES.dietaryHabitCategoriesAddEdit,
            component: React.lazy(() => import('./add-edit/DietaryHabitCategoryAddEditApp')),
            // privileges: []
            isRestrictedRoute: true,
            name: 'Dietary Categories Add Edit'
        },
        {
            path: Constants.PAGES.dietaryHabitCategories,
            component: React.lazy(() => import('./search/DietaryHabitCategorySearchApp')),
            // privileges: []
            isRestrictedRoute: true,
            name: 'Dietary Categories'
        },

    ]
};