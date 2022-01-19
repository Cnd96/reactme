import React, {useEffect, useState} from 'react';
import {Field, Form, Formik} from "formik";
import {CCol, CFormGroup, CRow} from "@coreui/react";
import {getInputFieldClassNames} from "../../../../../../../../../../utils/FormUtils";
import Constants from "../../../../../../../../../../utils/Constants";
import {useDispatch, useSelector} from "react-redux";
import withReducer from "../../../../../../../../../store/withReducer";
import reducer from "../store/reducers/index";
import customValidator from "../../../../../../../../../../utils/ValidationUtil";
import * as Actions from "../store/actions";

const getValidations = () => {
    return {
        status: {
            required: {message: 'Required'},
        }
    };
};

const initValues = {
    webCamImageID: '',
    documentStorageID: '',
    remark: '',
    status: Constants.STATUS_CONST.ACT
};

const WebCamImageAddEdit = ({saveFunction}) => {

    const [webCamImage, setWebCamImage] = useState(initValues);
    const webCamImageData = useSelector(({webCamImage}) => webCamImage.webCamImageAddEdit);
    const dispatch = useDispatch();

    useEffect(() => {
        let webCamImage = webCamImageData.webCamImage;
        let initData = {
            webCamImageID: webCamImage.webCamImageID ? webCamImage.webCamImageID : initValues.webCamImageID,
            documentStorageID: webCamImage.documentStorageID ? webCamImage.documentStorageID : initValues.documentStorageID,
            remark: webCamImage.remark ? webCamImage.remark : initValues.remark,
            status: webCamImage.status ? webCamImage.status : initValues.status
        };
        setWebCamImage(initData);
    }, [dispatch, webCamImageData.webCamImage]);


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
        <div>
            <Formik
                enableReinitialize={true}
                initialValues={webCamImage}
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
                                        <Field
                                            rows="5" cols="120"
                                            name="remark"
                                            placeholder={'Remark'}
                                            className={getInputFieldClassNames(touched.remark, errors.remark)}
                                            as='textarea'
                                        >
                                        </Field>
                                    </CFormGroup>
                                </CCol>
                            </CRow>
                        </Form>
                    );
                }}
            </Formik>
        </div>
    );
};

export default withReducer('webCamImage', reducer)(WebCamImageAddEdit);