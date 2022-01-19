import React, {useEffect, useState} from 'react';
import {CButton, CCol, CFormGroup, CLabel, CRow} from "@coreui/react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import * as Action from '../store/actions'
import FormikDatePicker from "../../../../../../../common/FormikDatePicker";

const initFormValues = {
    checkupCode: '',
    dateFromStr: '',
    dateToStr: '',
};

const PatientCheckupSearch = () => {

    const dispatch = useDispatch();
    const data = useSelector(({patientCheckupSearch}) => patientCheckupSearch.patientCheckupSearch);
    const [searchForm, setSearchForm] = useState(initFormValues);

    useEffect(() => {
        let initData = data.searchData.checkupCode ? data.searchData : initFormValues;
        setSearchForm({...initData});
    }, [dispatch]);

    const onPageSearch = (formData) => {
        dispatch(Action.setSearchData(formData));
    };

    const onReset = () => {
        dispatch(Action.resetSearchData());
        setSearchForm({...initFormValues});
    };

    return (
        <>
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
                            <CCol sm="12" md="6" lg="3">
                                <CFormGroup>
                                    <CLabel htmlFor="checkupCode">Checkup Code</CLabel>
                                    <Field
                                        type="text"
                                        name="checkupCode"
                                        placeholder={'Checkup Code'}
                                        className={'form-control'}
                                    />
                                </CFormGroup>
                            </CCol>

                            <CCol sm="12" md="6" lg="3">
                                <CFormGroup>
                                    <CLabel htmlFor="dateFromStr">Date From</CLabel>

                                    <Field
                                        type="text"
                                        name="dateFromStr"
                                        placeholder={'Date From'}
                                        component={FormikDatePicker}
                                    />
                                </CFormGroup>
                                <ErrorMessage
                                    name="dateFromStr"
                                    render={(msg) => <div
                                        className={'formik-error-message'}>{msg}</div>}
                                />
                            </CCol>


                            <CCol sm="12" md="6" lg="3">
                                <CFormGroup>
                                    <CLabel htmlFor="dateToStr">Date To</CLabel>

                                    <Field
                                        type="test"
                                        name="dateToStr"
                                        placeholder={'Date From'}
                                        component={FormikDatePicker}
                                    />
                                </CFormGroup>
                                <ErrorMessage
                                    name="dateToStr"
                                    render={(msg) => <div
                                        className={'formik-error-message'}>{msg}</div>}
                                />
                            </CCol>

                            <CCol sm="12" md="6" lg="3">
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
                        </CRow>
                    </Form>
                )}
            </Formik>
        </>
    );
};

export default PatientCheckupSearch;