import React from 'react';
import {CButton, CImg, CTooltip} from "@coreui/react";
import {useSelector} from "react-redux";
import icon from '../../../../../../../assets/img/medical-record (1).png';
import icon3 from "../../../../../../../assets/img/icons/3.png";
import icon5 from "../../../../../../../assets/img/icons/5.png";
import icon10 from "../../../../../../../assets/img/icons/10.png";
import icon11 from "../../../../../../../assets/img/icons/11.png";
import icon12 from "../../../../../../../assets/img/icons/12.png";
import icon13 from "../../../../../../../assets/img/icons/13.png";
import icon14 from "../../../../../../../assets/img/icons/14.png";
import icon17 from "../../../../../../../assets/img/icons/17.png";
import icon19 from "../../../../../../../assets/img/icons/19.png";
import icon20 from "../../../../../../../assets/img/icons/20.png";
import icon22 from "../../../../../../../assets/img/icons/22.png";
import icon23 from "../../../../../../../assets/img/icons/23.png";
import icon24 from "../../../../../../../assets/img/icons/24.png";
import Constants from "../../../../../../../utils/Constants";

const validator = (patientData, checkupData) => {
    return patientData && patientData.patient.patientID && checkupData && checkupData.checkup.checkupID
};

const StepperHeader = ({pageIndex, setPageIndex}) => {

    const patientData = useSelector(({patient}) => patient ? patient.patientAddEdit : null);
    const checkupData = useSelector(({checkup}) => checkup ? checkup.checkupAddEdit : null);

    const actionKeyMap = [
        {
            index: Constants.PAGE_INDEXES.RegisterPatientBase,
            id: 'create',
            toolTip: 'Generate Patient Details',
            icon: icon11,
            action: () => {
                setPageIndex(Constants.PAGE_INDEXES.RegisterPatientBase);
            },
        },
        {
            index: Constants.PAGE_INDEXES.PatientComplainBase,
            id: 'patientComplain',
            toolTip: 'Patient Complain',
            icon: icon23,
            action: () => {
                if (patientData.patient.patientID) {
                    setPageIndex(Constants.PAGE_INDEXES.PatientComplainBase);
                }
            },
        },

        {
            index: Constants.PAGE_INDEXES.SelectFamilyHistory,
            id: 'family',
            toolTip: 'Family History',
            icon: icon5,
            action: () => {
                if (patientData.patient.patientID) {
                    setPageIndex(Constants.PAGE_INDEXES.SelectFamilyHistory);
                }
            },
        },

        {
            index: Constants.PAGE_INDEXES.SelectSocialHabits,
            id: 'habits',
            toolTip: 'Social Habits',
            icon: icon3,
            action: () => {
                if (patientData.patient.patientID) {
                    setPageIndex(Constants.PAGE_INDEXES.SelectSocialHabits);
                }
            },
        },
        {
            index: Constants.PAGE_INDEXES.CreateCheckUpBase,
            id: 'checkup',
            toolTip: 'Checkup Date',
            icon: icon10,
            action: () => {
                if (patientData.patient.patientID) {
                    setPageIndex(Constants.PAGE_INDEXES.CreateCheckUpBase);
                }
            },
        },
        {
            index: Constants.PAGE_INDEXES.MedicalTest,
            id: 'reports',
            toolTip: 'Medical Results',
            icon: icon12,
            action: () => {
                if (validator(patientData, checkupData)) {
                    setPageIndex(Constants.PAGE_INDEXES.MedicalTest);
                }
            },
        },
        {
            index: Constants.PAGE_INDEXES.SelectDiagnosis,
            id: 'problems',
            toolTip: 'Diagnosis/Problems',
            icon: icon13,
            action: () => {
                if (validator(patientData, checkupData)) {
                    setPageIndex(Constants.PAGE_INDEXES.SelectDiagnosis);
                }
            },
        },
        {
            index: Constants.PAGE_INDEXES.CreateInstructionNote,
            id: 'instruction',
            toolTip: 'Instruction',
            icon: icon14,
            action: () => {
                if (validator(patientData, checkupData)) {
                    setPageIndex(Constants.PAGE_INDEXES.CreateInstructionNote);
                }
            },
        },
        {
            index: Constants.PAGE_INDEXES.SelectPrescription,
            id: 'prescription',
            toolTip: 'RX',
            icon: icon17,
            action: () => {
                if (validator(patientData, checkupData)) {
                    setPageIndex(Constants.PAGE_INDEXES.SelectPrescription);
                }
            },
        },
        {
            index: Constants.PAGE_INDEXES.SelectDietaryHabit,
            id: 'diet',
            toolTip: 'Dietary Habits',
            icon: icon19,
            action: () => {
                if (validator(patientData, checkupData)) {
                    setPageIndex(Constants.PAGE_INDEXES.SelectDietaryHabit);
                }
            },
        },

        {
            index: Constants.PAGE_INDEXES.SelectPhysicalActivities,
            id: 'fitness',
            toolTip: 'Physical Activities',
            icon: icon20,
            action: () => {
                if (validator(patientData, checkupData)) {
                    setPageIndex(Constants.PAGE_INDEXES.SelectPhysicalActivities);
                }
            },
        },

        // {
        //     index: 9,
        //     id: 'followups',
        //     name: 'Follow Ups',
        //     icon: 'cil-alarm',
        //     action: () => {
        //         if (validator(patientData, checkupData)) {
        //             setPageIndex(9);
        //         }
        //     },
        // },

        // {
        //     index: 10,
        //     id: 'fitToWork',
        //     name: 'Fit To Work Category',
        //     icon: 'cil-check-alt',
        //     action: () => {
        //         if (validator(patientData, checkupData)) {
        //             setPageIndex(10);
        //         }
        //     },
        // },
        //
        // {
        //     index: 11,
        //     id: 'checkupSummery',
        //     name: 'Checkup Summery',
        //     icon: 'cil-book',
        //     action: () => {
        //         if (validator(patientData, checkupData)) {
        //             setPageIndex(11);
        //         }
        //     },
        // },

        {
            index: Constants.PAGE_INDEXES.OtherLettersBase,
            id: 'otherLetters',
            toolTip: 'Other Letters',
            icon: icon22,
            action: () => {
                if (validator(patientData, checkupData)) {
                    setPageIndex(Constants.PAGE_INDEXES.OtherLettersBase);
                }
            },
        },

        {
            index: Constants.PAGE_INDEXES.AllergyHistoryBase,
            id: 'allergyHistory',
            toolTip: 'Allergy History',
            icon: icon24,
            action: () => {
                if (patientData.patient.patientID) {
                    setPageIndex(Constants.PAGE_INDEXES.AllergyHistoryBase);
                }
            },
        }

    ];

    return (
        <div className="d-flex flex-row flex-wrap  justify-content-between">
            {
                actionKeyMap.map((button) => {
                    return (
                        <div key={button.id}
                             className='mr-1 mb-1 stepper-header-btn-wrapper'>
                            <CTooltip
                                content={button.toolTip}
                                placement="top"
                            >
                                <CButton
                                    id={button.id}
                                    color='light'
                                    className={'stepper-header-btn'}
                                    onClick={() => {
                                        button.action();
                                    }}
                                >
                                    <div
                                        className={`d-flex flex-column action-button main-tab-header ${button.index == pageIndex ? 'selected-tab-header' : ''}`}
                                    >
                                    <span>
                                         <a target="_blank">
                                             <CImg style={{height: '52px'}} src={button.icon} />
                                         </a>
                                        {/*<CIcon size={'lg'} name={button.icon}/>*/}
                                        {
                                            button.index < pageIndex &&
                                            <span className={'tab-header-ok-mark'}>
                                                <i className="fa fa-check-circle" aria-hidden="true"></i>
                                            </span>
                                        }
                                    </span>
                                    </div>
                                </CButton>
                            </CTooltip>

                        </div>
                    )
                })
            }
        </div>
    );
};

export default StepperHeader;
