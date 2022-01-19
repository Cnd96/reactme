import React, {useEffect} from 'react';
import {CCard, CCardBody, CCol, CRow} from "@coreui/react";
import SocialHabitSearch from "./components/SocialHabitSearch";
import SocialHabitResults from "./components/SocialHabitResults";
import {useDispatch, useSelector} from "react-redux";
import Constants from "../../../../../../utils/Constants";
import {getPagedDataFromState} from "../../../../../../utils/DataExtractHelper";
import {getConstantValueForSearch} from "../../../../../../utils/FormUtils";
import * as Actions from "../store/actions/social.habit.app.search.action";
import withReducer from "../../../../../store/withReducer";
import reducer from "../store/reducer/index";

const SocialHabitSearchApp = () => {

    const dispatch = useDispatch();
    const data = useSelector(({socialHabit}) => socialHabit.socialHabitSearch);

    useEffect(() => {
        onSearch();
    }, [dispatch, data.pageInfo, data.searchData]);

    useEffect(() => {
        dispatch(Actions.getSocialHabitCategories())
    }, [dispatch]);


    let onSearch = () => {
        let pageInfo = data.pageInfo;
        let formData = data.searchData;
        let pageData = getPagedDataFromState(pageInfo);
        let searchData = {
            ...pageData,
            ...formData,
            status: getConstantValueForSearch(formData.status, Constants.STATUS_CONST.ACT)
        };

        dispatch(Actions.getPagedSocialHabits(searchData));
    };

    return (
        <div>
            <CRow>
                <CCol xs="12">
                    <CCard>
                        <CCardBody>
                            <SocialHabitSearch/>
                            <SocialHabitResults/>
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>
        </div>
    );
};


export default withReducer('socialHabit', reducer)(SocialHabitSearchApp);
