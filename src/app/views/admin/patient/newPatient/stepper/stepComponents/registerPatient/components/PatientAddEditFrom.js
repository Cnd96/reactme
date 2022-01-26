import React, {Component} from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import {CButton, CCol, CFormGroup, CLabel, CRow, CSelect} from "@coreui/react";
import {
    getCivilStatusOptions,
    getCommonGenderOptions,
    getCommonTitleOptions,
    getInputFieldClassNames,
    getStandardContactNumber
} from "../../../../../../../../../utils/FormUtils";
import Constants from "../../../../../../../../../utils/Constants";
import customValidator from "../../../../../../../../../utils/ValidationUtil";
import * as Action from "../store/actions";
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import FormikDatePicker from "../../../../../../../../common/FormikDatePicker";
import {trimData} from "../../../../../../../../../utils/DataExtractHelper";
import {setStorageItem} from "../../../../../../../../../utils/StorageUtils";
import CIcon from "@coreui/icons-react";
import {toDate} from "../../../../../../../../../utils/HealthTrackerUtils";
import {getCitiesOptions} from "../../../../../../../../../utils/Cities";
import { getCountriesOptions } from '../../../../../../../../../utils/Countries';
import moment from 'moment';

class PatientAddEditFrom extends Component {

    state = {
        patientInit: {
            patientID: '',
            title: 'MR',
            patientCode: '',
            firstName: '',
            middleName: '',
			qualification:'',
            lastName: '',
            nicPassport: '',
            contactNo: '',
            email: '',
            gender: 'M',
            dateOfBirthStr: '',
            age: '',
            bloodGroup: '',
            civilStatus: Constants.CIVIL_STATUS_CONST.UNKNOWN,
            referredBy: '',
            occupation: '',
            companyName: '',
            department: '',
            addressLine1: '',
            addressLine2: '',
            addressLine3: '',
            city: '',
            country: 'LK',
            registeredDateStr: moment(new Date()).format("DD/MM/YYYY"),
            landLineNumber: '',
            whatsappNumber: '',
            mobileNumber: '',
            comment: '',
            status: Constants.STATUS_CONST.ACT,
        }
    };

    getValidations = () => {
        return {
            firstName: {
                required: { message: 'Required' },
                maxLength: { value: 255},
                label: "firstName"
            },
            dateOfBirthStr : {
                required: { message: 'Required' },
                futureDate: { message: 'Cannot be a future date' },
                label: "dateOfBirthStr"
            },
            age : {
                required: { message: 'Required' },
                label: "age"
            },
            email: {
                email: { message: 'Invalid Email' },
                label: "email"
            },
            contactNo: {
                required: { message: 'Required' },
                maxLength: { value: 12 },
                phone: { message: 'Invalid Contact Number' },
                label: "contactNo"
            },
            registeredDateStr: {
                required: { message: 'Required' },
                futureDate: { message: 'Cannot be a future date' },
                label: "registeredDateStr"
            },
        };
    };

    onCustomValidation = (values) => {
        const {onFormChange} = this.props;

        if (values.contactNo) {
            values.contactNo = getStandardContactNumber(values.contactNo);
        }
        if (values.dateOfBirthStr) {
            let dob = toDate(values.dateOfBirthStr);
            let today = new Date();
            let diff = today.getTime() - dob.getTime();
            values.age = Math.floor(diff / 31556736000);
        }

        if (values.title) {
            if (values.title === Constants.TITLE_CONST.MR) {
                values.gender = Constants.GENDER_CONST.M;
            } else if (values.title === Constants.TITLE_CONST.MS || values.title === Constants.TITLE_CONST.MRS || values.title === Constants.TITLE_CONST.MISS) {
                values.gender = Constants.GENDER_CONST.F;
            }

            if (values.title === Constants.TITLE_CONST.MRS) {
                values.civilStatus = Constants.CIVIL_STATUS_CONST.MARRIED
            }
            else{
                values.civilStatus = Constants.CIVIL_STATUS_CONST.SINGLE
            }
        }

        let validate = customValidator(values, this.getValidations());

        onFormChange({
            isValid: validate.isValid,
            values: values
        });

        return validate.errors;
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.patient !== this.props.patient) {
            this.onCustomValidation(this.props.patient);
        }
    }

    setInitialValues = () => {
        let { patient } = this.props;
        let { patientInit } = this.state;

        let initData = {
            patientID: patient.patientID ? patient.patientID : patientInit.patientID,
            title: patient.title ? patient.title : patientInit.title,
            patientCode: patient.patientCode ? patient.patientCode : patientInit.patientCode,
            firstName: patient.firstName ? patient.firstName : patientInit.firstName,
            middleName: patient.middleName ? patient.middleName : patientInit.middleName,
            lastName: patient.lastName ? patient.lastName : patientInit.lastName,
            nicPassport: patient.nicPassport ? patient.nicPassport : patientInit.nicPassport,
            contactNo: patient.contactNo ? patient.contactNo : patientInit.contactNo,
            email: patient.email ? patient.email : patientInit.email,
            gender: patient.gender ? patient.gender : patientInit.gender,
            dateOfBirthStr: patient.dateOfBirthStr ? patient.dateOfBirthStr : patientInit.dateOfBirthStr,
            registeredDateStr: patient.registeredDateStr ? patient.registeredDateStr : patientInit.registeredDateStr,
            age: patient.age ? patient.age : patientInit.age,
            occupation: patient.occupation ? patient.occupation : patientInit.occupation,
            companyName: patient.companyName ? patient.companyName : patientInit.companyName,
            department: patient.department ? patient.department : patientInit.department,
            addressLine1: patient.addressLine1 ? patient.addressLine1 : patientInit.addressLine1,
            addressLine2: patient.addressLine2 ? patient.addressLine2 : patientInit.addressLine2,
            addressLine3: patient.addressLine3 ? patient.addressLine3 : patientInit.addressLine3,
            bloodGroup: patient.bloodGroup ? patient.bloodGroup : patientInit.bloodGroup,
            civilStatus: patient.civilStatus ? patient.civilStatus : patientInit.civilStatus,
            referredBy: patient.referredBy ? patient.referredBy : patientInit.referredBy,
            landLineNumber: patient.landLineNumber ? patient.landLineNumber : patientInit.landLineNumber,
            whatsappNumber: patient.whatsappNumber ? patient.whatsappNumber : patientInit.whatsappNumber,
            mobileNumber: patient.mobileNumber ? patient.mobileNumber : patientInit.mobileNumber,
            comment: patient.comment ? patient.comment : patientInit.comment,
			qualification: patient.qualification ? patient.qualification : patientInit.qualification,
            city: patient.city ? patient.city : patientInit.city,
            country: patient.country ? patient.country : patientInit.country,
            status: patient.status ? patient.status : patientInit.status,
        };
        return initData;
    };

    render() {
        let { isValid, values } = this.props.formData;
        let { setPageIndex } = this.props;
        let initValues = this.setInitialValues();

        const onClickNextSave = (isNext) => {
            if (this.props.patient === values && isNext) {
                setPageIndex(this.props.nextPageIndex);
                return;
            }
            this.props.saveOrUpdatePatient(trimData(values)).then((response) => {
                setStorageItem(Constants.STORAGE.PATIENT_ID, response.payload.patientID);
                isNext && setPageIndex(this.props.nextPageIndex);
            }).catch(error => {
                console.log(error);
            })
        };

        return (
            <>
                <div className='d-flex flex-row flex-wrap  justify-content-end'>
                    <CButton
                        disabled={!isValid || this.props.patient === values}
                        onClick={() => onClickNextSave(false)}
                        color="info"
                        style={{ marginRight: '3px' }}
                    >
                        Save
                    </CButton>
                    <CButton
                        disabled={!isValid}
                        onClick={() => onClickNextSave(true)}
                        color="success"
                    >
                        Next
                        <CIcon size={'lg'} name={'cil-media-skip-forward'} style={{ marginLeft: '3px' }} />
                    </CButton>
                </div>
                <Formik
                    enableReinitialize={true}
                    initialValues={initValues}
                    onSubmit={(values, {setSubmitting}) => {
                        setTimeout(() => {
                            setSubmitting(false)
                        }, 200)
                    }}
                    validateOnChange={true}
                    validate={(values) => {
                        return this.onCustomValidation(values);
                    }}
                >
                    {({errors, touched}) => {
                        return (
                            <Form>
                                <div className={'privilege-main-category-section'}>

                                    <div className={'privilege-category-name'}>
                                        <h5>Basic Information - <span
                                            className="color-green">{initValues.patientCode}</span></h5>
                                    </div>
                                    <div className={'privilege-category-section'}>
                                        <CRow>
                                            <CCol sm="12" md="6" lg="3">
                                                <CFormGroup>
                                                    <CLabel htmlFor="title" className={'required'}>Title</CLabel>

                                                    <Field name="title"
                                                           className={getInputFieldClassNames(touched.title, errors.title)}
                                                    >
                                                        {({
                                                              field, // { name, value, onChange, onBlur }
                                                              form: {touched, errors}, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                                                              meta,
                                                          }) => (

                                                            <CSelect custom name="title" {...field}>
                                                                {
                                                                    getCommonTitleOptions(false).map((item) => {
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
                                                    name="title"
                                                    render={(msg) => <div
                                                        className={'formik-error-message'}>{msg}</div>}
                                                />
                                            </CCol>

                                            <CCol sm="12" md="6" lg="3">
                                                <CFormGroup>
                                                    <CLabel htmlFor="firstName" className={'required'}>First
                                                        Name</CLabel>

                                                    <Field
                                                        type="text"
                                                        name="firstName"
                                                        placeholder={'First Name'}
                                                        className={getInputFieldClassNames(touched.firstName, errors.firstName)}
                                                    />
                                                </CFormGroup>

                                                <ErrorMessage
                                                    name="firstName"
                                                    render={(msg) => <div
                                                        className={'formik-error-message'}>{msg}</div>}
                                                />
                                            </CCol>

                                            <CCol sm="12" md="6" lg="3">
                                                <CFormGroup>
                                                    <CLabel htmlFor="middleName">Middle Name</CLabel>
                                                    <Field
                                                        type="text"
                                                        name="middleName"
                                                        placeholder={'Middle Name'}
                                                        className={getInputFieldClassNames(touched.middleName, errors.middleName)}
                                                    />
                                                </CFormGroup>

                                                <ErrorMessage
                                                    name="middleName"
                                                    render={(msg) => <div
                                                        className={'formik-error-message'}>{msg}</div>}
                                                />
                                            </CCol>

                                            <CCol sm="12" md="6" lg="3">
                                                <CFormGroup>
                                                    <CLabel htmlFor="lastName">Last Name</CLabel>

                                                    <Field
                                                        type="text"
                                                        name="lastName"
                                                        placeholder={'Last Name'}
                                                        className={getInputFieldClassNames(touched.lastName, errors.lastName)}
                                                    />
                                                </CFormGroup>

                                                <ErrorMessage
                                                    name="lastName"
                                                    render={(msg) => <div
                                                        className={'formik-error-message'}>{msg}</div>}
                                                />
                                            </CCol>


                                            <CCol sm="12" md="6" lg="3">
                                                <CFormGroup>
                                                    <CLabel htmlFor="nicPassport">NIC/Passport</CLabel>

                                                    <Field
                                                        type="text"
                                                        name="nicPassport"
                                                        placeholder={'NIC'}
                                                        className={getInputFieldClassNames(touched.nicPassport, errors.nicPassport)}
                                                    />
                                                </CFormGroup>

                                                <ErrorMessage
                                                    name="nicPassport"
                                                    render={(msg) => <div
                                                        className={'formik-error-message'}>{msg}</div>}
                                                />
                                            </CCol>

                                            <CCol sm="12" md="6" lg="3">
                                                <CFormGroup>
                                                    <CLabel htmlFor="contactNo" className={'required'}>Mobile
                                                        Phone</CLabel>

                                                    <Field
                                                        type="text"
                                                        name="contactNo"
                                                        placeholder={'Contact No'}
                                                        className={getInputFieldClassNames(touched.contactNo, errors.contactNo)}
                                                    />
                                                </CFormGroup>

                                                <ErrorMessage
                                                    name="contactNo"
                                                    render={(msg) => <div
                                                        className={'formik-error-message'}>{msg}</div>}
                                                />
                                            </CCol>
                                            <CCol sm="12" md="6" lg="3">

                                                <CFormGroup>
                                                    <CLabel htmlFor="gender" className={'required'}>Gender</CLabel>
                                                    <Field name="gender"
                                                           className={getInputFieldClassNames(touched.gender, errors.gender)}
                                                    >
                                                        {({
                                                              field, // { name, value, onChange, onBlur }
                                                              form: {touched, errors}, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                                                              meta,
                                                          }) => (

                                                            <CSelect custom name="gender" {...field}>
                                                                {
                                                                    getCommonGenderOptions(false).map((item) => {
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
                                                    name="gender"
                                                    render={(msg) => <div
                                                        className={'formik-error-message'}>{msg}</div>}
                                                />
                                            </CCol>

                                            <CCol sm="12" md="6" lg="3">
                                                <CFormGroup>
                                                    <CLabel htmlFor="dateOfBirthStr" className={'required'}>Date of
                                                        Birth</CLabel>

                                                    <Field
                                                        type="test"
                                                        name="dateOfBirthStr"
                                                        placeholder={'Date of Birth'}
                                                        component={FormikDatePicker}
                                                    />
                                                </CFormGroup>

                                                <ErrorMessage
                                                    name="dateOfBirthStr"
                                                    render={(msg) => <div
                                                        className={'formik-error-message'}>{msg}</div>}
                                                />
                                            </CCol>

                                            <CCol sm="12" md="6" lg="3">
                                                <CFormGroup>
                                                    <CLabel htmlFor="age" className={'required'}>Age</CLabel>

                                                    <Field
                                                        type="number"
                                                        name="age"
                                                        placeholder={'Age'}
                                                        className={getInputFieldClassNames(touched.age, errors.age)}
                                                    />
                                                </CFormGroup>

                                                <ErrorMessage
                                                    name="age"
                                                    render={(msg) => <div
                                                        className={'formik-error-message'}>{msg}</div>}
                                                />
                                            </CCol>

                                            <CCol sm="12" md="6" lg="3">

                                                <CFormGroup>
                                                    <CLabel htmlFor="bloodGroup">Blood
                                                        Group</CLabel>

                                                    <Field name="bloodGroup"
                                                           className={getInputFieldClassNames(touched.bloodGroup, errors.bloodGroup)}
                                                    >
                                                        {({
                                                              field, // { name, value, onChange, onBlur }
                                                              form: {touched, errors}, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                                                              meta,
                                                          }) => (

                                                            <CSelect custom name="bloodGroup" {...field}>
                                                                {
                                                                    Constants.BLOOD_GROUP.map((item) => {
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
                                                    <CLabel htmlFor="civilStatus">Civil Status</CLabel>

                                                    <Field name="civilStatus"
                                                           className={getInputFieldClassNames(touched.civilStatus, errors.civilStatus)}
                                                    >
                                                        {({
                                                              field, // { name, value, onChange, onBlur }
                                                              form: {touched, errors}, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                                                              meta,
                                                          }) => (

                                                            <CSelect custom name="civilStatus" {...field}>
                                                                {
                                                                    getCivilStatusOptions(false).map((item) => {
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
                                                    name="civilStatus"
                                                    render={(msg) => <div
                                                        className={'formik-error-message'}>{msg}</div>}
                                                />
                                            </CCol>


                                            <CCol sm="12" md="6" lg="3">
                                                <CFormGroup>
                                                    <CLabel htmlFor="email">Referred By</CLabel>

                                                    <Field
                                                        type="text"
                                                        name="referredBy"
                                                        placeholder={'Referred By'}
                                                        className={getInputFieldClassNames(touched.referredBy, errors.referredBy)}
                                                    />
                                                </CFormGroup>

                                            </CCol>

                                            <CCol sm="12" md="6" lg="3">
                                                <CFormGroup>
                                                    <CLabel htmlFor="email">Email</CLabel>

                                                    <Field
                                                        type="email"
                                                        name="email"
                                                        placeholder={'Email'}
                                                        className={getInputFieldClassNames(touched.email, errors.email)}
                                                    />
                                                </CFormGroup>

                                                <ErrorMessage
                                                    name="email"
                                                    render={(msg) => <div
                                                        className={'formik-error-message'}>{msg}</div>}
                                                />
                                            </CCol>

                                            <CCol sm="12" md="6" lg="3">
                                                <CFormGroup>
                                                    <CLabel htmlFor="registeredDateStr" className={'required'}>Registered Date</CLabel>

                                                    <Field
                                                        type="test"
                                                        name="registeredDateStr"
                                                        placeholder={'regDate'}
                                                        component={FormikDatePicker}
                                                    />
                                                </CFormGroup>

                                                <ErrorMessage
                                                    name="registeredDateStr"
                                                    render={(msg) => <div
                                                        className={'formik-error-message'}>{msg}</div>}
                                                />
                                            </CCol>
                                        </CRow>
                                    </div>
                                </div>

                                <div className={'privilege-main-category-section'}>

                                    <div className={'privilege-category-name'}>
                                        <h5>Other Information</h5>
                                    </div>

                                    <div className={'privilege-category-section'}>

                                        <CRow>
                                            <CCol sm="12" md="6" lg="3">
                                                <CFormGroup>
                                                    <CLabel htmlFor="qualification">Qualification</CLabel>

                                                    <Field name="qualification"
                                                        className={getInputFieldClassNames(touched.qualification, errors.qualification)}
                                                    >
                                                        {({
                                                            field, // { name, value, onChange, onBlur }
                                                            form: {touched, errors}, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                                                            meta,
                                                        }) => (

                                                            <CSelect custom name="qualification" {...field}>
                                                                {
                                                                    Constants.QUALIFICATIONS.map((item) => {
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
                                                    <CLabel htmlFor="occupation">Job Description</CLabel>

                                                    <Field
                                                        type="text"
                                                        name="occupation"
                                                        placeholder={'Job Description'}
                                                        className={getInputFieldClassNames(touched.occupation, errors.occupation)}
                                                    />
                                                </CFormGroup>

                                                <ErrorMessage
                                                    name="occupation"
                                                    render={(msg) => <div
                                                        className={'formik-error-message'}>{msg}</div>}
                                                />
                                            </CCol>

                                            <CCol sm="12" md="6" lg="3">
                                                <CFormGroup>
                                                    <CLabel htmlFor="companyName">Company Name</CLabel>

                                                    <Field
                                                        type="text"
                                                        name="companyName"
                                                        placeholder={'Company Name'}
                                                        className={getInputFieldClassNames(touched.companyName, errors.companyName)}
                                                    />
                                                </CFormGroup>

                                                <ErrorMessage
                                                    name="companyName"
                                                    render={(msg) => <div
                                                        className={'formik-error-message'}>{msg}</div>}
                                                />
                                            </CCol>

                                            <CCol sm="12" md="6" lg="3">
                                                <CFormGroup>
                                                    <CLabel htmlFor="department">Department</CLabel>

                                                    <Field
                                                        type="text"
                                                        name="department"
                                                        placeholder={'Department'}
                                                        className={getInputFieldClassNames(touched.department, errors.department)}
                                                    />
                                                </CFormGroup>

                                                <ErrorMessage
                                                    name="department"
                                                    render={(msg) => <div
                                                        className={'formik-error-message'}>{msg}</div>}
                                                />
                                            </CCol>

                                            <CCol sm="12" md="6" lg="3">
                                                <CFormGroup>
                                                    <CLabel htmlFor="addressLine1">Address Line
                                                        1</CLabel>

                                                    <Field
                                                        type="text"
                                                        name="addressLine1"
                                                        placeholder={'Address Line 1'}
                                                        className={getInputFieldClassNames(touched.addressLine1, errors.addressLine1)}
                                                    />
                                                </CFormGroup>

                                                <ErrorMessage
                                                    name="addressLine1"
                                                    render={(msg) => <div
                                                        className={'formik-error-message'}>{msg}</div>}
                                                />
                                            </CCol>

                                            <CCol sm="12" md="6" lg="3">
                                                <CFormGroup>
                                                    <CLabel htmlFor="addressLine2">Address Line 2</CLabel>
                                                    <Field
                                                        type="text"
                                                        name="addressLine2"
                                                        placeholder={'Address Line 2'}
                                                        className={getInputFieldClassNames(touched.addressLine2, errors.addressLine2)}
                                                    />
                                                </CFormGroup>

                                                <ErrorMessage
                                                    name="addressLine2"
                                                    render={(msg) => <div
                                                        className={'formik-error-message'}>{msg}</div>}
                                                />
                                            </CCol>


                                            <CCol sm="12" md="6" lg="3">
                                                <CFormGroup>
                                                    <CLabel htmlFor="addressLine3">Address Line 3</CLabel>

                                                    <Field
                                                        type="text"
                                                        name="addressLine3"
                                                        placeholder={'Address Line 3'}
                                                        className={getInputFieldClassNames(touched.addressLine3, errors.addressLine3)}
                                                    />
                                                </CFormGroup>

                                                <ErrorMessage
                                                    name="addressLine3"
                                                    render={(msg) => <div
                                                        className={'formik-error-message'}>{msg}</div>}
                                                />
                                            </CCol>

                                            <CCol sm="12" md="6" lg="3">
                                                <CFormGroup>
                                                    <CLabel htmlFor="city">City</CLabel>

                                                    <Field name="city"
                                                           className={getInputFieldClassNames(touched.city, errors.city)}
                                                    >
                                                        {({
                                                              field, // { name, value, onChange, onBlur }
                                                              form: {touched, errors}, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                                                              meta,
                                                          }) => (

                                                            <CSelect custom name="city" {...field}>
                                                                {
                                                                    getCitiesOptions(false).map((item) => {
                                                                        return (
                                                                            <option key={item.key}
                                                                                    value={item.key}>{item.value.trim()}</option>
                                                                        );
                                                                    })
                                                                }
                                                            </CSelect>
                                                        )}
                                                    </Field>
                                                </CFormGroup>
                                                <ErrorMessage
                                                    name="city"
                                                    render={(msg) => <div
                                                        className={'formik-error-message'}>{msg}</div>}
                                                />
                                            </CCol>

                                            <CCol sm="12" md="6" lg="3">
                                                <CFormGroup>
                                                    <CLabel htmlFor="country">Country</CLabel>
                                                    <Field
                                                        name="country"
                                                        className={getInputFieldClassNames(touched.country, errors.country)}
                                                    >
                                                        {({
                                                            field, // { name, value, onChange, onBlur }
                                                            form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                                                            meta,
                                                        }) => (
                                                            <CSelect custom name="country" {...field}>
                                                                {
                                                                    getCountriesOptions(false).map((item) => {
                                                                        return (
                                                                            <option key={item.key} value={item.key}>
                                                                                {item.value}
                                                                            </option>
                                                                        );
                                                                    })
                                                                }
                                                            </CSelect>
                                                        )}
                                                    </Field>
                                                </CFormGroup>
                                                <ErrorMessage
                                                    name="country"
                                                    render={(msg) => <div
                                                    className={'formik-error-message'}>{msg}</div>}
                                                />
                                            </CCol>
                                        </CRow>
                                    </div>
                                </div>


                                <div className={'privilege-main-category-section'}>

                                    <div className={'privilege-category-name'}>
                                        <h5>Other Contacts</h5>
                                    </div>

                                    <div className={'privilege-category-section'}>

                                        <CRow>
                                            <CCol sm="12" md="6" lg="3">
                                                <CFormGroup>
                                                    <CLabel htmlFor="landLineNumber">Land Line Number</CLabel>

                                                    <Field
                                                        type="text"
                                                        name="landLineNumber"
                                                        placeholder={'Land Line Number'}
                                                        className={getInputFieldClassNames(touched.landLineNumber, errors.landLineNumber)}
                                                    />
                                                </CFormGroup>

                                            </CCol>

                                            <CCol sm="12" md="6" lg="3">
                                                <CFormGroup>
                                                    <CLabel htmlFor="mobileNumber">Mobile Number (2)</CLabel>

                                                    <Field
                                                        type="text"
                                                        name="mobileNumber"
                                                        placeholder={'Mobile Number'}
                                                        className={getInputFieldClassNames(touched.mobileNumber, errors.mobileNumber)}
                                                    />
                                                </CFormGroup>
                                            </CCol>

                                            <CCol sm="12" md="6" lg="3">
                                                <CFormGroup>
                                                    <CLabel htmlFor="whatsappNumber">Whatsapp Number</CLabel>

                                                    <Field
                                                        type="text"
                                                        name="whatsappNumber"
                                                        placeholder={'whatsapp Number'}
                                                        className={getInputFieldClassNames(touched.whatsappNumber, errors.whatsappNumber)}
                                                    />
                                                </CFormGroup>
                                            </CCol>
                                        </CRow>
                                    </div>
                                </div>


                                <div className={'privilege-main-category-section'}>
                                    <div className={'privilege-category-name'}>
                                        <h5>Comments</h5>
                                    </div>
                                    <div className={'privilege-category-section'}>
                                        <CRow>
                                            <CCol sm="12">
                                                <CFormGroup>
                                                    {/*<CLabel htmlFor="comment">Comment</CLabel>*/}
                                                    <Field
                                                        rows="5" cols="120"
                                                        name="comment"
                                                        placeholder={''}
                                                        className={getInputFieldClassNames(touched.comment, errors.comment)}
                                                        as='textarea'
                                                    >
                                                    </Field>
                                                </CFormGroup>
                                            </CCol>
                                        </CRow>
                                    </div>
                                </div>
                            </Form>
                        );
                    }}
                </Formik>

                <div className='d-flex flex-row flex-wrap  justify-content-end'>
                    <CButton
                        disabled={!isValid || this.props.patient === values}
                        onClick={() => onClickNextSave(false)}
                        color="info"
                        style={{ marginRight: '3px' }}
                    >
                        Save
                    </CButton>
                    <CButton
                        disabled={!isValid}
                        onClick={() => onClickNextSave(true)}
                        color="success"
                    >
                        Next
                        <CIcon size={'lg'} name={'cil-media-skip-forward'} style={{ marginLeft: '3px' }} />
                    </CButton>
                </div>
            </>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        onFormChange: Action.onFormChange,
        saveOrUpdatePatient: Action.saveOrUpdatePatient
    }, dispatch)
};

function mapStateToProps({ patient }) {
    return {
        patient: patient.patientAddEdit.patient,
        formData: patient.patientAddEdit.formData,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PatientAddEditFrom);