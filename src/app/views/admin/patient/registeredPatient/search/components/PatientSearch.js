import React, {useEffect, useState} from 'react';
import {CButton, CCard, CCardBody, CCol, CFormGroup, CLabel, CRow} from "@coreui/react";
import {Field, Form, Formik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import * as Action from '../../store/actions/index'
import Constants from "../../../../../../../utils/Constants";

const initFormValues = {
    firstName: '',
    lastName: '',
    nicPassport: '',
    contactNo: '',
    patientCode: '',
    age: '',
    status: Constants.STATUS_CONST.ACT
};

const PatientSearch = ({createCheckUp}) => {

    const dispatch = useDispatch();
    const data = useSelector(({patientSearch}) => patientSearch.patientSearch);
    const [searchForm, setSearchForm] = useState(initFormValues);

    useEffect(() => {
        let initData = data.searchData.firstName ? data.searchData : initFormValues;
        setSearchForm({...initData})
    }, [dispatch]);


    const onPageSearch = (formData) => {
        dispatch(Action.setSearchData(formData));
    };

    const onReset = () => {
        dispatch(Action.resetSearchData());
        setSearchForm(initFormValues);
    };

    return (
        <>
            <CRow>
                <CCol xs="12">
                    <CCard>
                        <CCardBody>
                            <Formik
                                enableReinitialize={true}
                                initialValues={searchForm}
                                onSubmit={(values, {setSubmitting}) => {
                                    onPageSearch(values);
                                    setSubmitting(false);
                                }}
                            >
                                {({isSubmitting, dirty}) => (
                                    <Form>
                                        <CRow>
                                            <CCol sm="12" md="6" lg="2">
                                                <CFormGroup>
                                                    <CLabel htmlFor="firstName">Name</CLabel>

                                                    <Field
                                                        type="text"
                                                        name="firstName"
                                                        placeholder={'First'}
                                                        className={'form-control'}
                                                    />
                                                </CFormGroup>
                                            </CCol>


                                            <CCol sm="12" md="6" lg="2">
                                                <CFormGroup>
                                                    <CLabel htmlFor="nic">NIC/PASSPORT</CLabel>

                                                    <Field
                                                        type="text"
                                                        name="nicPassport"
                                                        placeholder={'NIC/Passport '}
                                                        className={'form-control'}
                                                    />
                                                </CFormGroup>
                                            </CCol>

                                            <CCol sm="12" md="6" lg="2">
                                                <CFormGroup>
                                                    <CLabel htmlFor="contactNo">Contact number</CLabel>

                                                    <Field
                                                        type="text"
                                                        name="contactNo"
                                                        placeholder={'Contact No'}
                                                        className={'form-control'}
                                                    />
                                                </CFormGroup>
                                            </CCol>

                                            <CCol sm="12" md="6" lg="2">
                                                <CFormGroup>
                                                    <CLabel htmlFor="patientCode">Patient ID</CLabel>

                                                    <Field
                                                        type="text"
                                                        name="patientCode"
                                                        placeholder={'Patient ID'}
                                                        className={'form-control'}
                                                    />
                                                </CFormGroup>
                                            </CCol>

                                            <CCol sm="12" md="6" lg="2">
                                                <CButton
                                                    type="submit"
                                                    disabled={isSubmitting}
                                                    color="info"
                                                    className="row-button-styles mr-2"
                                                >
                                                    Search
                                                </CButton>
                                                <CButton
                                                    onClick={onReset}
                                                    type='reset'
                                                    color="light"
                                                    className="row-button-styles"
                                                >
                                                    Clear
                                                </CButton>
                                            </CCol>

                                            <CCol sm="12" md="6" lg="2">
                                                <CButton
                                                    onClick={() => {
                                                        createCheckUp();
                                                    }}
                                                    color="success"
                                                    variant="outline"
                                                    className="row-button-styles"
                                                >
                                                    {/*<span>*/}
                                                    {/*    <CIcon*/}
                                                    {/*        size={'lg'}*/}
                                                    {/*        name={'cil-user-follow'}*/}
                                                    {/*        style={{marginRight: '5px'}}*/}
                                                    {/*    />*/}
                                                    {/*</span>*/}
                                                    New Patient
                                                </CButton>
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
};

export default PatientSearch;