import React, {useEffect, useState} from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import {CCol, CFormGroup, CLabel, CRow, CSelect} from "@coreui/react";
import {
    getCommonStatusOptions,
    getInputFieldClassNames,
    getOptionsListByObjectListForCustomSelect
} from "../../../../../../../utils/FormUtils";
import Constants from "../../../../../../../utils/Constants";
import customValidator from "../../../../../../../utils/ValidationUtil";
import {useDispatch, useSelector} from "react-redux";
import * as Actions from '../../store/actions/social.habit.app.add.edit.action'
import {removeStorageItem} from "../../../../../../../utils/StorageUtils";

const initValues = {
    socialHabitID: '',
    socialHabitCategoryID: '',
    socialHabitName: '',
    status: Constants.STATUS_CONST.ACT,
};

const getValidations = () => {
    return {
        socialHabitName: {
            required: {message: 'Required'},
        },
        socialHabitCategoryID: {
            required: {message: 'Required'},
        },
    };
};

const SocialHabitAddEditBase = () => {

    const dispatch = useDispatch();
    const [formValues, setFormValues] = useState(initValues);
    const data = useSelector(({socialHabit}) => socialHabit.socialHabitAddEdit);

    useEffect(() => {

        let socialHabit = data.socialHabit;
        let initData = {
            socialHabitID: socialHabit.socialHabitID ? socialHabit.socialHabitID : initValues.socialHabitID,
            socialHabitCategoryID: socialHabit.socialHabitCategoryID ? socialHabit.socialHabitCategoryID : initValues.socialHabitCategoryID,
            socialHabitName: socialHabit.socialHabitName ? socialHabit.socialHabitName : initValues.socialHabitName,
            status: socialHabit.status ? socialHabit.status : initValues.status,
        };
        setFormValues(initData);

    }, [dispatch, data.socialHabit]);

    useEffect(() => {
        return (() => {
            removeStorageItem(Constants.STORAGE.SELECTED_SOCIAL_HABIT_ID);
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
                                        <CLabel htmlFor="" className={'required'}>Habit Category</CLabel>

                                        <Field name="socialHabitCategoryID"
                                               className={getInputFieldClassNames(touched.status, errors.status)}
                                        >
                                            {({
                                                  field, // { name, value, onChange, onBlur }
                                                  form: {touched, errors}, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                                                  meta,
                                              }) => (

                                                <CSelect custom name="socialHabitCategoryID" {...field}>
                                                    {
                                                        data &&
                                                        getOptionsListByObjectListForCustomSelect(data.socialHabitCategories, "categoryName", "socialHabitCategoryID", "socialHabitCategoryID", "socialHabitCategoryID", true).map((item) => {
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
                                        name="socialHabitCategoryID"
                                        render={(msg) => <div
                                            className={'formik-error-message'}>{msg}</div>}
                                    />
                                </CCol>

                                <CCol sm="12" md="6" lg="3">
                                    <CFormGroup>
                                        <CLabel htmlFor="" className={'required'}>Social Habit Name</CLabel>

                                        <Field
                                            type="text"
                                            name="socialHabitName"
                                            placeholder={'Social Habit Name'}
                                            className={getInputFieldClassNames(touched.socialHabitName, errors.socialHabitName)}
                                        />
                                    </CFormGroup>

                                    <ErrorMessage
                                        name="socialHabitName"
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

export default SocialHabitAddEditBase;