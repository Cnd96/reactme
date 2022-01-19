import React, {useEffect} from 'react';
import withReducer from "../../../../../store/withReducer";
import reducer from "../store/reducer";
import {useDispatch, useSelector} from "react-redux";
import {getStorageItem, removeStorageItem} from "../../../../../../utils/StorageUtils";
import Constants from "../../../../../../utils/Constants";
import * as Action from "../store/actions";
import {trimData} from "../../../../../../utils/DataExtractHelper";
import {CButton, CCard, CCardBody, CCol, CRow} from "@coreui/react";
import SocialHabitCategoryAddEditForm from "./components/SocialHabitCategoryAddEditForm";

const SocialHabitCategoryAddEditApp = () => {
    const dispatch = useDispatch();
    const data = useSelector(({socialHabitCategory}) => socialHabitCategory.socialHabitCategoryAddEdit);

    useEffect(() => {
        let categoryID = getStorageItem(Constants.STORAGE.SELECTED_SOCIAL_HABIT_CATEGORY_ID);
        console.log("Category Id", categoryID);
        if (categoryID) {
            dispatch(Action.getSocialHabitCategoryByID(categoryID));
        }
        return () => {
            dispatch(Action.reset());
        };
    }, [dispatch]);

    const saveOrUpdate = () => {
        let saveObj = trimData(data.formData.values);
        dispatch(Action.saveOrUpdateSocialHabitCategory(saveObj));
    };

    return (
        <div>
            <CRow>
                <CCol xs="12">
                    <CCard>
                        <CCardBody>
                            <SocialHabitCategoryAddEditForm/>
                            <CRow>
                                <CCol xs="12">
                                    <CButton
                                        disabled={!data.formData.isValid}
                                        onClick={() => {
                                            saveOrUpdate();
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

export default withReducer('socialHabitCategory', reducer)(SocialHabitCategoryAddEditApp);
