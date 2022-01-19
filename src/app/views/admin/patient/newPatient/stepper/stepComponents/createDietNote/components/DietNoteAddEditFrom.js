import React, {useEffect, useState} from 'react';
import {ErrorMessage, Form, Formik} from "formik";
import {CCol, CFormGroup, CLabel, CRow} from "@coreui/react";
import {getInputFieldClassNames} from "../../../../../../../../../utils/FormUtils";
import Constants from "../../../../../../../../../utils/Constants";
import customValidator from "../../../../../../../../../utils/ValidationUtil";
import {useDispatch, useSelector} from "react-redux";
import * as Action from "../store/actions";
import {setStorageItem} from "../../../../../../../../../utils/StorageUtils";
import NextPrevButtonGroup from "../../../../../../../common/NextPrevButtonGroup";

const getValidations = () => {
    return {
        status: {
            required: {message: 'Required'},
        }
    };
};

const generateSaveObject = (checkupData, dietNoteData) => {
    return Object.assign({}, {...dietNoteData.dietNote}, {...dietNoteData.formData.values}, {checkupID: checkupData.checkup ? checkupData.checkup.checkupID : null});
};

const DietNoteAddEditFrom = ({setPageIndex}) => {
    const dispatch = useDispatch();
    const [dietNoteForm, setDietNoteForm] = useState({dietNote: ''});
    const checkupData = useSelector(({checkup}) => checkup.checkupAddEdit);
    const dietNoteData = useSelector(({dietNote}) => dietNote.dietNoteAddEdit);

    useEffect(() => {
        let dietNote = dietNoteData.dietNote;
        setDietNoteForm(dietNote);
    }, [dietNoteData.dietNote]);

    useEffect(() => {
        setDietNoteForm({dietNote: ''});
    }, [dispatch]);

    const onCustomValidation = (values) => {
        let validate = customValidator(values, getValidations());
        dispatch(Action.onFormChange({
            isValid: validate.isValid,
            values: values
        }));
        return validate.errors;
    };

    const onChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        onCustomValidation({[name]: value});
        setDietNoteForm({...dietNoteForm, [name]: value});
    };

    const saveFunction = () => {
        let saveObject = generateSaveObject(checkupData, dietNoteData);
        if (saveObject.dietNote) {
            dispatch(Action.saveOrUpdateDietNote(saveObject)).then(response => {
                setStorageItem(Constants.STORAGE.DIET_NOTE_ID, response.payload.dietNoteID);

            })
        }
        setPageIndex(8);
    };

    return (
        <>
            <Formik
                enableReinitialize={true}
                initialValues={dietNoteForm}
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
                                        <CLabel htmlFor="dietNote" className={'required'}>Diet Note</CLabel>

                                        <textarea
                                            rows="10" cols="100"
                                            name="dietNote"
                                            value={dietNoteForm.dietNote}
                                            placeholder={'Diet Note'}
                                            onChange={onChange}
                                            className={getInputFieldClassNames(touched.dietNote, errors.dietNote)}
                                        />
                                    </CFormGroup>

                                    <ErrorMessage
                                        name="dietNote"
                                        render={(msg) => <div
                                            className={'formik-error-message'}>{msg}</div>}
                                    />
                                </CCol>
                            </CRow>
                            <CRow>
                            </CRow>
                        </Form>
                    );
                }}
            </Formik>

            <NextPrevButtonGroup setPageIndex={setPageIndex} prevPageIndex={6} saveFunction={saveFunction} isValid={true}/>

        </>
    );
};


export default DietNoteAddEditFrom;