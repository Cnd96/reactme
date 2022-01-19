import React, {useEffect} from 'react';
import withReducer from "../../../../../store/withReducer";
import reducer from "../store/reducers/index";
import history from '../../../../../../@history';
import Constants from "../../../../../../utils/Constants";
import UserSearch from "./components/UserSearch";
import {useDispatch, useSelector} from "react-redux";
import * as Actions from '../store/actions/index';
import UserResult from "./components/UserResult";
import {getPagedDataFromState} from "../../../../../../utils/DataExtractHelper";
import {getConstantValueForSearch} from "../../../../../../utils/FormUtils";

function UserSearchApp() {

    const dispatch = useDispatch();
    const data = useSelector(({users}) => users.userSearch);
    const addEditData = useSelector(({users}) => users.userAddEdit);

    useEffect(() => {
        onSearch();
    }, [dispatch, data.pageInfo, data.searchData]);

    useEffect(() => {
        onSearch();
    }, [dispatch]);


    let onAddBtnClick = () => {
        history.push({
            pathname: Constants.PAGES.userAddEdit
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

        dispatch(Actions.getPagedUsers(searchData));
    };

    return (
        <>
            <UserSearch/>
            <UserResult/>
        </>
    );
}

export default withReducer('users', reducer)(UserSearchApp);
