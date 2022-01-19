import React, {Component} from 'react';
import {CButton, CCard, CCardBody, CCol, CRow} from "@coreui/react";
import * as Action from "../../store/action";
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import DiagnosisAddEditForm from "./DiagnosisAddEditForm";

class DiagnosisAddEditBase extends Component {

    render() {
        let {isValid, values} = this.props.formData;
        return (
            <>
                <CRow>
                    <CCol xs="12">
                        <CCard>
                            <CCardBody>
                                <DiagnosisAddEditForm/>
                                <CRow>
                                    <CCol xs="12">
                                        <CButton
                                            disabled={!isValid}
                                            onClick={() => {
                                                this.props.saveOrUpdateDiagnosis(values);
                                            }}
                                            color="primary" className="float-right">Save</CButton>
                                    </CCol>
                                </CRow>
                            </CCardBody>
                        </CCard>
                    </CCol>
                </CRow>
            </>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        saveOrUpdateDiagnosis: Action.saveOrUpdateDiagnosis
    }, dispatch)
};

function mapStateToProps({diagnosis}) {
    return {
        formData: diagnosis.diagnosisAddEdit.formData
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DiagnosisAddEditBase);