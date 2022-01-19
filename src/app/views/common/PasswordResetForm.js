import React, {Component} from 'react';
import customValidator from "../../../utils/ValidationUtil";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {CCol, CFormGroup, CLabel, CRow} from "@coreui/react";
import {getInputFieldClassNames} from "../../../utils/FormUtils";

class PasswordResetForm extends Component {

    state = {
        formInit: {
            oldPassword: '',
            newPassword: '',
            newPasswordConfirm: '',
        }
    };

    componentDidMount() {
        this.onCustomValidation(this.state.formInit);
    }

    getValidations = () => {
        return {
            oldPassword: {
                required: {},
                maxLength: {value: 100}
            },

            newPassword: {
                required: {},
                maxLength: {value: 100}
            },

            newPasswordConfirm: {
                required: {},
                maxLength: {value: 100}
            },
        };
    };


    onCustomValidation = (values) => {
        const {onFormChange} = this.props;

        let validate = customValidator(values, this.getValidations());

        this.passwordMatchValidation(
            values.newPassword,
            values.newPasswordConfirm,
            validate
        );

        onFormChange({
            isValid: validate.isValid,
            values: values
        });

        return validate.errors;
    };

    passwordMatchValidation = (password, passwordConfirm, validateObj) => {
        let isValid;
        let validationMessage = 'Password not match';

        isValid = password === passwordConfirm;

        validateObj.isValid = validateObj.isValid && isValid;

        if (!isValid) {
            validateObj.errors.newPassword = validateObj.errors.newPassword ?
                (validateObj.errors.newPassword + ', ' + validationMessage) : validationMessage;

            validateObj.errors.newPasswordConfirm = validateObj.errors.newPasswordConfirm ?
                (validateObj.errors.newPasswordConfirm + ', ' + validationMessage) : validationMessage;
        }
    };

    render() {

        const initialValues = this.state.formInit;

        return (
            <>
                <Formik
                    enableReinitialize={true}
                    initialValues={initialValues}
                    onSubmit={(values, {setSubmitting}) => {
                        setTimeout(() => {
                            setSubmitting(false);
                        }, 400);
                    }}

                    validateOnChange={true}
                    validate={(values) => {
                        return this.onCustomValidation(values);
                    }}
                >
                    {({isSubmitting, dirty, errors, touched}) => (
                        <Form>

                            <CRow>
                                <CCol sm="12">
                                    <CFormGroup>
                                        <CLabel htmlFor="oldPassword"
                                                className={'required'}>Current Password</CLabel>

                                        <Field
                                            type="password"
                                            name="oldPassword"
                                            placeholder={'Current Password'}
                                            className={getInputFieldClassNames(touched.oldPassword, errors.oldPassword)}
                                        />
                                    </CFormGroup>

                                    <ErrorMessage
                                        name="oldPassword"
                                        render={(msg) => <div
                                            className={'formik-error-message'}>{msg}</div>}
                                    />
                                </CCol>

                                <CCol sm="12">
                                    <CFormGroup>
                                        <CLabel htmlFor="newPassword"
                                                className={'required'}>New Password</CLabel>

                                        <Field
                                            type="password"
                                            name="newPassword"
                                            placeholder={'New Password'}
                                            className={getInputFieldClassNames(touched.newPassword, errors.newPassword)}
                                        />
                                    </CFormGroup>

                                    <ErrorMessage
                                        name="newPassword"
                                        render={(msg) => <div
                                            className={'formik-error-message'}>{msg}</div>}
                                    />
                                </CCol>

                                <CCol sm="12">
                                    <CFormGroup>
                                        <CLabel htmlFor="newPasswordConfirm"
                                                className={'required'}>Confirm New Password</CLabel>

                                        <Field
                                            type="password"
                                            name="newPasswordConfirm"
                                            placeholder={'Confirm New Password'}
                                            className={getInputFieldClassNames(touched.newPasswordConfirm, errors.newPasswordConfirm)}
                                        />
                                    </CFormGroup>

                                    <ErrorMessage
                                        name="newPasswordConfirm"
                                        render={(msg) => <div
                                            className={'formik-error-message'}>{msg}</div>}
                                    />
                                </CCol>

                            </CRow>
                        </Form>
                    )}
                </Formik>
            </>
        );
    }
}

export default PasswordResetForm;
