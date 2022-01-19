import React, {useContext, useEffect} from 'react';
import {withRouter} from 'react-router-dom';
import {matchRoutes} from 'react-router-config';
import {useDispatch, useSelector} from 'react-redux';
import AppContext from '../AppContext';
import * as _ from 'lodash';
import * as Actions from '../store/actions/notebook';
import TheLayout from "./TheLayout";

function LayoutManager(props) {

    const dispatch = useDispatch();
    const defaultSettings = useSelector(({notebook}) => notebook.settings.initial);
    const settings = useSelector(({notebook}) => notebook.settings.current);

    const appContext = useContext(AppContext);
    const {routes} = appContext;

    useEffect(() => {
        function routeSettingsCheck() {
            const matched = matchRoutes(routes, props.location.pathname)[0];

            if (matched && matched.route.settings) {
                const routeSettings = _.merge({}, defaultSettings, {settings: matched.route.settings});
                if (!_.isEqual(settings, routeSettings)) {
                    dispatch(Actions.setSettings(_.merge({}, routeSettings)));
                }
            } else {
                if (!_.isEqual(settings, defaultSettings)) {
                    dispatch(Actions.resetSettings());
                }
            }
        }

        routeSettingsCheck();
    }, [defaultSettings, dispatch, props.location.pathname, routes, settings]);


    return (
        <TheLayout {...props}/>
    );
}

export default withRouter(React.memo(LayoutManager));
