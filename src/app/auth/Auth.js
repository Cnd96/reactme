import React, {Component} from 'react';
import jwtService from '../services/auth/jwtService';
import * as userActions from "./store/actions";
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import history from '../../@history';
import Constants from "../../utils/Constants";

class Auth extends Component {

    constructor(props) {
        super(props);

        this.initServices();
        this.jwtCheck();
    }

    initServices = () => {
        // dataService.init();
    };

    jwtCheck = () => {
        jwtService.on('onAutoLogin', () => {

            let loginUser = jwtService.getLoginUser();

            if (loginUser) {
                this.props.setLoginUser(loginUser);
                Constants.LOGGED_IN_USER = loginUser;
            }
        });

        jwtService.on('onAutoLogout', (message) => {

            //TODO
            console.log('onAutoLogout ==========>');
            Constants.LOGGED_IN_USER = null;
            // this.props.logout();
        });

        jwtService.on('onLoginSuccess', (message) => {
            history.push({
                pathname: Constants.PAGES.adminDashboard
            });
        });

        jwtService.init();
    };

    render() {
        const {children} = this.props;

        return (
            <React.Fragment>
                {children}
            </React.Fragment>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
            setLoginUser: userActions.setLoginUser,
        },
        dispatch);
}

export default connect(null, mapDispatchToProps)(Auth);
