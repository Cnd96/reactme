import React, {useEffect, useState} from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import {CCol, CFormGroup, CLabel, CRow, CSelect} from "@coreui/react";
import {getCommonStatusOptions, getInputFieldClassNames} from "../../../../../../../utils/FormUtils";
import {useDispatch, useSelector} from "react-redux";
import {removeStorageItem} from "../../../../../../../utils/StorageUtils";
import Constants from "../../../../../../../utils/Constants";
import * as Actions from "../../store/actions/index";
import customValidator from "../../../../../../../utils/ValidationUtil";

const initValues = {
    medicalTestTypeID: '',
    testType: '',
    description: '',
    status: Constants.STATUS_CONST.ACT,
};

const getValidations = () => {
    return {
        testType: {
            required: {message: 'Required'},
        },

        description: {
            maxLength: {value: 255}
        }

    };
};

const MedicalTestTypeAddEditForm = () => {

    const dispatch = useDispatch();
    const [formValues, setFormValues] = useState(initValues);
    const data = useSelector(({medicalTestTypes}) => medicalTestTypes.medicalTestTypeAddEdit);

    useEffect(() => {

        let medicalTestType = data.medicalTestType;
        let initData = {
            medicalTestTypeID: medicalTestType.medicalTestTypeID ? medicalTestType.medicalTestTypeID : initValues.medicalTestTypeID,
            testType: medicalTestType.testType ? medicalTestType.testType : initValues.testType,
            description: medicalTestType.description ? medicalTestType.description : initValues.description,
            status: medicalTestType.status ? medicalTestType.status : initValues.status,
        };
        setFormValues(initData);

    }, [dispatch, data.medicalTestType]);

    useEffect(() => {
        return (() => {
            removeStorageItem(Constants.STORAGE.SELECTED_MEDICAL_TEST_TYPE_ID);
            dispatch(Actions.onFormReset());
        })
    }, []);

    const onCustomValidation = (values) => {

        let validate = customValidator(values, getValidations());
        dispatch(Actions.onFormChange(
            {
                isValid: validate.isValid,
                values: values
            }));
        return validate.errors;
    };

    return (
        <>
            <Formik
                enableReinitialize={true}
                initialValues={formValues}
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
                {({errors, touched}) => {
                    return (
                        <Form>
                            <CRow>

                                <CCol sm="12" md="6" lg="3">
                                    <CFormGroup>
                                        <CLabel htmlFor="testType" className={'required'}>Medical Test Type</CLabel>

                                        <Field
                                            type="text"
                                            name="testType"
                                            placeholder={'Medical Test Type'}
                                            className={getInputFieldClassNames(touched.testType, errors.testType)}
                                        />
                                    </CFormGroup>

                                    <ErrorMessage
                                        name="testType"
                                        render={(msg) => <div
                                            className={'formik-error-message'}>{msg}</div>}
                                    />
                                </CCol>

                                <CCol sm="12" md="6" lg="3">
                                    <CFormGroup>
                                        <CLabel htmlFor="description">Description</CLabel>

                                        <Field
                                            type="text"
                                            name="description"
                                            placeholder={'Description'}
                                            className={getInputFieldClassNames(touched.description, errors.description)}
                                        />
                                    </CFormGroup>

                                    <ErrorMessage
                                        name="description"
                                        render={(msg) => <div
                                            className={'formik-error-message'}>{msg}</div>}
                                    />
                                </CCol>

                                <CCol sm="12" md="6" lg="3">

                                    <CFormGroup>
                                        <CLabel htmlFor="status" className={'required'}>Status</CLabel>

                                        <Field name="status"
                                               className={getInputFieldClassNames(touched.status, errors.status)}
                                        >
                                            {({
                                                  field, // { name, value, onChange, onBlur }
                                                  form: {touched, errors}, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                                                  meta,
                                              }) => (

                                                <CSelect custom name="status" {...field}>
                                                    {
                                                        getCommonStatusOptions(false).map((item) => {
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
                                    <ErrorMessage
                                        name="status"
                                        render={(msg) => <div
                                            className={'formik-error-message'}>{msg}</div>}
                                    />
                                </CCol>

                            </CRow>
                        </Form>
                    );
                }}
            </Formik>
        </>
    );
};

export default MedicalTestTypeAddEditForm;