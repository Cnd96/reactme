import React from 'react';
import {Redirect} from 'react-router-dom';
import {appsConfig} from "../views/appsConfigs";
import HealthTrackerUtils from "../../utils/HealthTrackerUtils";
import Constants from "../../utils/Constants";

const routeConfigs = [
    ...appsConfig
];

const routes = [

    ...HealthTrackerUtils.generateRoutesFromConfigs(routeConfigs),

    {
        path: '/admin',
        exact: true,
        name: 'Admin',
        component: () => <Redirect to={Constants.PAGES.adminDashboard}/>
    },

    {
        path: '/',
        exact: true,
        component: () => <Redirect to={Constants.PAGES.adminDashboard}/>
    },

    {
        component: () => <Redirect to="/404"/>
    }
];

export default routes;
