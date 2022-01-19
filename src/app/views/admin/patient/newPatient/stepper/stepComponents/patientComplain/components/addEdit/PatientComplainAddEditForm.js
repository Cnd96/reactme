import React, {useEffect, useState} from 'react';
import Constants from "../../../../../../../../../../utils/Constants";
import {Field, Form, Formik} from "formik";
import {CButton, CCol, CFormGroup, CLabel, CRow, CTooltip} from "@coreui/react";
import {getConstantValueForSearch, getInputFieldClassNames} from "../../../../../../../../../../utils/FormUtils";
import { NextButton, PrevButton, SaveButton } from "../../../../../../../../common/NextPrevButtonGroup";
import {useDispatch, useSelector} from "react-redux";
import * as Action from "../../store/actions/index";
import {getStorageItem, setStorageItem} from "../../../../../../../../../../utils/StorageUtils";
import customValidator from "../../../../../../../../../../utils/ValidationUtil";
import withReducer from "../../../../../../../../../store/withReducer";
import reducer from "../../store/reducer";
import {getPagedDataFromState, trimData} from "../../../../../../../../../../utils/DataExtractHelper";

const getValidations = () => {
    return {
        status: {
            required: {message: 'Required'},
        },
        patientComplain: {
            required: {message: 'Required'},
        }
    };
};

const initValues = {
    patientComplainID: '',
    patientID: '',
    patientComplain: '',
    status: Constants.STATUS_CONST.ACT
};

const generateSaveObject = (data) => {
    let patientComplain = data.patientComplain;
    let patientID = getStorageItem(Constants.STORAGE.PATIENT_ID);
    let saveObj = Object.assign({},
        {...patientComplain},
        data.formData.values,
        {status: Constants.STATUS_CONST.ACT},
        {patientComplainID: patientComplain.patientComplainID},
        {patientID});

    return trimData(saveObj);
};

const PatientComplainAddEditForm = ({setPageIndex, nextPageIndex, prevPageIndex}) => {
    const dispatch = useDispatch();
    const data = useSelector(({patientComplain}) => patientComplain.patientComplainAddEdit);
    const searchReducerData = useSelector(({patientComplain}) => patientComplain.patientComplainSearch);
    const [patientComplain, setPatientComplain] = useState(initValues);

    useEffect(() => {
        let patientComplain = data.patientComplain;
        let initData = {
            patientComplainID: patientComplain.patientComplainID ? patientComplain.patientComplainID : initValues.patientComplainID,
            patientID: patientComplain.patientID ? patientComplain.patientID : initValues.patientID,
            patientComplain: patientComplain.patientComplain ? patientComplain.patientComplain : initValues.patientComplain,
            status: patientComplain.status ? patientComplain.status : initValues.status
        };
        setPatientComplain(initData);
    }, [dispatch, data.patientComplain]);

    useEffect(() => {
        let patientComplain = data.patientComplain;
        let initData = {
            patientComplainID: patientComplain.patientComplainID ? patientComplain.patientComplainID : initValues.patientComplainID,
            patientID: patientComplain.patientID ? patientComplain.patientID : initValues.patientID,
            patientComplain: patientComplain.patientComplain ? patientComplain.patientComplain : initValues.patientComplain,
            status: patientComplain.status ? patientComplain.status : initValues.status
        };
        onCustomValidation(initData);
    }, [data.patientComplain]);

    useEffect(() => {
        return (
            () => {
                dispatch(Action.onResetForm())
            }
        );
    }, []);

    const update = () => {
        let saveObject = generateSaveObject(data);
        dispatch(Action.saveOrUpdatePatientComplainWithMessage(saveObject)).then(res => {
            onSearch();
        });
    };

    let onSearch = () => {
        let pageInfo = searchReducerData.pageInfo;
        let formData = searchReducerData.searchData;
        let pageData = getPagedDataFromState(pageInfo);
        let searchData = {
            ...pageData,
            ...formData,
            patientID: getStorageItem(Constants.STORAGE.PATIENT_ID),
            status: getConstantValueForSearch(formData.status, Constants.STATUS_CONST.ACT)
        };
        dispatch(Action.getPagedPatientComplains(searchData));
    };

    const reset = () => {
        dispatch(Action.onResetForm())
    };

    const onCustomValidation = (values) => {

        let validate = customValidator(values, getValidations());
        dispatch(Action.onFormChange(
            {
                isValid: validate.isValid,
                values: values
            }));
        return validate.errors;
    };


    const saveFunction = (isNext) => {
        let saveObject = generateSaveObject(data);
        if (saveObject.patientID) {
            dispatch(Action.saveOrUpdatePatientComplain(saveObject)).then(response => {
                setStorageItem(Constants.STORAGE.PATIENT_COMPLAIN_ID, response.payload.patientComplainID);
                dispatch(Action.onResetForm())
            }).catch(error => {
                console.log(error);
            })
        }
        isNext && setPageIndex(nextPageIndex);
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
                initialValues={patientComplain}
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
                                        <CLabel
                                            htmlFor="patientComplain"
                                        >
                                            Patient Complain
                                            <span className="margin-left-10">
                                                <React.Fragment>
                                              {
                                                  data && data.patientComplain && data.patientComplain.patientComplainID &&
                                                  <CTooltip
                                                      content={'Update Complain'}
                                                      placement={'left-start'}
                                                  >
                                                      <CButton
                                                          disabled={!data.formData.isValid}
                                                          type="button"
                                                          onClick={(e) => {
                                                              e.preventDefault();
                                                              e.stopPropagation();
                                                              update()
                                                          }}
                                                          color="success"
                                                          className=" mr-2"
                                                      >
                                                          <i className='fa fa-floppy-o'></i>
                                                      </CButton>
                                                  </CTooltip>
                                              }

                                                    <CTooltip
                                                        content={'Reset'}
                                                        placement={'left-start'}
                                                    >
                                                        <CButton
                                                            type="button"
                                                            onClick={(e) => {
                                                                e.preventDefault();
                                                                e.stopPropagation();
                                                                reset()
                                                            }}
                                                            color="warning"
                                                            className=" mr-2"
                                                        >
                                                            <i className='fa fa-refresh'></i>
                                                        </CButton>
                                                    </CTooltip>

                                                    {
                                                        data && data.patientComplain && !data.patientComplain.patientComplainID &&
                                                        <CTooltip
                                                            content={'Save Complain'}
                                                            placement={'left-start'}
                                                        >
                                                            <CButton
                                                                disabled={!data.formData.isValid}
                                                                type="button"
                                                                onClick={(e) => {
                                                                    e.preventDefault();
                                                                    e.stopPropagation();
                                                                    update()
                                                                }}
                                                                color="info"
                                                                className=" mr-2"
                                                            >
                                                                <i className='fa fa-floppy-o'></i>
                                                            </CButton>
                                                        </CTooltip>
                                                    }
                                                </React.Fragment>
                                            </span>
                                        </CLabel>
                                        <Field
                                            rows="5" cols="120"
                                            name="patientComplain"
                                            placeholder={'Complain'}
                                            className={getInputFieldClassNames(touched.indication, errors.indication)}
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
        </>
    );
};


export default withReducer('patientComplain', reducer)(PatientComplainAddEditForm);
