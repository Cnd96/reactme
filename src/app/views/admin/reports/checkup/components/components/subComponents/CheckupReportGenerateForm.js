import React, {useEffect, useState} from 'react';
import {CButton, CCol, CFormGroup, CLabel, CRow} from "@coreui/react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import FormikDatePicker from "../../../../../../../common/FormikDatePicker";
import {useDispatch, useSelector} from "react-redux";
import * as Actions from '../../store/actions/checkup.report.generate.actions'
import customValidator from "../../../../../../../../utils/ValidationUtil";
import {processMobileNumber} from "../../../../../../../../utils/FormUtils";
import PatientDetailsSelectionMenu from "./PatientDetailsSelectionMenu";
import Constants from "../../../../../../../../utils/Constants";
import CIcon from "@coreui/icons-react";
import {showErrorMessage} from "../../../../../../../../utils/ToastUtil";
import {toDate} from "../../../../../../../../utils/HealthTrackerUtils"

const downloadFile = (url, fileName) => {
    const a = document.createElement("a");
    a.href = url;
    a.download = fileName;
    // a.target = '_blank';
    a.click();
};

const createBlob = (fileName) => {
    if (!_.isEmpty(fileName)) {
        let fileURL = Constants.REPORT_BASE_URL + fileName;
        downloadFile(fileURL, fileName);
    }
};


const getValidations = () => {
    return {
        checkupDateFromStr: {
            required: {message: 'Required'},
        },
        checkupDateToStr: {
            required: {message: 'Required'},
        },
        nic: {
            maxLength: {value: 12},
            nicLK: {message: 'Invalid NIC'}
        },
        contactNo: {
            maxLength: {value: 12},
            phone: {message: 'Invalid Contact Number'}
        },
    };
};

const initData = {
    checkupDateFromStr: '',
    checkupDateToStr: '',
    patientCode: '',
    nic: '',
    contactNo: '',
    checkupCode: ''
};

const CheckupReportGenerateForm = () => {

    const [checkupForm, setCheckupForm] = useState(initData);
    const dispatch = useDispatch();
    const checkupReportData = useSelector(({checkupReport}) => checkupReport.checkupReport);

    const onCustomValidation = (values) => {
        if (name === 'contactNo' && value.length === 10) {
            values.contactNo = processMobileNumber(value);
        }
        let validate = customValidator(values, getValidations());
        dispatch(Actions.setSearchData({
            isValid: validate.isValid,
            values: values
        }));
        return validate.errors;
    };

    useEffect(() => {
        return (() => {
            dispatch(Actions.onResetSearchData());
        })
    }, []);

    const resetData = () => {
        setCheckupForm(initData);
        dispatch(Actions.onResetSearchData());
    };

    return (
        <>

            <Formik
                enableReinitialize={true}
                initialValues={checkupForm}
                onSubmit={(values, {setSubmitting}) => {
                    setTimeout(() => {
                        setSubmitting(false)
                    }, 200)
                }}
                validateOnChange={true}
                validate={(values) => {
                    return onCustomValidation(values);
                }}
            >
                {({errors, touched, resetForm}) => {
                    return (
                        <Form>
                            <CRow>

                                <CCol sm="12" md="6" lg="3">
                                    <CFormGroup>
                                        <CLabel htmlFor="checkupDateFromStr">Checkup Date
                                            From *</CLabel>

                                        <Field
                                            type="test"
                                            name="checkupDateFromStr"
                                            placeholder={'checkup Date'}
                                            component={FormikDatePicker}
                                        />

                                    </CFormGroup>

                                    <ErrorMessage
                                        name="checkupDateFromStr"
                                        render={(msg) => <div
                                            className={'formik-error-message'}>{msg}</div>}
                                    />

                                </CCol>

                                <CCol sm="12" md="6" lg="3">
                                    <CFormGroup>
                                        <CLabel htmlFor="checkupDateToStr">Checkup Date To *</CLabel>

                                        <Field
                                            type="test"
                                            name="checkupDateToStr"
                                            placeholder={'checkup Date'}
                                            component={FormikDatePicker}
                                        />


                                    </CFormGroup>
                                </CCol>


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
                                        <CLabel htmlFor="patientCode">Patient Code</CLabel>

                                        <Field
                                            type="text"
                                            name="patientCode"
                                            placeholder={'Patient Code'}
                                            className={'form-control'}
                                        />
                                    </CFormGroup>
                                </CCol>


                                <CCol sm="12" md="6" lg="3">
                                    <CFormGroup>
                                        <CLabel htmlFor="nic">Patient NIC</CLabel>

                                        <Field
                                            type="text"
                                            name="nic"
                                            placeholder={'NIC'}
                                            className={'form-control'}
                                        />
                                    </CFormGroup>

                                    <ErrorMessage
                                        name="nic"
                                        render={(msg) => <div
                                            className={'formik-error-message'}>{msg}</div>}
                                    />

                                </CCol>

                                <CCol sm="12" md="6" lg="3">
                                    <CFormGroup>
                                        <CLabel htmlFor="contactNo">Contact No</CLabel>

                                        <Field
                                            type="text"
                                            name="contactNo"
                                            placeholder={'Contact No'}
                                            className={'form-control'}
                                        />
                                    </CFormGroup>

                                    <ErrorMessage
                                        name="contactNo"
                                        render={(msg) => <div
                                            className={'formik-error-message'}>{msg}</div>}
                                    />
                                </CCol>
                            </CRow>

                            <PatientDetailsSelectionMenu/>

                            <CRow>

                                <CCol sm="12" md="6" lg="3">
                                    <CButton
                                        disabled={!checkupReportData.searchData.isValid}
                                        onClick={() => {
                                            let searchRQ = checkupReportData.searchData.values ? checkupReportData.searchData.values : {};
                                            let searchObj = Object.assign({}, searchRQ, {
                                                includeSocialHabitData: checkupReportData.includeSocialHabitData,
                                                includeFamilyHistory: checkupReportData.includeFamilyHistory,
                                                includeDietaryHabits: checkupReportData.includeDietaryHabits,
                                                includePhysicalActivities: checkupReportData.includePhysicalActivities,
                                                includeInstruction: checkupReportData.includeInstruction
                                            });

                                            if (toDate(searchObj.checkupDateFromStr) > toDate(searchObj.checkupDateToStr)) {
                                                showErrorMessage("Invalid Date Range");
                                            } else {
                                                dispatch(Actions.getCheckUpsDetailCSVReport(searchObj)).then(response => {
                                                    let fileName = response.payload;
                                                    // createBlob(fileName);          //this is for download the file from the public url
                                                    dispatch(Actions.downloadCheckUpsByDateDetailCSVReport(fileName));
                                                });
                                            }

                                        }}


                                        color="info"
                                        className="row-button-styles mr-2">
                                        <span><CIcon size={'lg'} name={'cil-arrow-thick-from-top'}
                                                     style={{marginRight: '4px'}}/></span>

                                        Download Report</CButton>

                                    <CButton
                                        onClick={() => {
                                            resetData();
                                            resetForm();
                                        }}
                                        color="warning"
                                        className="row-button-styles mr-2">
                                        <span><CIcon size={'lg'} name={'cil-sync'} style={{marginRight: '4px'}}/></span>

                                        Reset From
                                    </CButton>

                                </CCol>
                            </CRow>
                        </Form>
                    );
                }}
            </Formik>
        </>
    );
};

export default CheckupReportGenerateForm;
