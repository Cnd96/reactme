import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Constants from "../../../../../../../../../utils/Constants";
import customValidator from "../../../../../../../../../utils/ValidationUtil";
import * as Action from "../store/actions/instruction.note.add.edit.action";
import {Form, Formik} from "formik";
import {CCol, CFormGroup, CLabel, CRow} from "@coreui/react";
import {getInputFieldClassNames} from "../../../../../../../../../utils/FormUtils";
import { NextButton, PrevButton, SaveButton } from "../../../../../../../common/NextPrevButtonGroup";
import {setStorageItem} from "../../../../../../../../../utils/StorageUtils";

const getValidations = () => {
    return {
        status: {
            required: {message: 'Required'},
        }
    };
};

const initData = {
    instructionNoteID: Constants.STORAGE.INSTRUCTION_NOTE_ID ? Constants.STORAGE.INSTRUCTION_NOTE_ID : '',
    instructionNote: '',
    indication: '',
    procedure: '',
    postop: '',
    status: Constants.STATUS_CONST.ACT
};

const generateSaveObject = (checkupData, instructionNoteData) => {
    return Object.assign({}, {status: Constants.STATUS_CONST.ACT}, {
        instructionNoteID: instructionNoteData.instructionNoteID,
        instructionNote: instructionNoteData.instructionNote,
        indication: instructionNoteData.indication,
        procedure: instructionNoteData.procedure,
        postop: instructionNoteData.postop,
    }, {checkupID: checkupData.checkup ? checkupData.checkup.checkupID : null});
};

const InstructionAddEditForm = ({setPageIndex, nextPageIndex, prevPageIndex}) => {
    const dispatch = useDispatch();
    const [instructionNoteForm, setInstructionNoteForm] = useState(initData);
    const checkupData = useSelector(({checkup}) => checkup.checkupAddEdit);
    const instructionNoteData = useSelector(({InstructionNote}) => InstructionNote.instructionNoteAddEdit);

    useEffect(() => {
        let instructionNoteID = instructionNoteData ? instructionNoteData.instructionNoteID : initData.instructionNoteID;
        let instructionNote = instructionNoteData ? instructionNoteData.instructionNote : initData.instructionNote;
        let indication = instructionNoteData ? instructionNoteData.indication : initData.indication;
        let procedure = instructionNoteData ? instructionNoteData.procedure : initData.procedure;
        let postop = instructionNoteData ? instructionNoteData.postop : initData.postop;
        setInstructionNoteForm({
            instructionNoteID: instructionNoteID,
            instructionNote: instructionNote,
            indication: indication,
            procedure: procedure,
            postop: postop
        });
    }, [dispatch, instructionNoteData.indication, instructionNoteData.procedure, instructionNoteData.postop]);

    const onCustomValidation = (name, value) => {
        let validate = customValidator({[name]: value}, getValidations());
        dispatch(Action.onFormChange({
            isValid: validate.isValid,
            [name]: value
        }));
        return validate.errors;
    };

    const onChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        onCustomValidation(name, value);
        setInstructionNoteForm({...instructionNoteForm, [name]: value});
    };

    const saveFunction = (isNext) => {
        let saveObject = generateSaveObject(checkupData, instructionNoteData);
        console.log(saveObject);
        if (saveObject.checkupID) {
            dispatch(Action.saveOrUpdateInstructionNote(saveObject)).then(response => {
                setStorageItem(Constants.STORAGE.INSTRUCTION_NOTE_ID, response.payload.instructionNoteID);
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
                initialValues={instructionNoteForm}
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

                                {/*<CCol sm="12">*/}
                                {/*    <CFormGroup>*/}
                                {/*        <CLabel htmlFor="instructionNote" className={'required'}>Instruction*/}
                                {/*            Note</CLabel>*/}
                                {/*        <textarea*/}
                                {/*            rows="10" cols="120"*/}
                                {/*            name="instructionNote"*/}
                                {/*            value={instructionNoteForm.instructionNote}*/}
                                {/*            placeholder={'Instruction Note'}*/}
                                {/*            onChange={onChange}*/}
                                {/*            className={getInputFieldClassNames(touched.instructionNote, errors.instructionNote)}*/}
                                {/*        />*/}
                                {/*    </CFormGroup>*/}

                                {/*</CCol>*/}

                                <CCol sm="12">
                                    <CFormGroup>
                                        <CLabel htmlFor="indication" className={'required'}>Indication</CLabel>
                                        <textarea
                                            rows="5" cols="120"
                                            name="indication"
                                            value={instructionNoteForm.indication}
                                            placeholder={'Indication'}
                                            onChange={onChange}
                                            className={getInputFieldClassNames(touched.indication, errors.indication)}
                                        />
                                    </CFormGroup>

                                </CCol>

                                <CCol sm="12">
                                    <CFormGroup>
                                        <CLabel htmlFor="procedure" className={'required'}>Procedure</CLabel>
                                        <textarea
                                            rows="5" cols="120"
                                            name="procedure"
                                            value={instructionNoteForm.procedure}
                                            placeholder={'Procedure'}
                                            onChange={onChange}
                                            className={getInputFieldClassNames(touched.procedure, errors.procedure)}
                                        />
                                    </CFormGroup>

                                </CCol>

                                <CCol sm="12">
                                    <CFormGroup>
                                        <CLabel htmlFor="postop" className={'required'}>Post op</CLabel>
                                        <textarea
                                            rows="5" cols="120"
                                            name="postop"
                                            value={instructionNoteForm.postop}
                                            placeholder={'Post op'}
                                            onChange={onChange}
                                            className={getInputFieldClassNames(touched.postop, errors.postop)}
                                        />
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

export default InstructionAddEditForm;