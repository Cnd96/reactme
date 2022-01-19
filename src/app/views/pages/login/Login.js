import React, {Component} from 'react'
import {
    CButton,
    CCard,
    CCardBody,
    CCardGroup,
    CCol,
    CContainer,
    CImg,
    CInputGroup,
    CInputGroupPrepend,
    CInputGroupText,
    CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

import jwtService from '../../../services/auth/jwtService';
import history from '../../../../@history';
import {getEncryptedPassword} from "../../../../utils/PasswordHelper";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as userActions from '../../../auth/store/actions';
import {ErrorMessage, Field, Form, Formik} from 'formik';
import customValidator from "../../../../utils/ValidationUtil";
import logo from '../../../../assets/img/brand/logo.png';
import itechro from '../../../../assets/img/brand/itechro.png';

class Login extends Component {

    componentDidMount() {
        if (jwtService.isUserLoggedIn()) {
            history.push({
                pathname: '/'
            });
        }
    }

    getValidations = () => {
        return {
            userName: {
                required: {},
                maxLength: {value: 50}
            },

            password: {
                required: {},
                maxLength: {value: 50}
            },
        };
    };

    onCustomValidation = (values) => {
        let validate = customValidator(values, this.getValidations());
        return validate.errors;
    };

    onSubmit = (data) => {

        const password = getEncryptedPassword(data.password);

        this.props.submitLogin({
            userName: data.userName,
            password: password
        });
    };


    render() {
        return (
            <div
                id={'login-page'}
                className="display-flex flex-column jc-center ai-center">
                <CContainer>
                    <CRow className="justify-content-center">
                        <CCol md="5">
                            <CCardGroup>
                                <CCard className="p-4">
                                    <CCardBody>
                                        {/*<CForm>*/}

                                        <CImg
                                            style={{
                                                position: 'relative',
                                                left: '-5px',
                                                marginBottom: '10px',
                                                width:'75%'
                                            }}
                                            src={logo}

                                        />

                                        <p className="text-muted">Sign In to your account</p>

                                        <Formik
                                            initialValues={{userName: '', password: ''}}
                                            validateOnChange={true}
                                            validate={values => {
                                                return this.onCustomValidation(values);
                                            }}
                                            onSubmit={(values, {setSubmitting}) => {
                                                setTimeout(() => {
                                                    this.onSubmit(values);
                                                    setSubmitting(false);
                                                }, 400);
                                            }}
                                        >
                                            {({isSubmitting}) => (
                                                <Form
                                                    className={'w-full flex flex-col justify-center items-center'}>

                                                    <CInputGroup className="mb-3">
                                                        <CInputGroupPrepend>
                                                            <CInputGroupText>
                                                                <CIcon name="cil-user"/>
                                                            </CInputGroupText>
                                                        </CInputGroupPrepend>

                                                        <Field
                                                            type="text"
                                                            name="userName"
                                                            placeholder={'User Name'}
                                                            className={'form-control'}
                                                        />

                                                    </CInputGroup>

                                                    <ErrorMessage
                                                        name="userName"
                                                        render={(msg) => <div
                                                            className={'formik-error-message'}>{msg}</div>}
                                                    />

                                                    <CInputGroup className="mb-4">
                                                        <CInputGroupPrepend>
                                                            <CInputGroupText>
                                                                <CIcon name="cil-lock-locked"/>
                                                            </CInputGroupText>
                                                        </CInputGroupPrepend>

                                                        <Field
                                                            type="password"
                                                            name="password"
                                                            className={'form-control'}
                                                            autoComplete="current-password"
                                                            placeholder={'Password'}
                                                            tyle={'password'}
                                                        />
                                                    </CInputGroup>

                                                    <ErrorMessage
                                                        name="password"
                                                        render={(msg) => <div
                                                            className={'formik-error-message'}>{msg}</div>}
                                                    />

                                                    <CRow>
                                                        <CCol xs="6">
                                                            <button
                                                                type='submit'
                                                                className={'px-4 btn btn-primary'}>
                                                                Login
                                                            </button>
                                                        </CCol>
                                                        <CCol xs="6" className="text-right">
                                                            {/*<CButton color="link" className="px-0">Forgot*/}
                                                            {/*    password?</CButton>*/}
                                                        </CCol>
                                                    </CRow>

                                                </Form>
                                            )}
                                        </Formik>


                                        {/*</CForm>*/}
                                    </CCardBody>
                                </CCard>
                            </CCardGroup>
                        </CCol>
                    </CRow>
                </CContainer>

                <span className={'powered-by'}>

                    {/*Powered by*/}
                    {/*<a href="https://itechro.com/" target="_blank"> <CImg*/}
                    {/*    src={itechro}*/}
                    {/*/></a>*/}
                </span>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
            submitLogin: userActions.submitLogin,
        },
        dispatch);
}

export default connect(null, mapDispatchToProps)(Login);
