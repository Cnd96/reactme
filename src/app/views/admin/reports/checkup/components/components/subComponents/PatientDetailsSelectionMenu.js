import React from 'react';
import CustomCheckBox from "../../../../../../common/CustomCheckBox";
import * as Actions from "../../store/actions/checkup.report.generate.actions";
import {useDispatch, useSelector} from "react-redux";

const PatientDetailsSelectionMenu = () => {

    const dispatch = useDispatch();
    const checkupReportData = useSelector(({checkupReport}) => checkupReport.checkupReport);

    return (
        <div className='privilege-scroll-section'>
            <div className={'privilege-main-category-section'}>
                <div className={'privilege-category-name'}>
                    <h5>Include</h5>
                </div>

                <div className={'privilege-category-section'} style={{marginLeft: '5%'}}>
                    <div>

                        <div className={'privilege-checkbox'}>
                            <CustomCheckBox
                                id={'patientSocialHabits'}
                                name={'patientSocialHabits'}
                                value={{includeSocialHabits: true}}
                                label={'Patient Social Habits'}
                                checked={checkupReportData.includeSocialHabitData}
                                onCheckChange={(e, data) => {
                                    dispatch(Actions.setIncludeSocialHabits(e.target.checked));
                                }
                                }
                            />
                        </div>


                        <div className={'privilege-checkbox'}>
                            <CustomCheckBox
                                id={'familyMedicalHistory'}
                                name={'familyMedicalHistory'}
                                value={{includeFamilyMedicalHistory: true}}
                                label={'Patient Family Medical History'}
                                checked={checkupReportData.includeFamilyHistory}
                                onCheckChange={(e, data) => {
                                    dispatch(Actions.setIncludeFamilyHistory(e.target.checked));
                                }}
                            />
                        </div>

                        <div className={'privilege-checkbox'}>
                            <CustomCheckBox
                                id={'dietaryHabits'}
                                name={'dietaryHabits'}
                                value={{includeDietaryHabits: true}}
                                label={'Dietary Habits'}
                                checked={checkupReportData.includeDietaryHabits}
                                onCheckChange={(e, data) => {
                                    dispatch(Actions.setIncludeDietaryHabits(e.target.checked));
                                }}
                            />
                        </div>

                        <div className={'privilege-checkbox'}>
                            <CustomCheckBox
                                id={'physicalActivities'}
                                name={'physicalActivities'}
                                value={{includePhysicalActivities: true}}
                                label={'Physical Activities'}
                                checked={checkupReportData.includePhysicalActivities}
                                onCheckChange={(e, data) => {
                                    dispatch(Actions.setIncludePhysicalActivities(e.target.checked));
                                }}
                            />
                        </div>

                        {/*<div className={'privilege-checkbox'}>*/}
                        {/*    <CustomCheckBox*/}
                        {/*        id={'instruction'}*/}
                        {/*        name={'instruction'}*/}
                        {/*        value={{includeInstruction: true}}*/}
                        {/*        label={'Instruction'}*/}
                        {/*        checked={checkupReportData.includeInstruction}*/}
                        {/*        onCheckChange={(e, data) => {*/}
                        {/*            dispatch(Actions.setIncludeInstruction(e.target.checked));*/}
                        {/*        }}*/}
                        {/*    />*/}
                        {/*</div>*/}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default PatientDetailsSelectionMenu;