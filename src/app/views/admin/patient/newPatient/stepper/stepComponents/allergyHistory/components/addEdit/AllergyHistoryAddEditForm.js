import React, {useEffect, useState} from 'react';
import Constants from "../../../../../../../../../../utils/Constants";
import {Field, Form, Formik} from "formik";
import {CButton, CCol, CFormGroup, CLabel, CRow, CTooltip} from "@coreui/react";
import {getConstantValueForSearch, getInputFieldClassNames} from "../../../../../../../../../../utils/FormUtils";
import {useDispatch, useSelector} from "react-redux";
import * as Action from "../../store/actions/index";
import {getStorageItem, setStorageItem} from "../../../../../../../../../../utils/StorageUtils";
import customValidator from "../../../../../../../../../../utils/ValidationUtil";
import withReducer from "../../../../../../../../../store/withReducer";
import reducer from "../../store/reducers";
import {getPagedDataFromState, trimData} from "../../../../../../../../../../utils/DataExtractHelper";

const getValidations = () => {
    return {
        status: {
            required: {message: 'Required'},
        },
        allergyDescription: {
            required: {message: 'Required'}
        }
    };
};

const initValues = {
    allergyHistoryID: '',
    patientID: '',
    allergyDescription: '',
    status: Constants.STATUS_CONST.ACT
};

const generateSaveObject = (data) => {
    let allergyHistory = data.allergyHistory;
    let patientID = getStorageItem(Constants.STORAGE.PATIENT_ID);
    let saveObj = Object.assign({},
        {...allergyHistory},
        data.formData.values,
        {status: Constants.STATUS_CONST.ACT},
        {allergyHistoryID: allergyHistory.allergyHistoryID},
        {patientID}
    );
    return trimData(saveObj);
};

const AllergyHistoryAddEditForm = ({setPageIndex, nextPageIndex, prevPageIndex}) => {
    const dispatch = useDispatch();
    const data = useSelector(({allergyHistory}) => allergyHistory.allergyHistoryAddEdit);
    const searchStoreData = useSelector(({allergyHistory}) => allergyHistory.allergyHistorySearch);

    const [allergyHistory, setAllergyHistory] = useState(initValues);

    useEffect(() => {
        let allergyHistory = data.allergyHistory;
        let initData = {
            allergyHistoryID: allergyHistory.allergyHistoryID ? allergyHistory.allergyHistoryID : initValues.allergyHistoryID,
            patientID: allergyHistory.patientID ? allergyHistory.patientID : initValues.patientID,
            allergyDescription: allergyHistory.allergyDescription ? allergyHistory.allergyDescription : initValues.allergyDescription,
            status: allergyHistory.status ? allergyHistory.status : initValues.status
        };
        setAllergyHistory(initData);
    }, [dispatch, data.allergyHistory]);

    useEffect(() => {
        let allergyHistory = data.allergyHistory;
        let initData = {
            allergyHistoryID: allergyHistory.allergyHistoryID ? allergyHistory.allergyHistoryID : initValues.allergyHistoryID,
            patientID: allergyHistory.patientID ? allergyHistory.patientID : initValues.patientID,
            allergyDescription: allergyHistory.allergyDescription ? allergyHistory.allergyDescription : initValues.allergyDescription,
            status: allergyHistory.status ? allergyHistory.status : initValues.status
        };
        onCustomValidation(initData)
    }, [data.allergyHistory]);

    useEffect(() => {
        return (
            () => {
                dispatch(Action.onResetForm())
            }
        );
    }, []);


    const saveFunction = () => {
        let saveObject = generateSaveObject(data);
        if (saveObject.patientID) {
            dispatch(Action.saveOrUpdateAllergyHistory(saveObject)).then(response => {
                setStorageItem(Constants.STORAGE.ALLERGY_HISTORY_ID, response.payload.allergyHistoryID);
                dispatch(Action.onResetForm())
            })
        }
        setPageIndex(nextPageIndex);
    };

    const update = () => {
        let saveObject = generateSaveObject(data);
        dispatch(Action.saveOrUpdateAllergyHistoryWithMessage(saveObject)).then(
            re => {
                onSearch();
            }
        )
    };

    let onSearch = () => {
        let pageInfo = searchStoreData.pageInfo;
        let formData = searchStoreData.searchData;
        let pageData = getPagedDataFromState(pageInfo);
        let searchData = {
            ...pageData,
            ...formData,
            patientID: getStorageItem(Constants.STORAGE.PATIENT_ID),
            status: getConstantValueForSearch(formData.status, Constants.STATUS_CONST.ACT)
        };
        dispatch(Action.getPagedAllergyHistory(searchData));
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

    return (
        <>
            <Formik
                enableReinitialize={true}
                initialValues={allergyHistory}
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
                                            htmlFor="allergyDescription"
                                        >
                                            Allergy History
                                            <span className="margin-left-10">
                                                <React.Fragment>

                                                    {
                                                        data && data.allergyHistory && data.allergyHistory.allergyHistoryID &&

                                                        <CTooltip
                                                            content={'Update Allergy'}
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
                                                        data && data.allergyHistory && !data.allergyHistory.allergyHistoryID &&

                                                        <CTooltip
                                                            content={'Save Allergy'}
                                                            placement={'left-start'}
                                                        >
                                                            <CButton
                                                                type="button"
                                                                disabled={!data.formData.isValid}
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
                                            name="allergyDescription"
                                            placeholder={'Allergy Description'}
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


export default withReducer('allergyHistory', reducer)(AllergyHistoryAddEditForm);
