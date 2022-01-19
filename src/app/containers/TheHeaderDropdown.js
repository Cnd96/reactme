import React, {useState} from 'react'
import {CButton, CDropdown, CDropdownItem, CDropdownMenu, CDropdownToggle, CImg} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import defaultLogo from '../../assets/img/avatars/10.png';
import {useDispatch, useSelector} from "react-redux";
import * as Actions from '../auth/store/actions';
import AppModal from "../views/common/AppModal";
import PasswordResetForm from "../views/common/PasswordResetForm";

const TheHeaderDropdown = () => {

    const dispatch = useDispatch();
    const userData = useSelector(state => state.notebook.login.user);
    let userName = '';
    if (userData) {
        userName = userData.user.title + '. ' + userData.user.firstName + ' ' + userData.user.lastName;
    }

    const [showPwResetModal, setShowPwResetModal] = useState(false);
    const [passwordDetails, setPasswordDetails] = useState({});

    let onToggle = () => {
        setShowPwResetModal(!showPwResetModal);
    };

    let onPasswordReset = () => {
        dispatch(Actions.changeAdminPassword(passwordDetails.values));
        onToggle();
    };

    return (
        <>
            <CDropdown
                inNav
                className="c-header-nav-items mx-2"
                direction="down"
            >
                <CDropdownToggle className="c-header-nav-link" caret={false}>
                    {userName} {' '}
                    <div className="c-avatar">
                        <CImg
                            src={defaultLogo}
                            className="c-avatar-img"
                        />
                    </div>
                </CDropdownToggle>
                <CDropdownMenu className="pt-0" placement="bottom-end">
                    <CDropdownItem
                        onClick={() => {
                            onToggle();
                        }}
                    >
                        <CIcon name="cil-lock-locked" className="mfe-2"/>
                        Change Password
                    </CDropdownItem>

                    <CDropdownItem onClick={async () => {
                        Actions.expireUserCache();
                        dispatch(Actions.userLogOut());
                    }}>
                        <CIcon name="cil-account-logout" className="mfe-2"/>
                        Logout
                    </CDropdownItem>

                </CDropdownMenu>
            </CDropdown>


            <AppModal
                isOpen={showPwResetModal}
                header={'Reset Password'}
                onToggle={onToggle}
                body={
                    <>
                        <PasswordResetForm
                            onFormChange={setPasswordDetails}
                        />
                    </>
                }
                footer={
                    <>
                        <CButton
                            color="primary"
                            disabled={!passwordDetails.isValid}
                            onClick={onPasswordReset}
                        >Confirm</CButton>
                        {' '}
                        <CButton color="secondary" onClick={onToggle}>Cancel</CButton>
                    </>
                }
            />
        </>
    )
};

export default TheHeaderDropdown
