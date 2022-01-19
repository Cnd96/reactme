import React, {Component} from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {bindActionCreators} from "redux";
import * as Action from "../../store/actions/index"
import {connect} from "react-redux";
import Constants from "../../../../../../../utils/Constants";
import * as userAction from "../../store/actions";
import customValidator from "../../../../../../../utils/ValidationUtil";
import {CCol, CFormGroup, CLabel, CRow, CSelect} from "@coreui/react";
import {
    getCommonStatusOptions,
    getCommonTitleOptions,
    getInputFieldClassNames
} from "../../../../../../../utils/FormUtils";


class UserAddEditForm extends Component {

    location = null;

    state = {
        userInit: {
            userName: '',
            title: 'MR',
            firstName: '',
            lastName: '',
            contactNo:'',
            password: '',
            passwordConfirm: '',
            email: '',
            status: 'ACT',
            userType: '',
        },
    };

    componentDidMount() {
        this.setInitialValues();
    }

    componentWillUnmount() {
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.user !== prevProps.user) {
            this.setInitialValues();
        }
    }

    setInitialValues = () => {
        const {user} = this.props;
        let userInit = {
            userName: user.userName ? user.userName : '',
            title: user.title ? user.title : Constants.TITLE_CONST.MR,
            firstName: user.firstName ? user.firstName : '',
            lastName: user.lastName ? user.lastName : '',
            contactNo: user.contactNo ? user.contactNo : '',
            password: user.password ? user.password : '',
            passwordConfirm: user.passwordConfirm ? user.passwordConfirm : '',
            email: user.email ? user.email : '',
            userType: user.userType ? user.userType : '',
            status: user.status ? user.status : Constants.STATUS_CONST.ACT
        };

        this.setState({
            userInit: userInit,

        }, () => {
            this.onCustomValidation(userInit);
        })
    };

    onCustomValidation = (values) => {
        const {onFormChange} = this.props;

        let validate = customValidator(values, this.getValidations());

        this.passwordMatchValidation(
            values.password,
            values.passwordConfirm,
            validate
        );

        onFormChange({
            isValid: validate.isValid,
            values: values
        });

        return validate.errors;
    };

    passwordMatchValidation = (password, passwordConfirm, validateObj) => {
        const {isNew} = this.props;
        let isValid;
        let validationMessage = 'Password not match';

        if (!isNew) {
            return;
        }

        isValid = password === passwordConfirm;

        validateObj.isValid = validateObj.isValid && isValid;

        if (!isValid) {
            validateObj.errors.password = validateObj.errors.password ?
                (validateObj.errors.password + ', ' + validationMessage) : validationMessage;

            validateObj.errors.passwordConfirm = validateObj.errors.passwordConfirm ?
                (validateObj.errors.passwordConfirm + ', ' + validationMessage) : validationMessage;
        }
    };

    getValidations = () => {
        const {isNew} = this.props;
        let passwordValidations = {};
        let defaultValidations = {
            userName: {
                required: {message: 'Required'},
                maxLength: {value: 100}
            },

            firstName: {
                required: {message: 'Required'},
                maxLength: {value: 255}
            },

            lastName: {
                required: {message: 'Required'},
                maxLength: {value: 255}
            },

            email: {
                required: {message: 'Required'},
                maxLength: {value: 255},
                email: {}
            },
            contactNo: {
                required: {message: 'Required'},
                maxLength: {value: 12}
            }
        };

        if (isNew) {
            passwordValidations = {
                password: {
                    required: {message: 'Required'},
                    maxLength: {value: 100}
                },

                passwordConfirm: {
                    required: {message: 'Required'},
                    maxLength: {value: 100}
                }
            };
        }
        return Object.assign({}, defaultValidations, passwordValidations);
    };

    render() {

        const {isNew} = this.props;
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
                                            <CLabel htmlFor="userName" className={'required'}>User Name</CLabel>

                                            <Field
                                                type="text"
                                                name="userName"
                                                placeholder={'User Name'}
                                                className={getInputFieldClassNames(touched.userName, errors.userName)}
                                            />
                                        </CFormGroup>

                                        <ErrorMessage
                                            name="userName"
                                            render={(msg) => <div
                                                className={'formik-error-message'}>{msg}</div>}
                                        />
                                    </CCol>

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
                                            <CLabel htmlFor="firstName" className={'required'}>First Name</CLabel>

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
                                            <CLabel htmlFor="lastName" className={'required'}>Last Name</CLabel>

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
                                            <CLabel htmlFor="contactNo" className={'required'}>Contact Number</CLabel>

                                            <Field
                                                type="text"
                                                name="contactNo"
                                                placeholder={'Contact Number'}
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
                                            <CLabel htmlFor="email" className={'required'}>Email</CLabel>

                                            <Field
                                                type="text"
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

                                    {
                                        isNew && (
                                            <>
                                                <CCol sm="12" md="6" lg="3">
                                                    <CFormGroup>
                                                        <CLabel htmlFor="password"
                                                                className={'required'}>Password</CLabel>

                                                        <Field
                                                            type="password"
                                                            name="password"
                                                            placeholder={'Password'}
                                                            className={getInputFieldClassNames(touched.password, errors.password)}
                                                        />
                                                    </CFormGroup>

                                                    <ErrorMessage
                                                        name="password"
                                                        render={(msg) => <div
                                                            className={'formik-error-message'}>{msg}</div>}
                                                    />
                                                </CCol>

                                                <CCol sm="12" md="6" lg="3">
                                                    <CFormGroup>
                                                        <CLabel htmlFor="passwordConfirm" className={'required'}>Password
                                                            Confirm</CLabel>

                                                        <Field
                                                            type="password"
                                                            name="passwordConfirm"
                                                            placeholder={'Password Confirm'}
                                                            className={getInputFieldClassNames(touched.passwordConfirm, errors.passwordConfirm)}
                                                        />
                                                    </CFormGroup>

                                                    <ErrorMessage
                                                        name="passwordConfirm"
                                                        render={(msg) => <div
                                                            className={'formik-error-message'}>{msg}</div>}
                                                    />
                                                </CCol>
                                            </>
                                        )
                                    }

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
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        onFormChange: Action.onFormChnange,
        onCheckBoxChange: userAction.onRoleActionChange,

    }, dispatch)

};

const mapStateToProps = ({users}) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(UserAddEditForm)
