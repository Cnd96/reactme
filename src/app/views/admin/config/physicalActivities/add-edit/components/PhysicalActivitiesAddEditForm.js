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
import * as Actions from '../../store/action/physical.activities.add.edit.actions'
import {removeStorageItem} from "../../../../../../../utils/StorageUtils";

const initValues = {
    physicalActivityID: '',
    physicalActivityCategoryID: '',
    activityName: '',
    status: Constants.STATUS_CONST.ACT,
};

const getValidations = () => {
    return {
        activityName: {
            required: {message: 'Required'},
        },
        physicalActivityCategoryID: {
            required: {message: 'Required'},
        },
    };
};

const PhysicalActivitiesAddEditForm = () => {

    const dispatch = useDispatch();
    const [formValues, setFormValues] = useState(initValues);
    const data = useSelector(({physicalActivity}) => physicalActivity.physicalActivityAddEdit);

    useEffect(() => {

        let physicalActivity = data.physicalActivity;
        let initData = {
            physicalActivityID: physicalActivity.physicalActivityID ? physicalActivity.physicalActivityID : initValues.physicalActivityID,
            physicalActivityCategoryID: physicalActivity.physicalActivityCategoryID ? physicalActivity.physicalActivityCategoryID : initValues.physicalActivityCategoryID,
            activityName: physicalActivity.activityName ? physicalActivity.activityName : initValues.activityName,
            status: physicalActivity.status ? physicalActivity.status : initValues.status,
        };
        setFormValues(initData);

    }, [dispatch, data.physicalActivity]);

    useEffect(() => {
        return (() => {
            removeStorageItem(Constants.STORAGE.SELECTED_PHYSICAL_ACTIVITY_ID);
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
                                        <CLabel htmlFor="activityName" className={'required'}>
                                            Activity Name
                                        </CLabel>

                                        <Field
                                            type="text"
                                            name="activityName"
                                            placeholder={'Activity Name'}
                                            className={getInputFieldClassNames(touched.activityName, errors.activityName)}
                                        />

                                    </CFormGroup>

                                    <ErrorMessage
                                        name="activityName"
                                        render={(msg) => <div
                                            className={'formik-error-message'}>{msg}</div>}
                                    />
                                </CCol>

                                <CCol sm="12" md="6" lg="3">
                                    <CFormGroup>
                                        <CLabel htmlFor="" className={'required'}>Activity Category</CLabel>

                                        <Field name="physicalActivityCategoryID"
                                        >
                                            {({
                                                  field, // { name, value, onChange, onBlur }
                                                  form: {touched, errors}, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                                                  meta,
                                              }) => (

                                                <CSelect custom name="physicalActivityCategoryID" {...field}>
                                                    {
                                                        data &&
                                                        getOptionsListByObjectListForCustomSelect(data.physicalActivityCategories, "categoryName", "physicalActivityCategoryID", "physicalActivityCategoryID", "physicalActivityCategoryID", true).map((item) => {
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
                                        name="physicalActivityCategoryID"
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

export default PhysicalActivitiesAddEditForm;