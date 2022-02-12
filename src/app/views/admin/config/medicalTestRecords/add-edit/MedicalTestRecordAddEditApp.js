import React, {useEffect} from 'react';
import withReducer from "../../../../../store/withReducer";
import reducer from "../store/reducers";
import {useDispatch, useSelector} from "react-redux";
import {getStorageItem, removeStorageItem} from "../../../../../../utils/StorageUtils";
import Constants from "../../../../../../utils/Constants";
import * as Action from "../store/actions";
import {trimData} from "../../../../../../utils/DataExtractHelper";
import {CButton, CCard, CCardBody, CCol, CRow} from "@coreui/react";
import MedicalTestRecordAddEditForm from "./components/MedicalTestRecordAddEditForm";

const MedicalTestRecordAddEditApp = () => {

    const dispatch = useDispatch();
    const data = useSelector(({medicalTestRecords}) => medicalTestRecords.medicalTestRecordAddEdit);

    useEffect(() => {
        let medicalTestRecordID = getStorageItem(Constants.STORAGE.SELECTED_MEDICAL_TEST_RECORD_ID);
        if (medicalTestRecordID) {
            dispatch(Action.getMedicalTestRecordDTOByID(medicalTestRecordID));
        }
        dispatch(Action.getMedicalTestTypes());
        return () => {
            dispatch(Action.reset());
            removeStorageItem(Constants.STORAGE.SELECTED_MEDICAL_TEST_TYPE_ID);
        };
    }, [dispatch]);

    const saveOrUpdateMedicalTestType = () => {
        let saveObj = trimData(data.formData.values);
        console.log("sss",saveObj)
        dispatch(Action.saveOrUpdateMedicalTestRecord(saveObj));
    };

    return (
        <div>
            <CRow>
                <CCol xs="12">
                    <CCard>
                        <CCardBody>
                            <MedicalTestRecordAddEditForm/>
                            <CRow>
                                <CCol xs="12">
                                    <CButton
                                        disabled={!data.formData.isValid}
                                        onClick={() => {
                                            saveOrUpdateMedicalTestType();
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

export default withReducer('medicalTestRecords', reducer)(MedicalTestRecordAddEditApp);