import React, {useEffect} from 'react';
import withReducer from "../../../../../store/withReducer";
import reducer from "../../dietaryHabitCategory/store/reducer";
import {useDispatch, useSelector} from "react-redux";
import {getStorageItem, removeStorageItem} from "../../../../../../utils/StorageUtils";
import Constants from "../../../../../../utils/Constants";
import * as Action from "../store/actions";
import {trimData} from "../../../../../../utils/DataExtractHelper";
import {CButton, CCard, CCardBody, CCol, CRow} from "@coreui/react";
import PhysicalActivityCategoryAddEditFrom from "./components/PhysicalActivityCategoryAddEditFrom";

const PhysicalActivityCategoryAddEditApp = () => {
    const dispatch = useDispatch();
    const data = useSelector(({physicalActivityCategory}) => physicalActivityCategory.physicalActivitiesCategoryAddEdit);

    useEffect(() => {
        let categoryID = getStorageItem(Constants.STORAGE.SELECTED_PHYSICAL_ACTIVITY_CATEGORY_ID);
        if (categoryID) {
            dispatch(Action.getPhysicalActivityCategoryByID(categoryID));
        }
        return () => {
            dispatch(Action.reset());
            removeStorageItem(Constants.STORAGE.SELECTED_PHYSICAL_ACTIVITY_CATEGORY_ID);
        };
    }, [dispatch]);

    const saveOrUpdate = () => {
        let saveObj = trimData(data.formData.values);
        dispatch(Action.saveOrUpdatePhysicalActivityCategory(saveObj));
    };

    return (
        <div>
            <CRow>
                <CCol xs="12">
                    <CCard>
                        <CCardBody>
                            <PhysicalActivityCategoryAddEditFrom/>
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

export default withReducer('physicalActivityCategory', reducer)(PhysicalActivityCategoryAddEditApp);