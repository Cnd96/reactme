import React from 'react';
import {CCard, CCardBody, CCol, CRow, CTabPane} from "@coreui/react";
import MedicalTestRecord from "./MedicalTestRecord";
import Constants from "../../../../../../../../../utils/Constants";

const MedicalTestTabBody = ({medicalTestType}) => {
    return (
        <CTabPane data-tab={`${medicalTestType.medicalTestTypeID}`}>
            <CRow>
                <CCol xs="12">
                    <CCard>
                        <CCardBody>
                            <table className="table medical-test-record-table">
                                <thead>
                                <tr>
                                    <th style={{width:'50%'}}>Measurement</th>
                                    <th style={{width:'30%'}}>Value</th>
                                    <th style={{width:'20%'}}>Unit</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    medicalTestType.medicalTestRecords.filter(medicalTestRecord => medicalTestRecord.status === Constants.STATUS_CONST.ACT).sort((a, b) => parseFloat(a.medicalTestRecordID) - parseFloat(b.medicalTestRecordID)).map((medicalTestRecord, index) => {
                                        return (
                                            <MedicalTestRecord medicalTestRecord={medicalTestRecord} key={index}/>
                                        )
                                    })
                                }
                                </tbody>
                            </table>
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>
        </CTabPane>
    );
};

export default MedicalTestTabBody;
