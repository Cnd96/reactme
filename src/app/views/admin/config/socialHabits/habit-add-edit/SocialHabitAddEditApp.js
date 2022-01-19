import React, {useEffect} from 'react';
import withReducer from "../../../../../store/withReducer";
import reducer from "../../diagnosis/store/reducers";
import SocialHabitAddEditBase from "./components/SocialHabitAddEditBase";
import {useDispatch, useSelector} from "react-redux";
import * as Actions from '../store/actions/index'
import {CButton, CCard, CCardBody, CCol, CRow} from "@coreui/react";
import {trimData} from "../../../../../../utils/DataExtractHelper";
import {getStorageItem} from "../../../../../../utils/StorageUtils";
import Constants from "../../../../../../utils/Constants";

const SocialHabitAddEditApp = () => {

    const dispatch = useDispatch();
    const data = useSelector(({socialHabit}) => socialHabit.socialHabitAddEdit);

    useEffect(() => {
        dispatch(Actions.getSocialHabitCategories());

        let socialHabitID = getStorageItem(Constants.STORAGE.SELECTED_SOCIAL_HABIT_ID);
        if (socialHabitID) {
            dispatch(Actions.getSocialHabitDTOByID(socialHabitID));
        }

        return (() => {
            dispatch(Actions.onResetSocailHabit());
        })

    }, [dispatch]);

    const saveOrUpdateSocialHabit = () => {
        let saveObj = trimData(data.socialHabitFormData.values);
        dispatch(Actions.saveOrUpdateSocialHabit(saveObj));
    };

    return (
        <div>
            <CRow>
                <CCol xs="12">
                    <CCard>
                        <CCardBody>
                            <SocialHabitAddEditBase/>
                            <CRow>
                                <CCol xs="12">
                                    <CButton
                                        disabled={!data.socialHabitFormData.isValid}
                                        onClick={() => {
                                            saveOrUpdateSocialHabit();
                                        }}
                                        color="primary" className="float-right">Save</CButton>
                                </CCol>
                            </CRow>
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>
        </div>
    );

};

export default withReducer('socialHabit', reducer)(SocialHabitAddEditApp);