import React, {useEffect, useState} from 'react';
import Constants from "../../../../../../../utils/Constants";
import {useDispatch, useSelector} from "react-redux";
import {removeStorageItem} from "../../../../../../../utils/StorageUtils";
import * as Actions from "../../store/actions";
import customValidator from "../../../../../../../utils/ValidationUtil";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {CCol, CFormGroup, CLabel, CRow, CSelect} from "@coreui/react";
import {getCommonStatusOptions, getInputFieldClassNames} from "../../../../../../../utils/FormUtils";

const initValues = {
    prescriptionTemplateID: '',
    prescriptionTemplate: '',
    description: '',
    status: Constants.STATUS_CONST.ACT,
};

const getValidations = () => {
    return {
        prescriptionTemplate: {
            required: {message: 'Required'},
        },
    };
};


const PrescriptionTemplateAddEditForm = () => {
    const dispatch = useDispatch();
    const [formValues, setFormValues] = useState(initValues);
    const data = useSelector(({prescriptionTemplate}) => prescriptionTemplate.prescriptionTemplateAddEdit);

    useEffect(() => {
        let prescriptionTemplate = data.prescriptionTemplate;
        let initData = {
            prescriptionTemplateID: prescriptionTemplate.prescriptionTemplateID ? prescriptionTemplate.prescriptionTemplateID : initValues.prescriptionTemplateID,
            prescriptionTemplate: prescriptionTemplate.prescriptionTemplate ? prescriptionTemplate.prescriptionTemplate : initValues.prescriptionTemplate,
            description: prescriptionTemplate.description ? prescriptionTemplate.description : initValues.description,
            status: prescriptionTemplate.status ? prescriptionTemplate.status : Constants.STATUS_CONST.ACT,
        };
        setFormValues(initData);

    }, [dispatch, data.prescriptionTemplate]);

    useEffect(() => {
        return (() => {
            removeStorageItem(Constants.STORAGE.SELECTED_PRESCRIPTION_TEMPLATE_ID);
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
                                        <CLabel htmlFor="prescriptionTemplate" className={'required'}>Template
                                            Name</CLabel>

                                        <Field
                                            type="text"
                                            name="prescriptionTemplate"
                                            placeholder={'Template Name'}
                                            className={getInputFieldClassNames(touched.prescriptionTemplate, errors.prescriptionTemplate)}
                                        />
                                    </CFormGroup>

                                    <ErrorMessage
                                        name="prescriptionTemplate"
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

export default PrescriptionTemplateAddEditForm;