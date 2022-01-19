import React, {useEffect, useState} from 'react';
import {ErrorMessage, Form, Formik} from "formik";
import {CCol, CFormGroup, CLabel, CRow} from "@coreui/react";
import {getInputFieldClassNames} from "../../../../../../../../../utils/FormUtils";
import * as Action from "../store/actions/fitness.note.add.edit.action";
import Constants from "../../../../../../../../../utils/Constants";
import customValidator from "../../../../../../../../../utils/ValidationUtil";
import {useDispatch, useSelector} from "react-redux";
import {setStorageItem} from "../../../../../../../../../utils/StorageUtils";
import NextPrevButtonGroup from "../../../../../../../common/NextPrevButtonGroup";

const getValidations = () => {
    return {
        status: {
            required: {message: 'Required'},
        }
    };
};

const generateSaveObject = (checkupData, fitnessNoteData) => {
    return Object.assign({}, {...fitnessNoteData.fitnessNote}, {...fitnessNoteData.formData.values}, {checkupID: checkupData.checkup ? checkupData.checkup.checkupID : null});
};

const FitnessNoteAddEditFrom = ({setPageIndex}) => {

    const dispatch = useDispatch();
    const [fitnessNoteForm, setFitnessNoteForm] = useState({fitnessNote: '', status: Constants.STATUS_CONST.ACT});
    const checkupData = useSelector(({checkup}) => checkup.checkupAddEdit);
    const fitnessNoteData = useSelector(({fitnessNote}) => fitnessNote.fitnessNoteAddEdit);

    useEffect(() => {
        let fitnessNote = fitnessNoteData.fitnessNote;
        setFitnessNoteForm(fitnessNote);
    }, [fitnessNoteData.fitnessNote]);

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
        setFitnessNoteForm({...fitnessNoteForm, [name]: value});
    };

    const saveFunction = () => {
        let saveObject = generateSaveObject(checkupData, fitnessNoteData);
        if (saveObject.fitnessNote) {
            dispatch(Action.saveOrUpdateFitnessNote(saveObject)).then(response => {
                setStorageItem(Constants.STORAGE.FITNESS_NOTE_ID, response.payload.fitnessNoteID);
            })
        }
        setPageIndex(9);
    };

    return (
        <>
            <Formik
                enableReinitialize={true}
                initialValues={fitnessNoteForm}
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
                                        <CLabel htmlFor="fitnessNote" className={'required'}>Fitness Note</CLabel>
                                        <textarea
                                            rows="10" cols="120"
                                            name="fitnessNote"
                                            value={fitnessNoteForm.fitnessNote}
                                            placeholder={'Fitness Note'}
                                            onChange={onChange}
                                            className={getInputFieldClassNames(touched.fitnessNote, errors.fitnessNote)}
                                        />
                                    </CFormGroup>

                                    <ErrorMessage
                                        name="fitnessNote"
                                        render={(msg) => <div
                                            className={'formik-error-message'}>{msg}</div>}
                                    />
                                </CCol>
                            </CRow>
                        </Form>
                    );
                }}
            </Formik>

            <NextPrevButtonGroup setPageIndex={setPageIndex} prevPageIndex={7} saveFunction={saveFunction} isValid={true}/>
        </>
    );
};

export default FitnessNoteAddEditFrom;