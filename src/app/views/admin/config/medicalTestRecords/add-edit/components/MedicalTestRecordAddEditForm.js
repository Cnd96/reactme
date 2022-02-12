
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
        console.log(initData)
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

                                <CCol sm="12" md="6" lg="4">
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

                                <CCol sm="12" md="6" lg="4">
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

                                <CCol sm="12" md="6" lg="4">
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
                                
                                <CCol sm="12" md="6" lg="6">
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
                                        <Field
                                            type="text"
                                            name="rangeForm"
                                            placeholder={'Range From'}
                                            className={getInputFieldClassNames(touched.measurementUnit, errors.measurementUnit)}
                                        />
                                        <Field
                                            type="text"
                                            name="rangeTo"
                                            placeholder={'Range To'}
                                            className={getInputFieldClassNames(touched.measurementUnit, errors.measurementUnit)}
                                        />
                                         <CButton
                                            onClick={()=>{
                                                let tempData = {... data.formData.values}
                                                setFieldValue('measurementUnit','')
                                                setFieldValue('rangeForm','')
                                                setFieldValue('rangeTo','')
                                                setFieldValue('measurementUnits',[...tempData.measurementUnits,{measurementUnit:tempData.measurementUnit,rangeFrom:tempData.rangeForm,rangeTo:tempData.rangeTo}])
                                            }}
                                            color="success" className="float-right">Add</CButton>
                                        </CInputGroup>
                                    </CFormGroup>
                                </CCol>
                            </CRow>

                            {data.formData.values ? 
                                data.formData.values.measurementUnits.map((m) => 
                                <div key={m.measurementUnit}>
                                    <CRow>
                                        <CCol  sm="2"><CLabel htmlFor="measurementUnit">{m.measurementUnit}</CLabel></CCol>
                                        <CCol  sm="2"><CLabel htmlFor="rangeFrom">{m.rangeFrom}</CLabel></CCol>
                                        <CCol  sm="2"><CLabel htmlFor="rangeTo">{m.rangeTo}</CLabel></CCol>
                                        <CButton onClick={(e)=>{
                                            e.preventDefault();
                                            e.stopPropagation();
                                            let tempData = {... data.formData.values}
                                            let tempMeasurementUnits = [...tempData.measurementUnits];
                                            let tempIndex = tempMeasurementUnits.map(function(e) { return e.measurementUnit; }).indexOf(m.measurementUnit);
                                            if (tempIndex !== -1) {
                                                tempMeasurementUnits.splice(tempIndex, 1);
                                                }
                                            setFieldValue('measurementUnits',[...tempMeasurementUnits])
                                        }} color='danger' style={{marginLeft:'5px'}}>X</CButton>
                                    </CRow> 
                                    <br></br>
                                </div>)
                                
                            :data.medicalTestRecord.measurementUnits ? 
                            data.medicalTestRecord.measurementUnits.map((m) => 
                                <div key={m.measurementUnit}>
                                    <CRow>
                                        <CCol  sm="2"><CLabel htmlFor="measurementUnit">{m.measurementUnit}</CLabel></CCol>
                                        <CCol  sm="2"><CLabel htmlFor="rangeFrom">{m.rangeFrom}</CLabel></CCol>
                                        <CCol  sm="2"><CLabel htmlFor="rangeTo">{m.rangeTo}</CLabel></CCol>
                                        <CButton onClick={(e)=>{
                                                e.preventDefault();
                                                e.stopPropagation();
                                                let tempData = {... data.medicalTestRecord}
                                                console.log("tt ",tempData)
                                                let tempMeasurementUnits = [...tempData.measurementUnits];
                                                let tempIndex = tempMeasurementUnits.map(function(e) { return e.measurementUnit; }).indexOf(m.measurementUnit);
                                                if (tempIndex !== -1) {
                                                    tempMeasurementUnits.splice(tempIndex, 1);
                                                }
                                                setFieldValue('measurementUnits',[...tempMeasurementUnits])
                                            }} color='danger' style={{marginLeft:'5px'}}>X</CButton>
                                    </CRow> 
                                    <br></br>
                                </div>)
                            :''}
                            {/* <CRow> */}
                                
                                {/* <CCol  sm="4">
                                    <ul  >
                                        {data.formData.values ? 
                                        data.formData.values.measurementUnits.map((m) => <li htmlFor="measurementUnit"  style={{marginBottom:'10px',fontSize:'15px'}} key={m.unit}>{m.unit}
                                           
                                            <Field
                                                type="text"
                                                name="m.rangeFrom"
                                                placeholder={'Measurement Name'}
                                                className={getInputFieldClassNames(touched.measurementName, errors.measurementName)}
                                            />
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
                                </CCol> */}
                            {/* </CRow> */}
                        </Form>
                    );
                }}
            </Formik>
        </>
    );
};

export default MedicalTestRecordAddEditForm;