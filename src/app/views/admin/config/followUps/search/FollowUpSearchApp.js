import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getPagedDataFromState} from "../../../../../../utils/DataExtractHelper";
import {getConstantValueForSearch} from "../../../../../../utils/FormUtils";
import Constants from "../../../../../../utils/Constants";
import withReducer from "../../../../../store/withReducer";
import reducer from "../store/reducer/index";
import FollowUpSearch from "./components/FollowUpSearch";
import FollowUpResult from "./components/FollowUpResult";
import * as Action from '../store/action/index'
import {CCard, CCardBody, CCol, CRow} from "@coreui/react";

const FollowUpSearchApp = () => {

    const dispatch = useDispatch();
    const data = useSelector(({followUp}) => followUp.followUpSearch);

    useEffect(() => {
        onSearch();
    }, [dispatch, data.pageInfo, data.searchData]);


    let onSearch = () => {
        let pageInfo = data.pageInfo;
        let formData = data.searchData;
        let pageData = getPagedDataFromState(pageInfo);
        let searchData = {
            ...pageData,
            ...formData,
            status: getConstantValueForSearch(formData.status, Constants.STATUS_CONST.ACT)
        };
        dispatch(Action.getFollowUpList(searchData));
    };

    return (
        <div>
            <CRow>
                <CCol xs="12">
                    <CCard>
                        <CCardBody>
                            <FollowUpSearch/>
                            <FollowUpResult/>
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>
        </div>
    );
};

export default withReducer('followUp', reducer)(FollowUpSearchApp);
