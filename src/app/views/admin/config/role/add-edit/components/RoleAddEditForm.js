import React, {Component} from 'react';
import customValidator from "../../../../../../../utils/ValidationUtil";
import Constants from "../../../../../../../utils/Constants";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {getCommonStatusOptions, getInputFieldClassNames} from "../../../../../../../utils/FormUtils";
import {CCol, CFormGroup, CLabel, CRow, CSelect} from "@coreui/react";

class RoleAddEditForm extends Component {

    state = {
        roleInit: {
            roleName: '',
            status: Constants.STATUS_CONST.ACT,
        }
    };

    getValidations = () => {
        return {
            roleName: {
                required: {},
                maxLength: {value: 255}
            },

            status: {
                required: {},
            },
        };
    };


    onCustomValidation = (values) => {
        const {onFormChange} = this.props;

        let validate = customValidator(values, this.getValidations());

        onFormChange({
            isValid: validate.isValid,
            values: values
        });

        return validate.errors;
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.role != prevProps.role) {
            this.setInitialValues();
        }
    }

    setInitialValues = () => {
        const {role} = this.props;
        let roleInit = {
            roleName: role.roleName ? role.roleName : '',
            status: role.status ? role.status : 'ACT',
        };
        this.setState({
            roleInit: roleInit
        }, () => {
            this.onCustomValidation(roleInit);
        });
    };


    render() {

        const initialValues = this.state.roleInit;

        return (
            <>
                <Formik
                    enableReinitialize={true}
                    initialValues={initialValues}
                    onSubmit={(values, {setSubmitting}) => {
                        setTimeout(() => {
                            console.log(values);
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
                                        <CLabel htmlFor="roleName" className={'required'}>Role Name</CLabel>

                                        <Field
                                            type="text"
                                            name="roleName"
                                            placeholder={'Role Name'}
                                            className={getInputFieldClassNames(touched.roleName, errors.roleName)}
                                        />
                                    </CFormGroup>

                                    <ErrorMessage
                                        name="roleName"
                                        render={(msg) => <div className={'formik-error-message'}>{msg}</div>}
                                    />
                                </CCol>

                                <CCol sm="12">

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
                                    <ErrorMessage
                                        name="status"
                                        render={(msg) => <div className={'formik-error-message'}>{msg}</div>}
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

export default RoleAddEditForm;
