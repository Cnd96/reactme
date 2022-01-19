import React, {useEffect, useState} from 'react';
import Constants from "../../../../../../../utils/Constants";
import {useDispatch, useSelector} from "react-redux";
import {removeStorageItem} from "../../../../../../../utils/StorageUtils";
import * as Actions from "../../store/action";
import customValidator from "../../../../../../../utils/ValidationUtil";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {CCol, CFormGroup, CLabel, CRow, CSelect} from "@coreui/react";
import {getCommonStatusOptions, getInputFieldClassNames} from "../../../../../../../utils/FormUtils";

const initValues = {
    dietaryCategoryID: '',
    dietaryCategory: '',
    description: '',
    status: Constants.STATUS_CONST.ACT,
};

const getValidations = () => {
    return {
        dietaryCategory: {
            required: {message: 'Required'},
        },

        description: {
            maxLength: {value: 255}
        }
    };
};

const DietaryHabitCategoryAddEditForm = () => {
    const dispatch = useDispatch();
    const [formValues, setFormValues] = useState(initValues);
    const data = useSelector(({dietaryHabitCategory}) => dietaryHabitCategory.dietaryHabitCategoryAddEdit);

    useEffect(() => {
        let dietaryHabitCategory = data.dietaryHabitCategory;
        let initData = {
            dietaryCategoryID: dietaryHabitCategory.dietaryCategoryID ? dietaryHabitCategory.dietaryCategoryID : initValues.dietaryCategoryID,
            dietaryCategory: dietaryHabitCategory.dietaryCategory ? dietaryHabitCategory.dietaryCategory : initValues.dietaryCategory,
            description: dietaryHabitCategory.description ? dietaryHabitCategory.description : initValues.description,
            status: dietaryHabitCategory.status ? dietaryHabitCategory.status : initValues.status,
        };
        setFormValues(initData);

    }, [dispatch, data.dietaryHabitCategory]);

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
                                        <CLabel htmlFor="dietaryCategory" className={'required'}>Dietary
                                            Category</CLabel>

                                        <Field
                                            type="text"
                                            name="dietaryCategory"
                                            placeholder={'Categories'}
                                            className={getInputFieldClassNames(touched.dietaryCategory, errors.dietaryCategory)}
                                        />
                                    </CFormGroup>

                                    <ErrorMessage
                                        name="dietaryCategory"
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

export default DietaryHabitCategoryAddEditForm;