import React, {useEffect} from 'react';
import PrescriptionTemplateAddEditForm from "./PrescriptionTemplateAddEditForm";
import {CButton, CCard, CCardBody, CCol, CRow,} from "@coreui/react";
import {useDispatch, useSelector} from "react-redux";
import {getStorageItem} from "../../../../../../../utils/StorageUtils";
import Constants from "../../../../../../../utils/Constants";
import * as Action from "../../store/actions";
import PrescriptionTemplateMedicineList from "./PrescriptionTemplateMedicineList";
import {showErrorMessage} from "../../../../../../../utils/ToastUtil";
import {trimData} from "../../../../../../../utils/DataExtractHelper";

const PrescriptionTemplateAddEditBase = () => {

    const dispatch = useDispatch();
    const data = useSelector(({prescriptionTemplate}) => prescriptionTemplate.prescriptionTemplateAddEdit);


    useEffect(() => {
        let prescriptionTemplateID = getStorageItem(Constants.STORAGE.SELECTED_PRESCRIPTION_TEMPLATE_ID);
        if (prescriptionTemplateID) {
            dispatch(Action.getPrescriptionTemplateByID(prescriptionTemplateID));
        }
        return () => {
            dispatch(Action.reset());
        };
    }, [dispatch]);

    const saveOrUpdate = () => {
        let templateData;
        if (data.formData.values) {
            templateData = Object.assign({}, data.formData.values);
        } else {
            templateData = Object.assign({}, data.prescriptionTemplate);
        }
        let saveObj = Object.assign({}, templateData, {addedTemplateMedicine: data.addedTemplateMedicine});
        if (templateData.prescriptionTemplate) {
            dispatch(Action.saveOrUpdatePrescriptionTemplate(trimData(saveObj)));
        } else if (!templateData.prescriptionTemplate || data.addedTemplateMedicine.length === 0) {
            showErrorMessage("Please Insert Template Name and Add Medicine");
        }

    };

    return (

        <div>
            <CRow>
                <CCol xs="12">
                    <CCard>
                        <CCardBody>
                            <PrescriptionTemplateAddEditForm/>
                            <CRow>
                                <CCol xs="12">
                                    <CButton
                                        onClick={() => {
                                            saveOrUpdate();
                                        }}
                                        color="primary" className="float-right">Save</CButton>
                                </CCol>
                            </CRow>
                        </CCardBody>
                    </CCard>
                </CCol>

                {
                    data.addedTemplateMedicine && data.addedTemplateMedicine.length > 0 &&
                    <PrescriptionTemplateMedicineList/>
                }

            </CRow>

        </div>
    );
};

export default PrescriptionTemplateAddEditBase;