import React, {useEffect, useState} from 'react';
import StepperHeader from "./headerComponents/StepperHeader";
import {CButton, CCard, CCardBody, CCol, CRow, CTooltip} from "@coreui/react";
import RegisterPatientBase from "./stepComponents/registerPatient/RegisterPatientBase";
import CreateCheckUpBase from "./stepComponents/createCheckUp/CreateCheckUpBase";
import SelectSocialHabits from "./stepComponents/selectSocialHabit/SelectSocialHabits";
import SelectFamilyHistory from "./stepComponents/selectFamilyHistory/SelectFamilyHistory";
import SelectDiagnosis from "./stepComponents/selectDiagnosis/SelectDiagnosis";
import {getStorageItem, removeStorageItem} from "../../../../../../utils/StorageUtils";
import Constants from "../../../../../../utils/Constants";
import * as PatientActions from './stepComponents/registerPatient/store/actions';
import * as CheckupActions from './stepComponents/createCheckUp/store/action'
import * as Action from './stepComponents/createCheckUp/store/action'
import {useDispatch} from "react-redux";
import MedicalTest from "./stepComponents/medicalTests/MedicalTest";
import CIcon from "@coreui/icons-react";
import CreateInstructionNote from "./stepComponents/createInstructionNote/CreateInstructionNote";
import SelectDietaryHabit from "./stepComponents/selectDietaryHabits/SelectDietaryHabit";
import SelectPhysicalActivities from "./stepComponents/selectPhysicalActivities/SelectPhysicalActivities";
import OtherLettersBase from "./stepComponents/otherLetters/OtherLettersBase";
import SelectPrescription from "./stepComponents/selectPrescription/SelectPrescription";
import withReducer from "../../../../../store/withReducer";
import reducer from "./stepComponents/createCheckUp/store/reducer";
import PatientComplainBase from "./stepComponents/patientComplain/components/PatientComplainBase";
import AllergyHistoryBase from "./stepComponents/allergyHistory/components/AllergyHistoryBase";
import DetailsBar from "./details/DetailsBar";

const StepperBase = () => {

    let dispatch = useDispatch();
    const [pageIndex, setPageIndex] = useState(0);

    useEffect(() => {
        let checkupID = getStorageItem(Constants.STORAGE.CHECKUP_ID);
        if (checkupID) {
            dispatch(Action.getCheckupDTOByID(checkupID))
        } else {
            dispatch(CheckupActions.resetCheckupData());
        }
        return (() => {
            dispatch(Action.reset());
        })
    }, []);

    const resetScreen = () => {
        setPageIndex(0);
        removeStorageItem(Constants.STORAGE.PATIENT_ID);
        removeStorageItem(Constants.STORAGE.CHECKUP_ID);
        removeStorageItem(Constants.STORAGE.INSTRUCTION_NOTE_ID);
        dispatch(PatientActions.onResetPatientData());
        dispatch(CheckupActions.resetCheckupData());
    };

    useEffect(() => {
        return (() => {
            dispatch(PatientActions.onResetPatientData());
            dispatch(CheckupActions.resetCheckupData());
        })
    }, []);

    return (
        <>


            {/*<a target="_blank"> <CImg*/}
            {/*    src={icon}*/}
            {/*/></a>*/}

            {/*<a target="_blank"> <CImg*/}
            {/*    src={icon2}*/}
            {/*/></a>*/}

            <StepperHeader pageIndex={pageIndex} setPageIndex={setPageIndex}/>

            <div>
                <CRow>
                    <CCol xs="12">
                        <CCard>
                            <CCardBody>
                                <CRow>
                                    {
                                        pageIndex != Constants.PAGE_INDEXES.RegisterPatientBase && <DetailsBar/>
                                    }
                                </CRow>
                                {
                                    pageIndex === Constants.PAGE_INDEXES.RegisterPatientBase &&
                                    <RegisterPatientBase
                                        setPageIndex={setPageIndex}
                                        nextPageIndex={Constants.PAGE_INDEXES.PatientComplainBase}
                                    />
                                }
                                {
                                    pageIndex === Constants.PAGE_INDEXES.PatientComplainBase &&
                                    <PatientComplainBase
                                        setPageIndex={setPageIndex}
                                        nextPageIndex={Constants.PAGE_INDEXES.SelectFamilyHistory}
                                        prevPageIndex={Constants.PAGE_INDEXES.RegisterPatientBase}
                                    />
                                }

                                {
                                    pageIndex === Constants.PAGE_INDEXES.SelectFamilyHistory &&
                                    <SelectFamilyHistory
                                        setPageIndex={setPageIndex}
                                        nextPageIndex={Constants.PAGE_INDEXES.SelectSocialHabits}
                                        prevPageIndex={Constants.PAGE_INDEXES.PatientComplainBase}
                                    />
                                }

                                {
                                    pageIndex === Constants.PAGE_INDEXES.SelectSocialHabits &&
                                    <SelectSocialHabits
                                        setPageIndex={setPageIndex}
                                        nextPageIndex={Constants.PAGE_INDEXES.CreateCheckUpBase}
                                        prevPageIndex={Constants.PAGE_INDEXES.SelectFamilyHistory}
                                    />
                                }

                                {
                                    pageIndex === Constants.PAGE_INDEXES.CreateCheckUpBase &&
                                    <CreateCheckUpBase
                                        setPageIndex={setPageIndex}
                                        nextPageIndex={Constants.PAGE_INDEXES.MedicalTest}
                                        prevPageIndex={Constants.PAGE_INDEXES.SelectSocialHabits}
                                    />
                                }
                                {
                                    pageIndex === Constants.PAGE_INDEXES.MedicalTest &&
                                    <MedicalTest
                                        setPageIndex={setPageIndex}
                                        nextPageIndex={Constants.PAGE_INDEXES.SelectDiagnosis}
                                        prevPageIndex={Constants.PAGE_INDEXES.CreateCheckUpBase}
                                    />
                                }
                                {
                                    pageIndex === Constants.PAGE_INDEXES.SelectDiagnosis &&
                                    <SelectDiagnosis
                                        setPageIndex={setPageIndex}
                                        nextPageIndex={Constants.PAGE_INDEXES.CreateInstructionNote}
                                        prevPageIndex={Constants.PAGE_INDEXES.MedicalTest}
                                    />
                                }
                                {
                                    pageIndex === Constants.PAGE_INDEXES.CreateInstructionNote &&
                                    <CreateInstructionNote
                                        setPageIndex={setPageIndex}
                                        nextPageIndex={Constants.PAGE_INDEXES.SelectPrescription}
                                        prevPageIndex={Constants.PAGE_INDEXES.MedicalTest}
                                    />
                                }
                                {
                                    pageIndex === Constants.PAGE_INDEXES.SelectPrescription &&
                                    <SelectPrescription
                                        setPageIndex={setPageIndex}
                                        nextPageIndex={Constants.PAGE_INDEXES.SelectDietaryHabit}
                                        prevPageIndex={Constants.PAGE_INDEXES.CreateInstructionNote}
                                    />
                                }
                                {
                                    pageIndex === Constants.PAGE_INDEXES.SelectDietaryHabit &&
                                    <SelectDietaryHabit
                                        setPageIndex={setPageIndex}
                                        nextPageIndex={Constants.PAGE_INDEXES.SelectPhysicalActivities}
                                        prevPageIndex={Constants.PAGE_INDEXES.SelectPrescription}
                                    />
                                }
                                {
                                    pageIndex === Constants.PAGE_INDEXES.SelectPhysicalActivities &&
                                    <SelectPhysicalActivities
                                        setPageIndex={setPageIndex}
                                        nextPageIndex={Constants.PAGE_INDEXES.OtherLettersBase}
                                        prevPageIndex={Constants.PAGE_INDEXES.SelectDietaryHabit}
                                    />
                                }
                                {/*{*/}
                                {/*    pageIndex === 9 && <SelectFollowUp setPageIndex={setPageIndex}/>*/}
                                {/*}*/}
                                {/*{*/}
                                {/*    pageIndex === 10 && <SelectFitToWork setPageIndex={setPageIndex}/>*/}
                                {/*}*/}
                                {/*{*/}
                                {/*    pageIndex === 11 && <PatientSummeryBase/>*/}
                                {/*}*/}

                                {
                                    pageIndex === Constants.PAGE_INDEXES.OtherLettersBase && <OtherLettersBase/>
                                }
                                {
                                    pageIndex === Constants.PAGE_INDEXES.AllergyHistoryBase &&
                                    <AllergyHistoryBase
                                        setPageIndex={setPageIndex}
                                        prevPageIndex={Constants.PAGE_INDEXES.OtherLettersBase}
                                    />
                                }
                            </CCardBody>
                        </CCard>
                    </CCol>
                </CRow>
            </div>
            <div>
                <CCol xs="12">
                    <CTooltip
                        content={'Reset Flow'}
                        placement={'left-start'}
                    >
                        <CButton
                            onClick={() => {
                                resetScreen();
                            }}
                            variant="outline"
                            color="secondary"
                            className='custom-button'
                        >
                        <span>
                            <CIcon
                                size={'lg'}
                                name={'cil-sync'}
                                style={{marginRight: '5px'}}
                            />
                        </span>
                            Reset
                        </CButton>
                    </CTooltip>

                    <CTooltip
                        content={'Add New Patient'}
                        placement={'left-start'}
                    >
                        <CButton
                            color="success" variant="outline"
                            onClick={() => {
                                resetScreen();
                            }}

                            className='custom-button'
                        >
                        <span>
                            <CIcon
                                size={'lg'}
                                name={'cil-user-follow'}
                                style={{marginRight: '5px'}}
                            />
                        </span>
                            Add New
                        </CButton>
                    </CTooltip>
                </CCol>
            </div>
        </>
    );
};

export default withReducer('checkup', reducer)(StepperBase);