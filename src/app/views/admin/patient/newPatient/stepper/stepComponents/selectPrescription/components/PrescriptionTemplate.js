import React, {useEffect, useState} from 'react';
import {CCard, CCardBody, CCol, CFormGroup, CLabel, CRow, CSelect} from "@coreui/react";
import {getOptionsListByObjectListForCustomSelect} from "../../../../../../../../../utils/FormUtils";
import {useDispatch, useSelector} from "react-redux";
import * as Action from "../store/actions";


const PrescriptionTemplate = () => {
    const dispatch = useDispatch();
    const data = useSelector(({selectPrescriptionTemplate}) => selectPrescriptionTemplate.selectPrescriptionTemplate);
    const [prescriptionTemplateID, setPrescriptionTemplateID] = useState(data.prescription.prescriptionTemplateID ? data.prescription.prescriptionTemplateID : '');

    useEffect(() => {
        setPrescriptionTemplateID(data.prescription.prescriptionTemplateID);
    }, [data.prescription.prescriptionTemplateID]);

    const onChange = (values) => {
        if (values.target.value) {
            setPrescriptionTemplateID(values.target.value);
            dispatch(Action.onSelectPrescription(values.target.value));
        } else {
            dispatch(Action.onResetPrescription());
        }
    };

    return (
        <div>
            <CRow>
                <CCol xs="12">
                    <CCard>
                        <CCardBody>
                            <form>
                                <CRow>
                                    <CCol sm="12" md="6" lg="3">
                                        <CFormGroup>
                                            <CLabel htmlFor="prescriptionTemplateID">Prescription
                                                Template</CLabel>
                                            <CSelect
                                                custom
                                                name="prescriptionTemplateID"
                                                onChange={onChange}
                                                value={prescriptionTemplateID}
                                            >
                                                {data &&
                                                getOptionsListByObjectListForCustomSelect(data.prescriptionTemplateList, "prescriptionTemplate", "prescriptionTemplateD", "physicalActivityCategoryID", "prescriptionTemplateID", true).map((item) => {
                                                    return (
                                                        <option key={item.key}
                                                                value={item.key}>{item.value}</option>
                                                    );
                                                })
                                                }
                                            </CSelect>
                                        </CFormGroup>
                                    </CCol>
                                </CRow>
                            </form>
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>
        </div>
    );
};

export default PrescriptionTemplate;