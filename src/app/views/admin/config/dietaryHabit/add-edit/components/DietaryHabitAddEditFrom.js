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
import * as Actions from '../../store/action/dietary.habit.add.edit.action'
import {removeStorageItem} from "../../../../../../../utils/StorageUtils";

const initValues = {
    dietaryHabitID: '',
    dietaryCategoryID: '',
    dietaryHabit: '',
    status: Constants.STATUS_CONST.ACT,
};

const getValidations = () => {
    return {
        dietaryHabit: {
            required: {message: 'Required'},
        },
        dietaryCategoryID: {
            required: {message: 'Required'},
        },
    };
};

const DietaryHabitAddEditFrom = () => {

    const dispatch = useDispatch();
    const [formValues, setFormValues] = useState(initValues);
    const data = useSelector(({dietaryHabit}) => dietaryHabit.dietaryHabitAddEdit);

    useEffect(() => {

        let dietaryHabit = data.dietaryHabit;
        let initData = {
            dietaryHabitID: dietaryHabit.dietaryHabitID ? dietaryHabit.dietaryHabitID : initValues.dietaryHabitID,
            dietaryCategoryID: dietaryHabit.dietaryCategoryID ? dietaryHabit.dietaryCategoryID : initValues.dietaryCategoryID,
            dietaryHabit: dietaryHabit.dietaryHabit ? dietaryHabit.dietaryHabit : initValues.dietaryHabit,
            status: dietaryHabit.status ? dietaryHabit.status : initValues.status,
        };
        setFormValues(initData);

    }, [dispatch, data.dietaryHabit]);

    useEffect(() => {
        return (() => {
            removeStorageItem(Constants.STORAGE.SELECTED_DIETARY_HABIT_ID);
            dispatch(Actions.reset());
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
                                        <CLabel htmlFor="dietaryHabit"
                                                className={'required'}>
                                            Dietary Habit Quiz
                                        </CLabel>

                                        <Field
                                            type="text"
                                            name="dietaryHabit"
                                            placeholder={'Quiz'}
                                            className={getInputFieldClassNames(touched.dietaryHabit, errors.dietaryHabit)}
                                        />

                                    </CFormGroup>

                                    <ErrorMessage
                                        name="dietaryHabit"
                                        render={(msg) => <div
                                            className={'formik-error-message'}>{msg}</div>}
                                    />
                                </CCol>

                                <CCol sm="12" md="6" lg="3">
                                    <CFormGroup>
                                        <CLabel htmlFor="" className={'required'}>Dietary Habit Category</CLabel>

                                        <Field name="dietaryCategoryID"
                                        >
                                            {({
                                                  field, // { name, value, onChange, onBlur }
                                                  form: {touched, errors}, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                                                  meta,
                                              }) => (

                                                <CSelect custom name="dietaryCategoryID" {...field}>
                                                    {
                                                        data &&
                                                        getOptionsListByObjectListForCustomSelect(data.dietaryHabitCategories, "dietaryCategory", "dietaryCategoryID", "dietaryCategoryID", "dietaryCategoryID", true).map((item) => {
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
                                        name="dietaryCategoryID"
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

export default DietaryHabitAddEditFrom;