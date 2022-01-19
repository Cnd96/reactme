import React, {useEffect} from 'react';
import withReducer from "../../../../../store/withReducer";
import reducer from "../store/reducers/index";
import history from '../../../../../../@history';
import Constants from "../../../../../../utils/Constants";
import {useDispatch, useSelector} from "react-redux";
import * as Actions from '../store/actions/index';
import {getPagedDataFromState} from "../../../../../../utils/DataExtractHelper";
import {getConstantValueForSearch} from "../../../../../../utils/FormUtils";
import RolesSearch from "./components/RolesSearch";
import RolesResult from "./components/RolesResult";

function RolesSearchApp() {

    const dispatch = useDispatch();
    const data = useSelector(({roles}) => roles.rolesSearch);

    useEffect(() => {
        onSearch();
    }, [dispatch, data.pageInfo, data.searchData]);

    let onAddBtnClick = () => {
        history.push({
            pathname: Constants.PAGES.roleAddEdit
        });
    };

    let onSearch = () => {
        let pageInfo = data.pageInfo;
        let formData = data.searchData;
        let pageData = getPagedDataFromState(pageInfo);
        let searchData = {
            ...pageData,
            ...formData,
            status: getConstantValueForSearch(formData.status, Constants.STATUS_CONST.ACT)
        };

        dispatch(Actions.getPagedRoles(searchData));
    };

    return (
        <>
            <RolesSearch/>
            <RolesResult/>
        </>
    );
}

export default withReducer('roles', reducer)(RolesSearchApp);
