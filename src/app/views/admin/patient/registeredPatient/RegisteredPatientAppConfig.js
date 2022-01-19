import React from 'react';
import Constants from "../../../../../utils/Constants";

export const RegisteredPatientAppConfig = {
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
            path: Constants.PAGES.registeredPatient,
            component: React.lazy(() => import('./search/PatientSearchApp')),
            // privileges: []
            isRestrictedRoute: true,
            exact: true,
            name: 'Patients'
        },

        {
            path: Constants.PAGES.registeredPatientDetails,
            component: React.lazy(() => import('./patientDetails/PatientDetailsApp')),
            // privileges: []
            isRestrictedRoute: true,
            exact: true,
            name: 'Patient Details'
        },

        {
            path: Constants.PAGES.patientCheckupSummeryDetails,
            component: React.lazy(() => import('./PatientCheckupSummery/PatientCheckupSummery')),
            // privileges: []
            isRestrictedRoute: true,
            exact: true,
            name: 'Checkup Summary'
        },

        {
            path: Constants.PAGES.newPatient,
            component: React.lazy(() => import('../newPatient/NewPatientApp')),
            // privileges: []
            isRestrictedRoute: true,
            exact: true,
            name: 'Patient Checkup'
        },
    ]
};
