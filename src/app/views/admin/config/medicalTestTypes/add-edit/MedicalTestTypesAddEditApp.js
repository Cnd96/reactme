import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getStorageItem, removeStorageItem} from "../../../../../../utils/StorageUtils";
import Constants from "../../../../../../utils/Constants";
import * as Action from "../store/actions/index";
import withReducer from "../../../../../store/withReducer";
import reducer from "../../medicalDiseases/store/reducers";
import {CButton, CCard, CCardBody, CCol, CRow} from "@coreui/react";
import MedicalTestTypeAddEditForm from "./components/MedicalTestTypeAddEditForm";
import {trimData} from "../../../../../../utils/DataExtractHelper";

const MedicalTestTypesAddEditApp = () => {
    const dispatch = useDispatch();
    const data = useSelector(({medicalTestTypes}) => medicalTestTypes.medicalTestTypeAddEdit);

    useEffect(() => {
        let medicalTestTypeID = getStorageItem(Constants.STORAGE.SELECTED_MEDICAL_TEST_TYPE_ID);
        if (medicalTestTypeID) {
            dispatch(Action.getMedicalTestTypeDTOByID(medicalTestTypeID));
        }

        return () => {
            dispatch(Action.reset());
            removeStorageItem(Constants.STORAGE.SELECTED_MEDICAL_TEST_TYPE_ID);
        };
    }, [dispatch]);

    const saveOrUpdateMedicalTestType = () => {
        let saveObj = trimData(data.formData.values);
        dispatch(Action.saveUpdateMedicalTestType(saveObj));
    };

    return (
        <div>
            <CRow>
                <CCol xs="12">
                    <CCard>
                        <CCardBody>
                            <MedicalTestTypeAddEditForm/>
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

export default withReducer('medicalTestTypes', reducer)(MedicalTestTypesAddEditApp);