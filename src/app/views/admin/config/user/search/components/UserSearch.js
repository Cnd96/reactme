import React, {Component, Fragment} from "react";
import {Field, Form, Formik} from "formik";
import {getCommonStatusOptions} from "../../../../../../../utils/FormUtils";
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import * as Actions from '../../store/actions/index';
import Constants from "../../../../../../../utils/Constants";
import {CButton, CCard, CCardBody, CCol, CFormGroup, CLabel, CRow, CSelect, CTooltip} from "@coreui/react";
import {removeStorageItem} from "../../../../../../../utils/StorageUtils";
import history from "../../../../../../../@history";
import {hasUserPrivilege} from "../../../../../../../utils/PrivilegeUtils";

class UserSearch extends Component {

    getInitData = () => {
        let {initSearch} = this.props;
        initSearch = initSearch ? initSearch : {};
        return {
            userName: initSearch.userName ? initSearch.userName : '',
            firstName: initSearch.firstName ? initSearch.firstName : '',
            lastName: initSearch.lastName ? initSearch.lastName : '',
            contactNo: initSearch.contactNo ? initSearch.contactNo : '',
            status: initSearch.status ? initSearch.status : Constants.STATUS_CONST.ACT,
        };
    };

    onPageSearch = (formData) => {
        this.props.setSearchData(formData);
    };

    onReset = () => {
        this.props.resetData();
    };

    gotToAddEdit = () => {
        removeStorageItem(Constants.STORAGE.SELECTED_USER_ID);
        history.push({
            pathname: Constants.PAGES.userAddEdit
        });
    };

    render() {

        let initData = this.getInitData();

        return (
            <>
                <CRow>
                    <CCol xs="12">
                        <CCard>
                            <CCardBody>
                                <Formik
                                    enableReinitialize={true}
                                    initialValues={initData}
                                    onSubmit={(values, {setSubmitting}) => {
                                        this.onPageSearch(values);
                                        setSubmitting(false);
                                    }}
                                >
                                    {({isSubmitting, dirty}) => (
                                        <Form className={'w-full flex flex-row flex-wrap items-center'}>

                                            <CRow>
                                                <CCol sm="12" md="6" lg="3">
                                                    <CFormGroup>
                                                        <CLabel htmlFor="userName">User Name</CLabel>

                                                        <Field
                                                            type="text"
                                                            name="userName"
                                                            placeholder={'User Name'}
                                                            className={'form-control'}
                                                        />
                                                    </CFormGroup>
                                                </CCol>

                                                <CCol sm="12" md="6" lg="3">
                                                    <CFormGroup>
                                                        <CLabel htmlFor="firstName">First Name</CLabel>

                                                        <Field
                                                            type="text"
                                                            name="firstName"
                                                            placeholder={'First Name'}
                                                            className={'form-control'}
                                                        />
                                                    </CFormGroup>
                                                </CCol>


                                                <CCol sm="12" md="6" lg="3">
                                                    <CFormGroup>
                                                        <CLabel htmlFor="lastName">Last Name</CLabel>

                                                        <Field
                                                            type="text"
                                                            name="lastName"
                                                            placeholder={'Last Name'}
                                                            className={'form-control'}
                                                        />
                                                    </CFormGroup>
                                                </CCol>

                                                <CCol sm="12" md="6" lg="3">
                                                    <CFormGroup>
                                                        <CLabel htmlFor="contactNo">Contact No</CLabel>

                                                        <Field
                                                            type="text"
                                                            name="contactNo"
                                                            placeholder={'Contact Number'}
                                                            className={'form-control'}
                                                        />
                                                    </CFormGroup>
                                                </CCol>

                                                <CCol sm="12" md="6" lg="3">
                                                    <CFormGroup>
                                                        <CLabel htmlFor="email">Email</CLabel>

                                                        <Field
                                                            type="text"
                                                            name="email"
                                                            placeholder={'Email'}
                                                            className={'form-control'}
                                                        />
                                                    </CFormGroup>
                                                </CCol>

                                                <CCol sm="12" md="6" lg="3">

                                                    <CFormGroup>
                                                        <CLabel htmlFor="status">Status</CLabel>

                                                        <Field name="status">
                                                            {({
                                                                  field, // { name, value, onChange, onBlur }
                                                                  form: {touched, errors}, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                                                                  meta,
                                                              }) => (

                                                                <CSelect custom name="status" {...field}>
                                                                    {
                                                                        getCommonStatusOptions(true).map((item) => {
                                                                            return (
                                                                                <option key={item.key}
                                                                                        value={item.key}>{item.value}</option>
                                                                            );
                                                                        })
                                                                    }
                                                                </CSelect>
                                                            )}
                                                        </Field>
                                                    </CFormGroup>

                                                </CCol>

                                                <CCol sm="12" md="6" lg="3">
                                                    <CButton
                                                        type="submit"
                                                        disabled={isSubmitting}
                                                        color="info" className="row-button-styles mr-2">Search</CButton>
                                                    <CButton
                                                        onClick={this.onReset}
                                                        type='reset'
                                                        color="light" className="row-button-styles">Clear</CButton>

                                                    {
                                                        hasUserPrivilege(Constants.PRIVILEGE_CODES.HEALTH_TRACKER_SETTINGS_USER_ADD_EDIT) &&
                                                        <Fragment>
                                                            <CTooltip
                                                                content={'Add User'}
                                                                placement={'left-start'}
                                                            >
                                                                <CButton
                                                                    onClick={this.gotToAddEdit}
                                                                    color="danger"
                                                                    className="row-button-styles float-right">
                                                                    <i className='fa fa-plus'></i>
                                                                </CButton>
                                                            </CTooltip>
                                                        </Fragment>
                                                    }
                                                </CCol>
                                            </CRow>

                                        </Form>
                                    )}
                                </Formik>
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
            setSearchData: Actions.setSearchData,
            resetData: Actions.reset
        },
        dispatch);
}

function mapStateToProps({users}) {
    return {
        initSearch: users.userSearch.searchData
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserSearch);
