import React, {useEffect, useState} from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import {CCol, CFormGroup, CLabel, CRow} from "@coreui/react";
import FormikDatePicker from "../../../../../../../../common/FormikDatePicker";
import Constants from "../../../../../../../../../utils/Constants";
import {useDispatch, useSelector} from "react-redux";
import * as Action from "../store/action/checkup.app.add.edit.action";
import {setStorageItem} from "../../../../../../../../../utils/StorageUtils";
import { NextButton, PrevButton, SaveButton } from "../../../../../../../common/NextPrevButtonGroup";
import CIcon from "@coreui/icons-react";

const generateSaveObject = (checkupData, patientData) => {
    return Object.assign({}, {...checkupData.formData.values}, {patientID: patientData.patientID ? patientData.patientID : null});
};

const validateDateInput = (value) => {
    let invalidDateObj = {
        isValid: false,
        errors: {
            checkupDateStr: 'Invalid date'
        }
    };

    let length = value ? value.length : 0;

    let day = '', month = '', year = '';

    if (length !== 8 && length !== 10 && length !== 16) {
        return invalidDateObj;
    }

    if (length === 8) {
        day = parseInt(value.substr(0, 2));
        month = parseInt(value.substr(2, 2));
        year = parseInt(value.substr(4, 4));
    } else {
        day = parseInt(value.substr(0, 2));
        month = parseInt(value.substr(3, 2));
        year = parseInt(value.substr(6, 4));
    }

    let currentDate = new Date();

    if (currentDate.getUTCFullYear() < year) {
        return invalidDateObj;
    }

    if (currentDate.getUTCFullYear() === year) {
        if ((currentDate.getUTCMonth() + 1) < month) {
            return invalidDateObj;
        }
    }

    if (currentDate.getUTCFullYear() === year && (currentDate.getUTCMonth() + 1) === month) {
        if (currentDate.getUTCDate() < day) {
            return invalidDateObj;
        }
    }

    if (_.isNaN(day) || _.isNaN(month) || _.isNaN(year)) {
        return invalidDateObj;
    }

    return {
        isValid: true,
        errors: {}
    };
};

const CreateCheckupForm = ({setPageIndex, prevPageIndex, nextPageIndex}) => {
    const [checkupForm, setCheckupForm] = useState({checkupDateStr: new Date().toLocaleDateString('en-GB')});
    const dispatch = useDispatch();
    const checkupData = useSelector(({checkup}) => checkup.checkupAddEdit);
    const patientData = useSelector(({patient}) => patient.patientAddEdit);
    const [isValid, setIsValid] = useState(false);

    useEffect(() => {
        let checkup = checkupData.checkup.checkupDateStr ? checkupData.checkup : {checkupDateStr: new Date().toLocaleDateString('en-GB')};
        setCheckupForm({...checkup});
        onCustomValidation({...checkup})
    }, [dispatch, checkupData.checkup]);

    const onCustomValidation = (values) => {
        let validate = validateDateInput(values.checkupDateStr);
        dispatch(Action.onFormChange({
            isValid: validate.isValid,
            values: values
        }));
        setIsValid(validate.isValid);
        return validate.errors;
    };

    const saveFunction = (isNext) => {
        let saveObject = generateSaveObject(checkupData, patientData.patient);

        if (saveObject.patientID) {
            dispatch(Action.saveOrUpdateCheckup(saveObject)).then(response => {
                setStorageItem(Constants.STORAGE.CHECKUP_ID, response.payload.checkupID);
                isNext && setPageIndex(nextPageIndex);
            }).catch(error => {
                console.log(error);
            })
        } else {
            isNext && setPageIndex(Constants.PAGE_INDEXES.RegisterPatientBase);
        }
    };

    return (
        <>
            <div className='d-flex flex-row flex-wrap  justify-content-end'>
                <PrevButton isValid={true} onClickHandler={ () => setPageIndex(prevPageIndex) } />
                <SaveButton isValid={true} onClickHandler={ () => saveFunction(false) } />
                <NextButton isValid={true} onClickHandler={ () => saveFunction(true) } />
            </div>
            <Formik
                enableReinitialize={true}
                initialValues={checkupForm}
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
                                <CCol sm="12">
                                    <CFormGroup>
                                        <div className='d-flex flex-row flex-wrap'>
                                            <CLabel htmlFor="checkupDateStr" className={'required mt-0 mb-0'}>
                                                Checkup Date
                                            </CLabel>
                                            <Field
                                                className={'ml-15p'}
                                                type="test"
                                                name="checkupDateStr"
                                                placeholder={'checkup Date'}
                                                component={FormikDatePicker}
                                            />
                                            <CIcon size={'lg'} name={'cil-calendar'} style={{margin: '6px'}} />
                                        </div>
                                    </CFormGroup>

                                    <ErrorMessage
                                        name="checkupDateStr"
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

export default CreateCheckupForm;