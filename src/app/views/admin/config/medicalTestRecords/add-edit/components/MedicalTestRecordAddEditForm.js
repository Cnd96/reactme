
import React, {useEffect, useState} from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import {CCol, CFormGroup, CLabel, CRow, CSelect, CButton,CInputGroup} from "@coreui/react";
import {
    getCommonStatusOptions,
    getInputFieldClassNames,
    getOptionsListByObjectListForCustomSelect
} from "../../../../../../../utils/FormUtils";
import {useDispatch, useSelector} from "react-redux";
import {removeStorageItem} from "../../../../../../../utils/StorageUtils";
import Constants from "../../../../../../../utils/Constants";
import * as Actions from "../../store/actions/index";
import customValidator from "../../../../../../../utils/ValidationUtil";

const initValues = {
    medicalTestRecordID: '',
    medicalTestTypeID: '',
    measurementName: '',
    measurementUnit:'',
    measurementUnits:[],
    rangeForm: '',
    rangeTo: '',
    status: Constants.STATUS_CONST.ACT,
};

const getValidations = () => {
    return {
        medicalTestTypeID: {
            required: {message: 'Required'},
        },

        measurementName: {
            required: {message: 'Required'},
        },

    };
};

const MedicalTestRecordAddEditForm = () => {

    const dispatch = useDispatch();
    const [formValues, setFormValues] = useState(initValues);
    const data = useSelector(({medicalTestRecords}) => medicalTestRecords.medicalTestRecordAddEdit);

    useEffect(() => {

        let medicalTestRecord = data.medicalTestRecord;
        let initData = {
            medicalTestRecordID: medicalTestRecord.medicalTestRecordID ? medicalTestRecord.medicalTestRecordID : initValues.medicalTestRecordID,
            medicalTestTypeID: medicalTestRecord.medicalTestTypeID ? medicalTestRecord.medicalTestTypeID : initValues.medicalTestTypeID,
            measurementName: medicalTestRecord.measurementName ? medicalTestRecord.measurementName : initValues.measurementName,
            measurementUnits: medicalTestRecord.measurementUnits ? medicalTestRecord.measurementUnits : initValues.measurementUnits,
            measurementUnit: medicalTestRecord.measurementUnit ? medicalTestRecord.measurementUnit : initValues.measurementUnit,
            rangeForm: medicalTestRecord.rangeForm ? medicalTestRecord.rangeForm : initValues.rangeForm,
            rangeTo: medicalTestRecord.rangeTo ? medicalTestRecord.rangeTo : initValues.rangeTo,
            status: medicalTestRecord.status ? medicalTestRecord.status : initValues.status,
            deleteMeasurementUnits:[]
        };
        setFormValues(initData);
    }, [dispatch, data.medicalTestRecord]);

    useEffect(() => {
        return (() => {
            removeStorageItem(Constants.STORAGE.SELECTED_MEDICAL_TEST_RECORD_ID);
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
                {({errors, touched,setFieldValue}) => {
                    return (
                        <Form>
                            <CRow>

                                <CCol sm="12" md="6" lg="3">
                                    <CFormGroup>
                                        <CLabel htmlFor="" className={'required'}>Medical Test Type</CLabel>
                                        <Field name="medicalTestTypeID"
                                               className={getInputFieldClassNames(touched.status, errors.status)}
                                        >
                                            {({
                                                  field, // { name, value, onChange, onBlur }
                                                  form: {touched, errors}, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                                                  meta,
                                              }) => (

                                                <CSelect custom name="medicalTestTypeID" {...field}>
                                                    {
                                                        data &&
                                                        getOptionsListByObjectListForCustomSelect(data.medicalTestTypes, "testType", "testType", "medicalTestTypeID", "medicalTestTypeID", true).map((item) => {
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
                                        name="medicalTestTypeID"
                                        render={(msg) => <div
                                            className={'formik-error-message'}>{msg}</div>}
                                    />
                                </CCol>

                                <CCol sm="12" md="6" lg="3">
                                    <CFormGroup>
                                        <CLabel htmlFor="measurementName" className={'required'}>Measurement
                                            Name</CLabel>

                                        <Field
                                            type="text"
                                            name="measurementName"
                                            placeholder={'Measurement Name'}
                                            className={getInputFieldClassNames(touched.measurementName, errors.measurementName)}
                                        />
                                    </CFormGroup>

                                    <ErrorMessage
                                        name="measurementName"
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
                                
                                <CCol sm="12" md="6" lg="3">
                                    <CFormGroup>
                                        <CLabel htmlFor="measurementUnit">Measurement
                                            Units</CLabel>

                                        
                                        <CInputGroup>
                                        <Field
                                            type="text"
                                            name="measurementUnit"
                                            placeholder={'Measurement Unit'}
                                            className={getInputFieldClassNames(touched.measurementUnit, errors.measurementUnit)}
                                        />
                                         <CButton
                                            onClick={()=>{
                                                let tempData = {... data.formData.values}
                                                setFieldValue('measurementUnit','')
                                                setFieldValue('measurementUnits',[...tempData.measurementUnits,tempData.measurementUnit])
                                            }}
                                            color="success" className="float-right">Add</CButton>
                                        </CInputGroup>
                                    </CFormGroup>
                                </CCol>
                            </CRow>
                            <CRow>
                                <CCol  sm="3"></CCol>
                                <CCol  sm="3"></CCol>
                                <CCol  sm="3"></CCol>
                                <CCol  sm="3">
                                    <ul  >
                                        {data.formData.values ? 
                                        data.formData.values.measurementUnits.map((measurementUnit) => <li htmlFor="measurementUnit"  style={{marginBottom:'10px',fontSize:'15px'}} key={measurementUnit}>{measurementUnit}
                                            <CButton onClick={(e)=>{
                                                e.preventDefault();
                                                e.stopPropagation();
                                                let tempData = {... data.formData.values}
                                                let tempMeasurementUnits = [...tempData.measurementUnits];
                                                let tempIndex = tempMeasurementUnits.indexOf(measurementUnit);
                                                if (tempIndex !== -1) {
                                                    tempMeasurementUnits.splice(tempIndex, 1);
                                                }
                                                setFieldValue('measurementUnits',[...tempMeasurementUnits])
                                            }} color='danger' style={{marginLeft:'5px'}}>X</CButton>
                                        </li>):
                                        data.medicalTestRecord.measurementUnits ? 
                                        data.medicalTestRecord.measurementUnits.map((measurementUnit) => <li htmlFor="measurementUnit" style={{marginBottom:'10px',fontSize:'15px'}} key={measurementUnit}>{measurementUnit} 
                                            <CButton onClick={(e)=>{
                                                e.preventDefault();
                                                e.stopPropagation();
                                                let tempData = {... data.medicalTestRecord}
                                                let tempMeasurementUnits = [...tempData.measurementUnits];
                                                let tempIndex = tempMeasurementUnits.indexOf(measurementUnit);
                                                if (tempIndex !== -1) {
                                                    tempMeasurementUnits.splice(tempIndex, 1);
                                                }
                                                setFieldValue('measurementUnits',[...tempMeasurementUnits])
                                            }} color='danger' style={{marginLeft:'5px'}}>X</CButton>
                                        </li>):''}
                                    </ul>
                                </CCol>
                            </CRow>
                        </Form>
                    );
                }}
            </Formik>
        </>
    );
};

export default MedicalTestRecordAddEditForm;