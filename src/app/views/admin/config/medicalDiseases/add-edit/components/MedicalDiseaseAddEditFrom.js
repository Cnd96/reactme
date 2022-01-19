import React, {Component} from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import {CCol, CFormGroup, CLabel, CRow, CSelect} from "@coreui/react";
import {getCommonStatusOptions, getInputFieldClassNames} from "../../../../../../../utils/FormUtils";
import customValidator from "../../../../../../../utils/ValidationUtil";
import Constants from "../../../../../../../utils/Constants";
import * as Action from "../../store/action/index";
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';

class MedicalDiseaseAddEditFrom extends Component {

    state = {
        userInit: {
            diseaseName: '',
            description: '',
            status: Constants.STATUS_CONST.ACT,
        },
    };

    componentDidMount() {
        this.setInitialValues();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.medicalDisease !== prevProps.medicalDisease) {
            this.setInitialValues();
        }
    }

    setInitialValues = () => {
        let medicalDisease = this.props.medicalDisease;
        let userInit = {
            medicalDiseaseID : medicalDisease.medicalDiseaseID ? medicalDisease.medicalDiseaseID : '',
            diseaseName: medicalDisease.diseaseName ? medicalDisease.diseaseName : '',
            description: medicalDisease.description ? medicalDisease.description : '',
            status: medicalDisease.status ? medicalDisease.status : Constants.STATUS_CONST.ACT
        };

        this.setState({
            userInit: userInit,

        }, () => {
            this.onCustomValidation(userInit);
        })
    };

    getValidations = () => {
        return {
            diseaseName: {
                required: {message: 'Required'},
                maxLength: {value: 255}
            },
            description: {
                maxLength: {value: 255}
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

    render() {

        const initValues = this.state.userInit;

        return (
            <>
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
                                <CRow>
                                    <CCol sm="12" md="6" lg="3">
                                        <CFormGroup>
                                            <CLabel htmlFor="diseaseName" className={'required'}>Disease Name</CLabel>

                                            <Field
                                                type="text"
                                                name="diseaseName"
                                                placeholder={'Disease Name'}
                                                className={getInputFieldClassNames(touched.diseaseName, errors.diseaseName)}
                                            />
                                        </CFormGroup>

                                        <ErrorMessage
                                            name="diseaseName"
                                            render={(msg) => <div
                                                className={'formik-error-message'}>{msg}</div>}
                                        />
                                    </CCol>

                                    <CCol sm="12" md="6" lg="3">
                                        <CFormGroup>
                                            <CLabel htmlFor="description" className={'required'}>Description</CLabel>

                                            <Field
                                                type="text"
                                                name="description"
                                                placeholder={'Disease Description'}
                                                className={getInputFieldClassNames(touched.description, errors.description)}
                                            />
                                        </CFormGroup>

                                        <ErrorMessage
                                            name="description"
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
                                </CRow>
                            </Form>
                        );
                    }}
                </Formik>
            </>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        onFormChange: Action.onFormChange,
    }, dispatch)
};

function mapStateToProps({medicalDisease}) {
    return {
        medicalDisease: medicalDisease.medicalDiseaseAddEdit.medicalDisease
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MedicalDiseaseAddEditFrom)