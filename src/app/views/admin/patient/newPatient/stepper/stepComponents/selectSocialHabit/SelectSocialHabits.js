import React, {useEffect} from 'react';
import * as PatientAction from "../registerPatient/store/actions";
import * as Action from "./store/actions";
import {useDispatch, useSelector} from "react-redux";
import withReducer from "../../../../../../../store/withReducer";
import reducer from "./store/reducers";
import SocialHabitsCategory from "./components/SocialHabitsCategory";
import * as _ from "lodash";
import {trimData} from "../../../../../../../../utils/DataExtractHelper";
import { NextButton, PrevButton, SaveButton } from "../../../../../../common/NextPrevButtonGroup";

const generateSaveObject = (socialHabits, patientData) => {

    let removedIDList = _.difference(socialHabits.prevSocialHabitIds, socialHabits.currentIDs);
    let addedIDList = _.difference(socialHabits.currentIDs, socialHabits.prevSocialHabitIds);
    return Object.assign({}, {
        socialHabitIDList: addedIDList,
        removedIDList: removedIDList
    }, {patientID: patientData.patientID ? patientData.patientID : null});
};

const SelectSocialHabits = ({setPageIndex, nextPageIndex, prevPageIndex}) => {

    let dispatch = useDispatch();
    const socialHabits = useSelector(({selectSocialHabits}) => selectSocialHabits.socialHabitSelect);
    const patientData = useSelector(({patient}) => patient.patientAddEdit);

    useEffect(() => {
        dispatch(Action.getSocialHabitCategories());
        dispatch(Action.setPatientSocialHabitIds(patientData.patient.socialHabits));

        return (() => {
            dispatch(Action.onResetPatientSocialHabits());
        })
    }, [dispatch]);

    const saveFunction = (isNext) => {
        let saveObj = generateSaveObject(socialHabits, patientData.patient);
        if (saveObj.removedIDList.length > 0 || saveObj.socialHabitIDList.length > 0) {
            dispatch(Action.saveOrUpdatePatientWithSocialHabits(trimData(saveObj))).then(response => {
                dispatch(PatientAction.setPatient(response.payload));
                isNext && setPageIndex(nextPageIndex);
            })
        } else {
            isNext && setPageIndex(nextPageIndex);
        }
    };

    return (
        <>
            {/* <NextPrevButtonGroup
                setPageIndex={setPageIndex}
                prevPageIndex={prevPageIndex}
                saveFunction={saveFunction}
                isValid={true}/> */}
            <div className='d-flex flex-row flex-wrap  justify-content-end'>
                <PrevButton isValid={true} onClickHandler={ () => setPageIndex(prevPageIndex) } />
                <SaveButton isValid={true} onClickHandler={ () => saveFunction(false) } />
                <NextButton isValid={true} onClickHandler={ () => saveFunction(true) } />
            </div>
            <h5>Social Habits</h5>
            {
                socialHabits.socialHabitCategories.map((socialHabitCategory, index) => {
                    return <SocialHabitsCategory key={index} socialHabitCategory={socialHabitCategory}/>
                })
            }
        </>
    );
};

export default withReducer('selectSocialHabits', reducer)(SelectSocialHabits);
