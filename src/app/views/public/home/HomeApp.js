import React from 'react';
import withReducer from "../../../store/withReducer";
import reducer from "./../store/reducers";
import {CButton} from '@coreui/react';
import history from '../../../../@history';
import Constants from "../../../../utils/Constants";
import jwtService from '../../../services/auth/jwtService';

function DashboardApp() {

    let onLogin = () => {
        history.push(
            {
                pathname: Constants.PAGES.login
            }
        );
    };

    let goToAdminArea = () => {
        history.push(
            {
                pathname: Constants.PAGES.adminDashboard
            }
        );
    };

    let isLoggedIn = jwtService.isUserLoggedIn();

    return (
        <div>
            <h1>Hi, This is the public home page of Health Tracker</h1>

            {
                isLoggedIn &&
                <CButton variant="outline" color="primary" onClick={goToAdminArea}>Go to admin</CButton>
            }

            {
                !isLoggedIn &&
                <CButton variant="outline" color="primary" onClick={onLogin}>Login to your account</CButton>
            }

        </div>
    );
}

export default withReducer('home', reducer)(DashboardApp);
