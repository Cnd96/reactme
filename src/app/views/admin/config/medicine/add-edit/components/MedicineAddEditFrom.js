import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {removeStorageItem} from "../../../../../../../utils/StorageUtils";
import Constants from "../../../../../../../utils/Constants";
import * as Actions from "../../store/action/index";
import customValidator from "../../../../../../../utils/ValidationUtil";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {CCol, CFormGroup, CLabel, CRow, CSelect} from "@coreui/react";
import {getCommonStatusOptions, getInputFieldClassNames} from "../../../../../../../utils/FormUtils";
import {getCommaSeparatedVales} from "./SupportFuntions"

const initValues = {
    medicineID: '',
    medicineName: '',
    medicineDose: '',
    medicineFrequent: '',
    medicineMealTime: '',
    trade: '',
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

        let initData = {
            medicineID: medicine.medicineID ? medicine.medicineID : initValues.medicineID,
            medicineName: medicine.medicineName ? medicine.medicineName : initValues.medicineName,
            medicineDose: getCommaSeparatedVales(medicine.doseDTOS ? medicine.doseDTOS : [], 'dose'),
            medicineFrequent: getCommaSeparatedVales(medicine.frequentDTOS ? medicine.frequentDTOS : [], 'frequent'),
            medicineMealTime: getCommaSeparatedVales(medicine.mealTimeDTOS ? medicine.mealTimeDTOS : [], 'mealTime'),
            trade: getCommaSeparatedVales(medicine.tradeDTOS ? medicine.tradeDTOS : [], 'tradeName'),
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
                {({errors, touched}) => {
                    return (
                        <Form>
                            <CRow>

                                <CCol sm="12" md="6" lg="6">
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

                                <CCol sm="12" md="6" lg="6">
                                    <CFormGroup>
                                        <CLabel htmlFor="medicineDose">
                                            Medicine Dose
                                        </CLabel>

                                        <Field
                                            type="text"
                                            name="medicineDose"
                                            placeholder={'eg : 5mg, 1g, 2g  separate by comma'}
                                            className={getInputFieldClassNames(touched.medicineDose, errors.medicineDose)}
                                        />

                                    </CFormGroup>

                                    <ErrorMessage
                                        name="medicineDose"
                                        render={(msg) => <div
                                            className={'formik-error-message'}>{msg}</div>}
                                    />
                                </CCol>


                                <CCol sm="12" md="6" lg="6">
                                    <CFormGroup>
                                        <CLabel htmlFor="medicineFrequent">
                                            Medicine Frequent
                                        </CLabel>

                                        <Field
                                            type="text"
                                            name="medicineFrequent"
                                            placeholder={'eg: Once a day, Twice a Day  separated by comma '}
                                            className={getInputFieldClassNames(touched.medicineFrequent, errors.medicineFrequent)}
                                        />

                                    </CFormGroup>

                                    <ErrorMessage
                                        name="medicineFrequent"
                                        render={(msg) => <div
                                            className={'formik-error-message'}>{msg}</div>}
                                    />
                                </CCol>

                                <CCol sm="12" md="6" lg="6">
                                    <CFormGroup>
                                        <CLabel htmlFor="medicineMealTime">
                                            Medicine Meal Time
                                        </CLabel>

                                        <Field
                                            type="text"
                                            name="medicineMealTime"
                                            placeholder={'eg: After dinner, Before dinner separated by comma'}
                                            className={getInputFieldClassNames(touched.medicineMealTime, errors.medicineMealTime)}
                                        />

                                    </CFormGroup>

                                    <ErrorMessage
                                        name="medicineMealTime"
                                        render={(msg) => <div
                                            className={'formik-error-message'}>{msg}</div>}
                                    />
                                </CCol>


                                <CCol sm="12" md="6" lg="6">
                                    <CFormGroup>
                                        <CLabel htmlFor="trade">
                                            Trade
                                        </CLabel>

                                        <Field
                                            type="text"
                                            name="trade"
                                            placeholder={'eg: Trade 1, Trade 2 separated by comma'}
                                            className={getInputFieldClassNames(touched.trade, errors.trade)}
                                        />

                                    </CFormGroup>

                                    <ErrorMessage
                                        name="trade"
                                        render={(msg) => <div
                                            className={'formik-error-message'}>{msg}</div>}
                                    />
                                </CCol>

                                <CCol sm="12" md="6" lg="6">

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

export default MedicineAddEditFrom;