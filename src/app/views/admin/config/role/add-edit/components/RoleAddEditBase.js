import React, {Component} from 'react';
import RoleAddEditForm from "./RoleAddEditForm";
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import * as roleAction from "../../store/actions";
import {CButton, CCard, CCardBody, CCol, CRow} from "@coreui/react";
import PrivilegeBase from "./privileges/PrivilegeBase";

class RoleAddEditBase extends Component {

    render() {

        const {allPrivileges, role, onFormChange, onPrivilegeChange, isValid, onSaveUpdate} = this.props;

        return (
            <>
                <CRow>
                    <CCol xs="12">
                        <CCard>
                            <CCardBody>
                                <RoleAddEditForm
                                    role={role}
                                    onFormChange={onFormChange}
                                />

                                <PrivilegeBase
                                    allPrivileges={allPrivileges}
                                    role={role}
                                    onPrivilegeChange={onPrivilegeChange}
                                />

                                <CRow>
                                    <CCol xs="12">
                                        <CButton
                                            disabled={!isValid}
                                            onClick={onSaveUpdate}
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

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
            onFormChange: roleAction.onFormChange,
            onPrivilegeChange: roleAction.onPrivilegeChange,
        },
        dispatch);
}

export default connect(null, mapDispatchToProps)(RoleAddEditBase);
