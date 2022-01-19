import React, {useEffect} from 'react';
import withReducer from "../../../../../store/withReducer";
import reducer from "../store/reducer/index";
import {useDispatch, useSelector} from "react-redux";
import {getPagedDataFromState} from "../../../../../../utils/DataExtractHelper";
import {getConstantValueForSearch} from "../../../../../../utils/FormUtils";
import Constants from "../../../../../../utils/Constants";
import * as Actions from "../store/actions";
import SocialHabitCategoryResult from "./components/SocialHabitCategoryResult";
import SocialHabitCategorySearch from "./components/SocialHabitCategorySearch";
import {CCard, CCardBody, CCol, CRow} from "@coreui/react";

const SocialHabitCategorySearchApp = () => {

    const dispatch = useDispatch();
    const data = useSelector(({socialHabitCategory}) => socialHabitCategory.socialHabitCategorySearch);

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

        dispatch(Actions.getPagedSocialHabitCategory(searchData));
    };

    return (
        <div>
            <CRow>
                <CCol xs="12">
                    <CCard>
                        <CCardBody>
                            <SocialHabitCategorySearch/>
                            <SocialHabitCategoryResult/>
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>
        </div>
    );
};

export default withReducer('socialHabitCategory', reducer)(SocialHabitCategorySearchApp);
