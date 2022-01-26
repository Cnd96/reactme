import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {removeStorageItem} from "../../../../../../../utils/StorageUtils";
import Constants from "../../../../../../../utils/Constants";
import * as Actions from "../../store/action/index";
import customValidator from "../../../../../../../utils/ValidationUtil";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {CCol, CFormGroup, CLabel, CRow, CSelect,CButton,CInputGroup} from "@coreui/react";
import {getCommonStatusOptions, getInputFieldClassNames} from "../../../../../../../utils/FormUtils";
import {getCommaSeparatedVales} from "./SupportFuntions"

const initValues = {
    medicineID: '',
    medicineName: '',
    medicineDose: '',
    medicineDoses: [],
    medicineFrequent: '',
    medicineFrequents: [],
    medicineMealTime: '',
    medicineMealTimes: [],
    trade: '',
    trades: [],
    routeOfAdmin: '',
    status: Constants.STATUS_CONST.ACT,
};

const getValidations = () => {
    return {
        medicineName: {
            required: {message: 'Required'},
        }
    };
};


const MedicineAddEditFrom = () => {

    const dispatch = useDispatch();
    const [formValues, setFormValues] = useState(initValues);
    const data = useSelector(({medicine}) => medicine.medicineAddEdit);


    useEffect(() => {

        let medicine = data.medicine;
        console.log(medicine)
        let initData = {
            medicineID: medicine.medicineID ? medicine.medicineID : initValues.medicineID,
            medicineName: medicine.medicineName ? medicine.medicineName : initValues.medicineName,
            routeOfAdmin: medicine.routeOfAdmin ? medicine.routeOfAdmin : initValues.routeOfAdmin,
            medicineDose: '',
            medicineDoses:medicine.doseDTOS? medicine.doseDTOS.map(d=>d.dose):[],
            medicineFrequent: '',
            medicineFrequents: medicine.frequentDTOS? medicine.frequentDTOS.map(d=>d.frequent):[],
            medicineMealTime: '',
            medicineMealTimes : medicine.mealTimeDTOS? medicine.mealTimeDTOS.map(d=>d.mealTime):[],
            trade: '',
            trades: medicine.tradeDTOS? medicine.tradeDTOS.map(d=>d.tradeName):[],
            status: medicine.status ? medicine.status : initValues.status,
        };
        setFormValues(initData);
    }, [dispatch, data.medicine]);

    useEffect(() => {
        return (() => {
            removeStorageItem(Constants.STORAGE.SELECTED_MEDICINE_ID);
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
                {({errors, touched,setFieldValue}) => {
                    return (
                        <Form>
                            <CRow>

                                <CCol sm="12" md="4" lg="4">
                                    <CFormGroup>
                                        <CLabel htmlFor="medicineName"
                                                className={'required'}>
                                            Medicine Name
                                        </CLabel>

                                        <Field
                                            type="text"
                                            name="medicineName"
                                            placeholder={'Medicine Name'}
                                            className={getInputFieldClassNames(touched.medicineName, errors.medicineName)}
                                        />

                                    </CFormGroup>

                                    <ErrorMessage
                                        name="medicineName"
                                        render={(msg) => <div
                                            className={'formik-error-message'}>{msg}</div>}
                                    />
                                </CCol>

                                <CCol sm="12" md="4" lg="4">
                                    <CFormGroup>
                                        <CLabel htmlFor="routeOfAdmin">
                                            Route of Admin
                                        </CLabel>

                                        <Field
                                            type="text"
                                            name="routeOfAdmin"
                                            placeholder={'Route of Admin'}
                                            className={getInputFieldClassNames(touched.routeOfAdmin, errors.routeOfAdmin)}
                                        />

                                    </CFormGroup>

                                    <ErrorMessage
                                        name="routeOfAdmin"
                                        render={(msg) => <div
                                            className={'formik-error-message'}>{msg}</div>}
                                    />
                                </CCol>

                                <CCol sm="12" md="4" lg="4">

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

                                <CCol sm="12" md="3" lg="3">
                                    <CFormGroup>
                                        <CLabel htmlFor="medicineDose">
                                            Medicine Dose
                                        </CLabel>
                                        <CInputGroup>
                                            <Field
                                                type="text"
                                                name="medicineDose"
                                                placeholder={'eg : 5mg'}
                                                className={getInputFieldClassNames(touched.medicineDose, errors.medicineDose)}
                                            />
                                            <CButton
                                                onClick={()=>{
                                                    let tempData = {... data.formData.values}
                                                    setFieldValue('medicineDose','')
                                                    setFieldValue('medicineDoses',[...tempData.medicineDoses,tempData.medicineDose])
                                                }}
                                                color="success" className="float-right">Add</CButton>
                                        </CInputGroup>
                                        
                                    </CFormGroup>

                                    <ErrorMessage
                                        name="medicineDose"
                                        render={(msg) => <div
                                            className={'formik-error-message'}>{msg}</div>}
                                    />
                                </CCol>

                                <CCol sm="12" md="3" lg="3">
                                    <CFormGroup>
                                        <CLabel htmlFor="medicineFrequent">
                                            Medicine Frequency
                                        </CLabel>

                                        <CInputGroup>
                                            <Field
                                                type="text"
                                                name="medicineFrequent"
                                                placeholder={'eg: Once a day'}
                                                className={getInputFieldClassNames(touched.medicineFrequent, errors.medicineFrequent)}
                                            />
                                            <CButton
                                                onClick={()=>{
                                                    let tempData = {... data.formData.values}
                                                    setFieldValue('medicineFrequent','')
                                                    setFieldValue('medicineFrequents',[...tempData.medicineFrequents,tempData.medicineFrequent])
                                                }}
                                                color="success" className="float-right">Add</CButton>
                                        </CInputGroup>

                                    </CFormGroup>

                                    <ErrorMessage
                                        name="medicineFrequent"
                                        render={(msg) => <div
                                            className={'formik-error-message'}>{msg}</div>}
                                    />
                                </CCol>

                                <CCol sm="12" md="3" lg="3">
                                    <CFormGroup>
                                        <CLabel htmlFor="medicineMealTime">
                                            Medicine Meal Time
                                        </CLabel>
                                        
                                        <CInputGroup>
                                            <Field
                                                type="text"
                                                name="medicineMealTime"
                                                placeholder={'eg: After dinner'}
                                                
                                                className={getInputFieldClassNames(touched.medicineMealTime, errors.medicineMealTime)}
                                            />
                                            <CButton
                                                onClick={()=>{
                                                    let tempData = {... data.formData.values}
                                                    setFieldValue('medicineMealTime','')
                                                    setFieldValue('medicineMealTimes',[...tempData.medicineMealTimes,tempData.medicineMealTime])
                                                }}
                                                color="success" className="float-right">Add</CButton>
                                        </CInputGroup>

                                    </CFormGroup>

                                    <ErrorMessage
                                        name="medicineMealTime"
                                        render={(msg) => <div
                                            className={'formik-error-message'}>{msg}</div>}
                                    />
                                </CCol>

                                <CCol sm="12" md="3" lg="3">
                                    <CFormGroup>
                                        <CLabel htmlFor="trade">
                                            Trade Names
                                        </CLabel>

                                        
                                        <CInputGroup>
                                            <Field
                                                type="text"
                                                name="trade"
                                                placeholder={'eg: Trade 1'}
                                                className={getInputFieldClassNames(touched.trade, errors.trade)}
                                            />
                                            <CButton
                                                onClick={()=>{
                                                    let tempData = {... data.formData.values}
                                                    setFieldValue('trade','')
                                                    setFieldValue('trades',[...tempData.trades,tempData.trade])
                                                }}
                                                color="success" className="float-right">Add</CButton>
                                        </CInputGroup>

                                    </CFormGroup>

                                    <ErrorMessage
                                        name="trade"
                                        render={(msg) => <div
                                            className={'formik-error-message'}>{msg}</div>}
                                    />
                                </CCol>
                                
                                

                                <CCol  sm="3">
                                    <ul  >
                                        {data.formData.values ? 
                                         data.formData.values.medicineDoses.map((medicineDose) => <li htmlFor="medicineDose"  style={{marginBottom:'10px',fontSize:'15px'}} key={medicineDose}>{medicineDose}
                                            <CButton onClick={(e)=>{
                                                e.preventDefault();
                                                e.stopPropagation();
                                                let tempData = {... data.formData.values}
                                                let tempMedicineDoses = [...tempData.medicineDoses];
                                                let tempIndex = tempMedicineDoses.indexOf(medicineDose);
                                                if (tempIndex !== -1) {
                                                    tempMedicineDoses.splice(tempIndex, 1);
                                                }
                                                setFieldValue('medicineDoses',[...tempMedicineDoses])
                                            }} color='danger' style={{marginLeft:'5px'}}>X</CButton>
                                        </li>)
                                        : data.medicine.doseDTOS ? 
                                        data.medicine.doseDTOS.map((medicineDose) => <li htmlFor="dose" style={{marginBottom:'10px',fontSize:'15px'}} key={medicineDose.dose}>{medicineDose.dose} 
                                            <CButton onClick={(e)=>{
                                                e.preventDefault();
                                                e.stopPropagation();
                                                let tempMedicineDoses = [... data.medicine.doseDTOS.map(d=>d.dose)] ;
                                                let tempIndex = tempMedicineDoses.indexOf(medicineDose.dose);
                                                if (tempIndex !== -1) {
                                                    tempMedicineDoses.splice(tempIndex, 1);
                                                }
                                                setFieldValue('medicineDoses',[...tempMedicineDoses])
                                            }} color='danger' style={{marginLeft:'5px'}}>X</CButton>
                                        </li>)
                                        :''}
                                    </ul>
                                </CCol>

                                <CCol  sm="3">
                                    <ul  >
                                        {data.formData.values ? 
                                         data.formData.values.medicineFrequents.map((medicineFrequent) => <li htmlFor="medicineDose"  style={{marginBottom:'10px',fontSize:'15px'}} key={medicineFrequent}>{medicineFrequent}
                                            <CButton onClick={(e)=>{
                                                e.preventDefault();
                                                e.stopPropagation();
                                                let tempData = {... data.formData.values}
                                                let tempMedicineFrequents = [...tempData.medicineFrequents];
                                                let tempIndex = tempMedicineFrequents.indexOf(medicineFrequent);
                                                if (tempIndex !== -1) {
                                                    tempMedicineFrequents.splice(tempIndex, 1);
                                                }
                                                setFieldValue('medicineFrequents',[...tempMedicineFrequents])
                                            }} color='danger' style={{marginLeft:'5px'}}>X</CButton>
                                        </li>)
                                        : data.medicine.frequentDTOS ? 
                                        data.medicine.frequentDTOS.map((medicineFrequent) => <li htmlFor="dose" style={{marginBottom:'10px',fontSize:'15px'}} key={medicineFrequent.frequent}>{medicineFrequent.frequent} 
                                            <CButton onClick={(e)=>{
                                                e.preventDefault();
                                                e.stopPropagation();
                                                let tempMedicineFrequents = [... data.medicine.frequentDTOS.map(d=>d.frequent)] ;
                                                let tempIndex = tempMedicineFrequents.indexOf(medicineFrequent.frequent);
                                                if (tempIndex !== -1) {
                                                    tempMedicineFrequents.splice(tempIndex, 1);
                                                }
                                                setFieldValue('medicineFrequents',[...tempMedicineFrequents])
                                            }} color='danger' style={{marginLeft:'5px'}}>X</CButton>
                                        </li>)
                                        :''}
                                    </ul>
                                </CCol>

                                <CCol  sm="3">
                                    <ul  >
                                        {data.formData.values ? 
                                         data.formData.values.medicineMealTimes.map((medicineMealTime) => <li htmlFor="medicineMealTime"  style={{marginBottom:'10px',fontSize:'15px'}} key={medicineMealTime}>{medicineMealTime}
                                            <CButton onClick={(e)=>{
                                                e.preventDefault();
                                                e.stopPropagation();
                                                let tempData = {... data.formData.values}
                                                let tempMedicineMealTimes = [...tempData.medicineMealTimes];
                                                let tempIndex = tempMedicineMealTimes.indexOf(medicineMealTime);
                                                if (tempIndex !== -1) {
                                                    tempMedicineMealTimes.splice(tempIndex, 1);
                                                }
                                                setFieldValue('medicineMealTimes',[...tempMedicineMealTimes])
                                            }} color='danger' style={{marginLeft:'5px'}}>X</CButton>
                                        </li>)
                                        : data.medicine.mealTimeDTOS ? 
                                        data.medicine.mealTimeDTOS.map((medicineMealTime) => <li htmlFor="dose" style={{marginBottom:'10px',fontSize:'15px'}} key={medicineMealTime.mealTime}>{medicineMealTime.mealTime} 
                                            <CButton onClick={(e)=>{
                                                e.preventDefault();
                                                e.stopPropagation();
                                                let tempMedicineMealTimes = [... data.medicine.mealTimeDTOS.map(d=>d.mealTime)] ;
                                                let tempIndex = tempMedicineMealTimes.indexOf(medicineMealTime.mealTime);
                                                if (tempIndex !== -1) {
                                                    tempMedicineMealTimes.splice(tempIndex, 1);
                                                }
                                                setFieldValue('medicineMealTimes',[...tempMedicineMealTimes])
                                            }} color='danger' style={{marginLeft:'5px'}}>X</CButton>
                                        </li>)
                                        :''}
                                    </ul>
                                </CCol>

                                <CCol  sm="3">
                                    <ul  >
                                        {data.formData.values ? 
                                         data.formData.values.trades.map((trade) => <li htmlFor="trade"  style={{marginBottom:'10px',fontSize:'15px'}} key={trade}>{trade}
                                            <CButton onClick={(e)=>{
                                                e.preventDefault();
                                                e.stopPropagation();
                                                let tempData = {... data.formData.values}
                                                let temptrades = [...tempData.trades];
                                                let tempIndex = temptrades.indexOf(trade);
                                                if (tempIndex !== -1) {
                                                    temptrades.splice(tempIndex, 1);
                                                }
                                                setFieldValue('trades',[...temptrades])
                                            }} color='danger' style={{marginLeft:'5px'}}>X</CButton>
                                        </li>)
                                        : data.medicine.tradeDTOS ? 
                                        data.medicine.tradeDTOS.map((trade) => <li htmlFor="dose" style={{marginBottom:'10px',fontSize:'15px'}} key={trade.tradeName}>{trade.tradeName} 
                                            <CButton onClick={(e)=>{
                                                e.preventDefault();
                                                e.stopPropagation();
                                                let temptrades = [... data.medicine.tradeDTOS.map(d=>d.tradeName)] ;
                                                let tempIndex = temptrades.indexOf(trade.tradeName);
                                                if (tempIndex !== -1) {
                                                    temptrades.splice(tempIndex, 1);
                                                }
                                                setFieldValue('trades',[...temptrades])
                                            }} color='danger' style={{marginLeft:'5px'}}>X</CButton>
                                        </li>)
                                        :''}
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

export default MedicineAddEditFrom;