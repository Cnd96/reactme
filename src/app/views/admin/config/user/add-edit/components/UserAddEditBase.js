import React, {Component} from 'react';
import {CButton, CCard, CCardBody, CCol, CRow} from "@coreui/react";
import UserAddEditForm from "./UserAddEditForm";
import UserEditRole from "./UserRoleEdit";
import AppYesNo from "../../../../../common/AppYesNo";
import {hasUserPrivilege} from "../../../../../../../utils/PrivilegeUtils";
import Constants from "../../../../../../../utils/Constants";

class UserAddEditBase extends Component {

    state = {
        showPasswordReset: false
    };

    showHidePasswordReset = (showHide) => {
        this.setState({
            showPasswordReset: showHide
        });
    };

    onYes = () => {
        this.props.onPasswordReset(this.props.user.userID);
        this.showHidePasswordReset();
    };

    onNo = () => {
        this.showHidePasswordReset();
    };

    render() {

        const {isNew, user, roles, checkedRoleIDs, isValid, onSaveUpdate, onRoleChange} = this.props;
        const {showPasswordReset} = this.state;

        return (
            <>
                <CRow>
                    <CCol xs="12">
                        <CCard>
                            <CCardBody>
                                <UserAddEditForm
                                    isNew={isNew}
                                    user={user}
                                />

                                <UserEditRole
                                    isNew={isNew}
                                    user={user}
                                    roles={roles}
                                    checkedRoleIDs={checkedRoleIDs}
                                    onRoleChange={onRoleChange}
                                />

                                <CRow>
                                    <CCol xs="12">
                                        {
                                            !isNew &&  hasUserPrivilege(Constants.PRIVILEGE_CODES.HEALTH_TRACKER_SETTINGS_USER_PASSWORD_RESET) &&
                                            <CButton
                                                onClick={() => {
                                                    this.showHidePasswordReset(true);
                                                }}
                                                color="warning">Password Reset</CButton>
                                        }

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

                <AppYesNo
                    header={'Password Reset'}
                    body={
                        <>
                            <p>
                                Are you sure to reset the password of <span
                                className={'bold-font'}>{user && user ? user.userName : ''}</span>
                            </p>
                            <p>
                                New password will be sent to <span className={'bold-font'}> {user.email} </span>
                            </p>
                        </>
                    }

                    isOpen={showPasswordReset}
                    onYes={this.onYes}
                    onNo={this.onNo}
                />
            </>
        );
    }

}

export default UserAddEditBase;
