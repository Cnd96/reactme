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
    physicalActivityCategoryID: '',
    categoryName: '',
    description: '',
    status: Constants.STATUS_CONST.ACT,
};

const getValidations = () => {
    return {
        categoryName: {
            required: {message: 'Required'},
        },

        description: {
            maxLength: {value: 255}
        }
    };
};

const PhysicalActivityCategoryAddEditFrom = () => {
    const dispatch = useDispatch();
    const [formValues, setFormValues] = useState(initValues);
    const data = useSelector(({physicalActivityCategory}) => physicalActivityCategory.physicalActivitiesCategoryAddEdit);

    useEffect(() => {
        let physicalActivityCategory = data.physicalActivityCategory;
        let initData = {
            physicalActivityCategoryID: physicalActivityCategory.physicalActivityCategoryID ? physicalActivityCategory.physicalActivityCategoryID : initValues.physicalActivityCategoryID,
            categoryName: physicalActivityCategory.categoryName ? physicalActivityCategory.categoryName : initValues.categoryName,
            description: physicalActivityCategory.description ? physicalActivityCategory.description : initValues.description,
            status: physicalActivityCategory.status ? physicalActivityCategory.status : initValues.status,
        };
        setFormValues(initData);

    }, [dispatch, data.physicalActivityCategory]);

    useEffect(() => {
        return (() => {
            removeStorageItem(Constants.STORAGE.SELECTED_DIETARY_HABIT_CATEGORY_ID);
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
                                        <CLabel htmlFor="categoryName" className={'required'}>Activity Category</CLabel>

                                        <Field
                                            type="text"
                                            name="categoryName"
                                            placeholder={'Activity Category'}
                                            className={getInputFieldClassNames(touched.categoryName, errors.categoryName)}
                                        />
                                    </CFormGroup>

                                    <ErrorMessage
                                        name="categoryName"
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

export default PhysicalActivityCategoryAddEditFrom;