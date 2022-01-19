import React, {useEffect} from 'react';
import withReducer from "../../../../../store/withReducer";
import reducer from "../store/reducer";
import {useDispatch, useSelector} from "react-redux";
import * as Actions from "../store/action";
import {getStorageItem, removeStorageItem} from "../../../../../../utils/StorageUtils";
import Constants from "../../../../../../utils/Constants";
import {trimData} from "../../../../../../utils/DataExtractHelper";
import {CButton, CCard, CCardBody, CCol, CRow} from "@coreui/react";
import PhysicalActivitiesAddEditForm from "./components/PhysicalActivitiesAddEditForm";

const PhysicalActivitiesAddEditApp = () => {

    const dispatch = useDispatch();
    const data = useSelector(({physicalActivity}) => physicalActivity.physicalActivityAddEdit);

    useEffect(() => {
        dispatch(Actions.getPhysicalActivityCategories());

        let physicalActivityID = getStorageItem(Constants.STORAGE.SELECTED_PHYSICAL_ACTIVITY_ID);
        if (physicalActivityID) {
            dispatch(Actions.getPhysicalActivityByID(physicalActivityID));
        }

        return (() => {
            removeStorageItem(Constants.STORAGE.SELECTED_PHYSICAL_ACTIVITY_ID);
            dispatch(Actions.reset());
        })

    }, [dispatch]);

    const saveOrUpdatePhysicalActivity = () => {
        let saveObj = trimData(data.formData.values);
        dispatch(Actions.saveOrUpdatePhysicalActivity(saveObj));
    };

    return (
        <div>
            <CRow>
                <CCol xs="12">
                    <CCard>
                        <CCardBody>
                            <PhysicalActivitiesAddEditForm/>
                            <CRow>
                                <CCol xs="12">
                                    <CButton
                                        disabled={!data.formData.isValid}
                                        onClick={() => {
                                            saveOrUpdatePhysicalActivity();
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

export default withReducer('physicalActivity', reducer)(PhysicalActivitiesAddEditApp);