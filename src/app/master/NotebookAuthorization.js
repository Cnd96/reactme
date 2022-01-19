import React, {Component} from 'react';
import {matchRoutes} from 'react-router-config';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import AppContext from '../../app/AppContext';
import HealthTrackerUtils from "../../utils/HealthTrackerUtils";
import jwtService from "../../app/services/auth/jwtService";

class NotebookAuthorization extends Component {

    constructor(props, context) {
        super(props);
        const {routes} = context;
        this.state = {
            accessGranted: true,
            routes
        };
    }

    componentDidMount() {
        if (!this.state.accessGranted) {
            this.redirectRoute();
        }
    }

    componentDidUpdate() {
        if (!this.state.accessGranted) {
            this.redirectRoute();
        }
    }

    static getDerivedStateFromProps(props, state) {
        const {location, user} = props;
        const {pathname} = location;
        const privileges = user ? user.user.privileges : [];

        const matched = matchRoutes(state.routes, pathname)[0];
        let accessGranted = matched ? (matched.route.privileges ? HealthTrackerUtils.hasAnyPrivilege(matched.route.privileges, privileges) : true) : true;

        let isAuthenticated = true;
        if (matched) {
            if (matched.route.isRestrictedRoute) {
                isAuthenticated = jwtService.isUserLoggedIn();
            }
        }

        return {
            accessGranted: accessGranted && isAuthenticated
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextState.accessGranted !== this.state.accessGranted;
    }

    redirectRoute() {
        const {location, user, history} = this.props;
        const {pathname, state} = location;
        const redirectUrl = state && state.redirectUrl ? state.redirectUrl : '/';

        history.push({
            pathname: '/login',
            state: {redirectUrl: pathname}
        });
    }

    render() {
        return this.state.accessGranted ? <React.Fragment>{this.props.children}</React.Fragment> : null;
    }
}

function mapStateToProps({notebook}) {
    return {
        user: notebook.login.user
    }
}

NotebookAuthorization.contextType = AppContext;

export default withRouter(connect(mapStateToProps)(NotebookAuthorization));
