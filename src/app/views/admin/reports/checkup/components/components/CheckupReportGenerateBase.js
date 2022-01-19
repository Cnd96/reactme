import React from 'react';
import CheckupReportGenerateForm from "./subComponents/CheckupReportGenerateForm";
import {CCard, CCardBody, CCol, CRow} from "@coreui/react";


const CheckupReportGenerateBase = () => {
    return (
        <div>
            <CRow>
                <CCol xs="12">
                    <CCard>
                        <CCardBody>
                            <>
                                <CheckupReportGenerateForm/>
                            </>
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>
        </div>
    );
};

export default CheckupReportGenerateBase;