import React, {Component} from 'react';
import MedicalDiseaseAddEditFrom from "./MedicalDiseaseAddEditFrom";
import {CButton, CCard, CCardBody, CCol, CRow} from "@coreui/react";
import * as Action from "../../store/action";
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';

class MedicalDiseasesAddEditBase extends Component {

    render() {
        let {isValid, values} = this.props.formData;
        return (
            <>
                <CRow>
                    <CCol xs="12">
                        <CCard>
                            <CCardBody>
                                <MedicalDiseaseAddEditFrom/>
                                <CRow>
                                    <CCol xs="12">
                                        <CButton
                                            disabled={!isValid}
                                            onClick={() => {
                                                this.props.saveOrUpdateMedicalDisease(values);
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
        saveOrUpdateMedicalDisease: Action.saveOrUpdateMedicalDisease,
    }, dispatch)
};

function mapStateToProps({medicalDisease}) {
    return {
        formData: medicalDisease.medicalDiseaseAddEdit.formData
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MedicalDiseasesAddEditBase);