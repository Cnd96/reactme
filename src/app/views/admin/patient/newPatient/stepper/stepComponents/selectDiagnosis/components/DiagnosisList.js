import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import * as _ from "lodash";
import * as Action from "../store/actions"
import * as CheckupAction from "../../createCheckUp/store/action"
import Constants from "../../../../../../../../../utils/Constants";
import Diagnosis from "./Diagnosis";
import NextPrevButtonGroup, { NextButton, PrevButton, SaveButton } from "../../../../../../../common/NextPrevButtonGroup";

const generateSaveObject = (checkupData, diagnosisData) => {

    let removedIDList = _.difference(diagnosisData.currentDiagnosisIDs, diagnosisData.selectedDiagnosisIDs);
    let addedIDList = _.difference(diagnosisData.selectedDiagnosisIDs, diagnosisData.currentDiagnosisIDs);

    // let diagnosisIDList = diagnosisData.selectedDiagnosisIDs;

    return Object.assign({}, {
        checkupID: checkupData.checkup ? checkupData.checkup.checkupID : null,
        removedIDList: removedIDList,
        diagnosisIDList: addedIDList
    });
};

const DiagnosisList = ({setPageIndex, nextPageIndex, prevPageIndex}) => {

    const dispatch = useDispatch();
    const diagnosisData = useSelector(({selectDiagnosis}) => selectDiagnosis.diagnosisSelect);
    const checkupData = useSelector(({checkup}) => checkup.checkupAddEdit);
    const [activeDiagnosis, setActiveDiagnosis] = useState([]);


    useEffect(() => {
        dispatch(Action.setCurrentDiagnosisIDs(checkupData.checkup.diagnosisList));
    }, [dispatch, checkupData.checkup.diagnosisList]);

    useEffect(() => {
        let activeDiagnosis = diagnosisData.diagnosis.filter(diagnosis => diagnosis.status === Constants.STATUS_CONST.ACT);
        activeDiagnosis = activeDiagnosis.length > 0 ? activeDiagnosis : [];
        setActiveDiagnosis(activeDiagnosis);
    }, [dispatch, diagnosisData.diagnosis]);

    const saveFunction = (isNext) => {
        let saveObject = generateSaveObject(checkupData, diagnosisData);
        if (saveObject.removedIDList.length > 0 || saveObject.diagnosisIDList.length > 0) {
            dispatch(Action.saveOrUpdateCheckupWithDiagnosis(saveObject)).then(response => {
                dispatch(CheckupAction.onSetCheckup(response.payload));
                isNext && setPageIndex(nextPageIndex);
            })
        } else {
            isNext && setPageIndex(nextPageIndex);
        }
    };

    return (

        <div className='privilege-scroll-section'>
            <div className='d-flex flex-row flex-wrap  justify-content-end'>
                <PrevButton isValid={true} onClickHandler={ () => setPageIndex(prevPageIndex) } />
                <SaveButton isValid={true} onClickHandler={ () => saveFunction(false) } />
                <NextButton isValid={true} onClickHandler={ () => saveFunction(true) } />
            </div>
            <div className={'privilege-main-category-section'}>
                <div className={'privilege-category-name'}>
                    <h5>Diagnosis </h5>
                </div>

                <div className={'privilege-category-section'} style={{marginLeft: '5%'}}>
                    <div>
                        {
                            activeDiagnosis.map((diagnosis, index) => {
                                return <Diagnosis key={index} diagnosis={diagnosis}/>
                            })
                        }
                    </div>
                </div>
            </div>

        </div>
    );
};

export default DiagnosisList;