import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getStorageItem, removeStorageItem} from "../../../../../../utils/StorageUtils";
import Constants from "../../../../../../utils/Constants";
import * as Action from "../store/actions/index";
import withReducer from "../../../../../store/withReducer";
import reducer from "../store/reducers";
import {CButton, CCard, CCardBody, CCol, CRow} from "@coreui/react";
import {trimData} from "../../../../../../utils/DataExtractHelper";
import FitToWorkAddEditFrom from "./components/FitToWorkAddEditFrom";

const FollowUpAddEditApp = () => {
    const dispatch = useDispatch();
    const data = useSelector(({fitToWork}) => fitToWork.fitToWorkAddEdit);

    useEffect(() => {

        let fitToWorkID = getStorageItem(Constants.STORAGE.SELECTED_FIT_TO_WORK_ID);
        if (fitToWorkID) {
            dispatch(Action.getFitToWorkByID(fitToWorkID));
        }

        return () => {
            dispatch(Action.reset());
            removeStorageItem(Constants.STORAGE.SELECTED_FIT_TO_WORK_ID);
        };
    }, [dispatch]);

    const saveOrUpdateFitToWork = () => {
        let saveObj = trimData(data.formData.values);
        dispatch(Action.saveOrUpdateFitToWork(saveObj));
    };

    return (
        <div>
            <CRow>
                <CCol xs="12">
                    <CCard>
                        <CCardBody>
                            <FitToWorkAddEditFrom/>
                            <CRow>
                                <CCol xs="12">
                                    <CButton
                                        disabled={!data.formData.isValid}
                                        onClick={() => {
                                            saveOrUpdateFitToWork();
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

export default withReducer('fitToWork', reducer)(FollowUpAddEditApp);