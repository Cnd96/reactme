import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Constants from "../../../../../../../utils/Constants";
import {CButton, CCard, CCardBody, CCol, CFormGroup, CLabel, CRow, CSelect, CTooltip} from "@coreui/react";
import {Field, Form, Formik} from "formik";
import {getCommonStatusOptions, getOptionsListByObjectListForCustomSelect} from "../../../../../../../utils/FormUtils";
import * as Action from '../../store/actions/index'
import history from "../../../../../../../@history";

const initFormValues = {
    socialHabitName: '',
    socialHabitCategoryID: '',
    status: Constants.STATUS_CONST.ACT
};

let onAddBtnClick = () => {
    history.push({
        pathname: Constants.PAGES.socialHabitsAddEdit
    });
};

const SocialHabitSearch = () => {

    const dispatch = useDispatch();
    const [searchForm, setSearchForm] = useState(initFormValues);
    const data = useSelector(({socialHabit}) => socialHabit.socialHabitSearch);

    useEffect(() => {
        let initData = initFormValues;
        setSearchForm({...initData});
        return (() => {
            onReset();
        })

    }, [dispatch]);


    const onPageSearch = (formData) => {
        dispatch(Action.setSearchData(formData));
    };

    const onReset = () => {
        dispatch(Action.resetSearchData());
        setSearchForm(initFormValues);
    };

    return (
        <div>
            <CRow>
                <CCol xs="12">
                    <CCard>
                        <CCardBody>
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
                                                    <CLabel htmlFor="socialHabitName">Social Habit</CLabel>

                                                    <Field
                                                        type="text"
                                                        name="socialHabitName"
                                                        placeholder={'Social Habit'}
                                                        className={'form-control'}
                                                    />
                                                </CFormGroup>
                                            </CCol>

                                            <CCol sm="12" md="6" lg="3">
                                                <CFormGroup>
                                                    <CLabel htmlFor="socialHabitCategoryID">Category</CLabel>

                                                    <Field name="socialHabitCategoryID"
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
                                            </CCol>

                                            <CCol sm="12" md="6" lg="3">
                                                <CFormGroup>
                                                    <CLabel htmlFor="status">Status</CLabel>

                                                    <Field name="status">
                                                        {({
                                                              field, // { name, value, onChange, onBlur }
                                                              form: {touched, errors}, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                                                              meta,
                                                          }) => (

                                                            <CSelect custom name="status" {...field}>
                                                                {
                                                                    getCommonStatusOptions(true).map((item) => {
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

                                                <CTooltip
                                                    content={'Add new Habit'}
                                                    placement={'left-start'}
                                                >
                                                    <CButton
                                                        onClick={() => {
                                                            onAddBtnClick();
                                                        }}
                                                        color="danger" className="row-button-styles float-right">
                                                        <i className='fa fa-plus'></i>
                                                    </CButton>
                                                </CTooltip>


                                            </CCol>
                                        </CRow>
                                    </Form>
                                )}
                            </Formik>
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>
        </div>
    );
};

export default SocialHabitSearch;
