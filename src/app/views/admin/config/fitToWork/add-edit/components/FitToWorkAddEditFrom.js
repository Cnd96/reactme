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
    fitToWorkID: '',
    category: '',
    status: Constants.STATUS_CONST.ACT,
};

const getValidations = () => {
    return {
        category: {
            required: {message: 'Required'},
        },
    };
};

const FitToWorkAddEditFrom = () => {
    const dispatch = useDispatch();
    const [formValues, setFormValues] = useState(initValues);
    const data = useSelector(({fitToWork}) => fitToWork.fitToWorkAddEdit);

    useEffect(() => {

        let fitToWork = data.fitToWork;
        let initData = {
            fitToWorkID: fitToWork.fitToWorkID ? fitToWork.fitToWorkID : initValues.fitToWorkID,
            category: fitToWork.category ? fitToWork.category : initValues.category,
            status: fitToWork.status ? fitToWork.status : initValues.status,
        };
        setFormValues(initData);

    }, [dispatch, data.fitToWork]);

    useEffect(() => {
        return (() => {
            removeStorageItem(Constants.STORAGE.SELECTED_FOLLOW_UP_ID);
            dispatch(Actions.onFormReset());
            dispatch(Actions.onResetSearchData());
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
                                        <CLabel htmlFor="category" className={'required'}>Fit To Work Category</CLabel>

                                        <Field
                                            type="text"
                                            name="category"
                                            placeholder={'Category'}
                                            className={getInputFieldClassNames(touched.category, errors.category)}
                                        />
                                    </CFormGroup>

                                    <ErrorMessage
                                        name="category"
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

export default FitToWorkAddEditFrom;