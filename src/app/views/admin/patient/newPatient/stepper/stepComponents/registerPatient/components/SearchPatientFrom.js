import React, {useState} from 'react';
import {CButton, CCol, CFormGroup, CInput, CLabel, CRow} from "@coreui/react";
import {useDispatch} from "react-redux";
import * as Action from "../store/actions/patient.register.search.action";
import * as PatientAddEditAction from "../store/actions/patient.register.app.add.edit.action";
import * as CheckupActions from '../../createCheckUp/store/action'
import customValidator from "../../../../../../../../../utils/ValidationUtil";
import {isValueIsNumber} from "../../../../../../../../../utils/HealthTrackerUtils";
import {removeStorageItem, setStorageItem} from "../../../../../../../../../utils/StorageUtils";
import Constants from "../../../../../../../../../utils/Constants";
import CIcon from "@coreui/icons-react";
import {showInfoMessage, showWarnMessage} from "../../../../../../../../../utils/ToastUtil";
import * as _ from "lodash";

const removeLocalStorageIDs = () => {
    removeStorageItem(Constants.STORAGE.CHECKUP_ID);
    removeStorageItem(Constants.STORAGE.FITNESS_NOTE_ID);
    removeStorageItem(Constants.STORAGE.DIET_NOTE_ID);
    removeStorageItem(Constants.STORAGE.INSTRUCTION_NOTE_ID);
};

const getFullName = (patient) => {
    let {title, firstName, middleName, lastName} = patient;
    title = _.trim(title);
    firstName = _.trim(firstName);
    middleName = _.trim(middleName);
    lastName = _.trim(lastName);
    return title.concat(' .').concat(firstName).concat(' ').concat(middleName).concat(' ').concat(lastName);
};

const getValidations = () => {
    return {
        nic: {
            maxLength: {value: 12},
            nicLK: {message: 'Invalid NIC'}
        },

        contactNo: {
            maxLength: {value: 12},
            phone: {message: 'Invalid Contact Number'}
        },

        patientCode: {}
    };
};

const processMobileNumber = (value) => {

    if (isValueIsNumber(value) && value.length === 10) {
        let number = value.substring(1, 10);
        return _.padStart(number, 12, '+94');
    } else {
        return value
    }
};


const SearchPatientFrom = () => {
    const [patientSearchForm, setPatientSearchForm] = useState({nic: '', contactNo: '', patientCode: ''});
    const [errors, setErrors] = useState({isValid: '', errors: {}});
    let dispatch = useDispatch();

    const onSearch = () => {
        dispatch(Action.searchPatient(patientSearchForm)).then(response => {
            if (response.payload.patientID) {
                showInfoMessage("Registered Patient " + getFullName(response.payload));
                setStorageItem(Constants.STORAGE.PATIENT_ID, response.payload.patientID);
            } else {
                showWarnMessage("No Result Found");
            }
        });
        dispatch(CheckupActions.resetCheckupData());
        removeLocalStorageIDs();
    };
    const reset = () => {
        setPatientSearchForm({nic: '', contactNo: '', patientCode: ''});
        dispatch(PatientAddEditAction.onResetPatientData());
        removeLocalStorageIDs();
    };


    const onChange = (event) => {
        const target = event.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        if (name === 'contactNo' && value.length === 10) {
            value = processMobileNumber(value);
        }

        let validate = customValidator({[name]: value}, getValidations());
        setErrors({...validate});
        setPatientSearchForm({...patientSearchForm, [name]: value});
    };

    return (
        <div>
            <form>
                <CRow>
                    <CCol sm="12" md="6" lg="3">
                        <CFormGroup>
                            <CLabel htmlFor="nic" className={'required'}>NIC</CLabel>
                            <CInput
                                type="text"
                                name="nic"
                                id="nic"
                                value={patientSearchForm.nic}
                                placeholder={'NIC'}
                                onChange={onChange}
                            />
                        </CFormGroup>
                        <div className={'formik-error-message'}>{errors.errors.nic}</div>
                    </CCol>

                    {/*//FIXME multiple records should pop up here*/}
                    {/*<CCol sm="12" md="6" lg="3">*/}
                    {/*    <CFormGroup>*/}
                    {/*        <CLabel htmlFor="contactNo" className={'required'}>Contact No</CLabel>*/}
                    {/*        <CInput*/}
                    {/*            type="text"*/}
                    {/*            name="contactNo"*/}
                    {/*            id="contactNo"*/}
                    {/*            value={patientSearchForm.contactNo}*/}
                    {/*            placeholder={'Contact No'}*/}
                    {/*            onChange={onChange}*/}
                    {/*        />*/}
                    {/*    </CFormGroup>*/}
                    {/*    <div className={'formik-error-message'}>{errors.errors.contactNo}</div>*/}
                    {/*</CCol>*/}

                    <CCol sm="12" md="6" lg="3">
                        <CFormGroup>
                            <CLabel htmlFor="patientCode" className={'required'}>Patient Code</CLabel>
                            <CInput
                                type="text"
                                name="patientCode"
                                id="patientCode"
                                value={patientSearchForm.patientCode}
                                placeholder={'Patient Code'}
                                onChange={onChange}
                            />
                        </CFormGroup>
                        <div className={'formik-error-message'}>{errors.errors.contactNo}</div>
                    </CCol>

                    <CCol sm="12" md="6" lg="3" style={{paddingTop: '23px'}}>
                        <CButton
                            // variant="outline"
                            color="success"
                            disabled={!errors.isValid}
                            onClick={() => {
                                onSearch();
                            }}
                            className='custom-button'
                        >
                            <span><CIcon size={'lg'} name={'cil-search'} style={{marginRight: '3px'}}/></span>
                            Search
                        </CButton>

                        <CButton
                            variant="outline"
                            onClick={() => {
                                reset();
                            }}
                            className='custom-button'
                            color="secondary"
                        >
                            <span><CIcon size={'lg'} name={'cil-sync'} style={{marginRight: '3px'}}/></span>
                            Reset
                        </CButton>
                    </CCol>
                </CRow>
            </form>
        </div>
    );
};

export default SearchPatientFrom;
