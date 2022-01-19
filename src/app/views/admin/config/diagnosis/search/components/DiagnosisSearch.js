import React, {Component} from 'react';
import Constants from "../../../../../../../utils/Constants";
import {removeStorageItem} from "../../../../../../../utils/StorageUtils";
import history from "../../../../../../../@history";
import {CButton, CCard, CCardBody, CCol, CFormGroup, CLabel, CRow, CSelect, CTooltip} from "@coreui/react";
import {Field, Form, Formik} from "formik";
import {getCommonStatusOptions} from "../../../../../../../utils/FormUtils";
import * as Actions from "../../store/action";
import {bindActionCreators} from 'redux';
import {connect} from "react-redux";

class DiagnosisSearch extends Component {

    getInitData = () => {
        let {initSearch} = this.props;
        initSearch = initSearch ? initSearch : {};
        return {
            diagnosisName: initSearch.diagnosisName ? initSearch.diagnosisName : '',
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
        removeStorageItem(Constants.STORAGE.SELECTED_DIAGNOSIS_ID);
        history.push({
            pathname: Constants.PAGES.diagnosisAddEdit
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
                                                        <CLabel htmlFor="diagnosisName">Diagnosis Name</CLabel>

                                                        <Field
                                                            type="text"
                                                            name="diagnosisName"
                                                            placeholder={'Diagnosis Name'}
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

                                                </CCol>

                                                <CCol sm="12" md="6" lg="3">
                                                    <CTooltip
                                                        content={'Add Role'}
                                                        placement={'left-start'}
                                                    >
                                                        <CButton
                                                            onClick={this.gotToAddEdit}
                                                            color="danger" className="row-button-styles float-right">
                                                            <i className='fa fa-plus'></i>
                                                        </CButton>
                                                    </CTooltip>
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
            resetSearchData: Actions.onResetSearchData
        },
        dispatch);
}

function mapStateToProps({diagnosis}) {
    return {
        initSearch: diagnosis.diagnosisSearch.searchData
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DiagnosisSearch);
