import React, {Component, Fragment} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import * as Actions from '../../store/actions/index';
import Constants from "../../../../../../../utils/Constants";
import {Field, Form, Formik} from "formik";
import {getCommonStatusOptions} from "../../../../../../../utils/FormUtils";
import {CButton, CCard, CCardBody, CCol, CFormGroup, CLabel, CRow, CSelect, CTooltip} from '@coreui/react';
import {removeStorageItem} from "../../../../../../../utils/StorageUtils";
import history from "../../../../../../../@history";
import {hasUserPrivilege} from "../../../../../../../utils/PrivilegeUtils";

class RolesSearch extends Component {

    getInitData = () => {
        let {initSearch} = this.props;
        initSearch = initSearch ? initSearch : {};
        return {
            roleName: initSearch.roleName ? initSearch.roleName : '',
            status: initSearch.status ? initSearch.status : Constants.STATUS_CONST.ACT,
        };
    };

    onPageSearch = (formData) => {
        this.props.setSearchData(formData);
    };

    onReset = () => {
        this.props.resetSearchData();
    };

    gotToAddEdit = () => {
        removeStorageItem(Constants.STORAGE.SELECTED_ROLE_ID);
        history.push({
            pathname: Constants.PAGES.roleAddEdit
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
                                        <Form>

                                            <CRow>
                                                <CCol sm="12" md="6" lg="3">
                                                    <CFormGroup>
                                                        <CLabel htmlFor="roleName">Role Name</CLabel>

                                                        <Field
                                                            type="text"
                                                            name="roleName"
                                                            placeholder={'Role Name'}
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
                                                        hasUserPrivilege(Constants.PRIVILEGE_CODES.HEALTH_TRACKER_SETTINGS_ROLE_ADD_EDIT) &&
                                                        <Fragment>
                                                            <CTooltip
                                                                content={'Add Role'}
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

                                            {/*<div className={'flex flex-row flex-wrap items-center mt-2'}>*/}
                                            {/*    <Button*/}
                                            {/*        className={"docs-wiggle float-right mr-2"}*/}
                                            {/*        icon="search"*/}
                                            {/*        type="submit"*/}
                                            {/*        disabled={isSubmitting}*/}
                                            {/*    >*/}
                                            {/*        SEARCH*/}
                                            {/*    </Button>*/}

                                            {/*    <Button*/}
                                            {/*        className={"docs-wiggle float-right"}*/}
                                            {/*        icon="reset"*/}
                                            {/*        disabled={isSubmitting}*/}
                                            {/*        type='reset'*/}
                                            {/*        onClick={this.onReset}*/}
                                            {/*    >*/}
                                            {/*        RESET*/}
                                            {/*    </Button>*/}
                                            {/*</div>*/}

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
            resetSearchData: Actions.resetSearchData
        },
        dispatch);
}

function mapStateToProps({roles}) {
    return {
        initSearch: roles.rolesSearch.searchData
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RolesSearch);
