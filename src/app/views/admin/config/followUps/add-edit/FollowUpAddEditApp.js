import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getStorageItem, removeStorageItem} from "../../../../../../utils/StorageUtils";
import Constants from "../../../../../../utils/Constants";
import * as Action from "../store/action/index";
import FollowUpAddEditForm from "./components/FollowUpAddEditForm";
import withReducer from "../../../../../store/withReducer";
import reducer from "../store/reducer";
import {CButton, CCard, CCardBody, CCol, CRow} from "@coreui/react";
import {trimData} from "../../../../../../utils/DataExtractHelper";

const FollowUpAddEditApp = () => {
    const dispatch = useDispatch();
    const data = useSelector(({followUp}) => followUp.followUpAddEdit);

    useEffect(() => {

        let followUpID = getStorageItem(Constants.STORAGE.SELECTED_FOLLOW_UP_ID);
        if (followUpID) {
            dispatch(Action.getFollowUpDTOByID(followUpID));
        }

        return () => {
            dispatch(Action.reset());
            removeStorageItem(Constants.STORAGE.SELECTED_FOLLOW_UP_ID);
        };
    }, [dispatch]);

    const saveOrUpdateFollowUp = () => {
        let saveObj = trimData(data.formData.values);
        dispatch(Action.saveUpdateFollowUp(saveObj));
    };

    return (
        <div>
            <CRow>
                <CCol xs="12">
                    <CCard>
                        <CCardBody>
                            <FollowUpAddEditForm/>
                            <CRow>
                                <CCol xs="12">
                                    <CButton
                                        disabled={!data.formData.isValid}
                                        onClick={() => {
                                            saveOrUpdateFollowUp();
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

export default withReducer('followUp', reducer)(FollowUpAddEditApp);