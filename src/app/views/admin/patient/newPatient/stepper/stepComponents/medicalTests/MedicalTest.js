import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import * as Action from "./store/actions/patient.add.medical.test.results.action";
import withReducer from "../../../../../../../store/withReducer";
import reducer from "./store/reducers";
import MedicalTestList from "./components/MedicalTestList";
import { NextButton, PrevButton, SaveButton } from "../../../../../../common/NextPrevButtonGroup";
import * as CheckupAction from "../createCheckUp/store/action/checkup.app.add.edit.action";

const generateSaveObject = (checkupData, patientMedicalTestsData) => {
    return Object.assign({}, {
        checkupID: checkupData.checkup ? checkupData.checkup.checkupID : null,
        medicalTestResults: patientMedicalTestsData.formData
    });
};

const MedicalTest = ({setPageIndex, nextPageIndex, prevPageIndex}) => {

    let dispatch = useDispatch();
    const checkupData = useSelector(({checkup}) => checkup.checkupAddEdit);
    const patientMedicalTestsData = useSelector(({patientMedicalTest}) => patientMedicalTest.patientMedicalTestAddEdit);


    useEffect(() => {
        dispatch(Action.getMedicalTestTypes());
        return (() => {
            dispatch(Action.resetMedicalTest());
        })
    }, []);

    const saveFunction = (isNext) => {
        let saveObj = generateSaveObject(checkupData, patientMedicalTestsData);
        if (saveObj.checkupID) {
            dispatch(Action.saveOrUpdateCheckupWithPatientMedicalTestsResults(saveObj)).then(
                response => {
                    dispatch(CheckupAction.onSetCheckup(response.payload));
                    isNext && setPageIndex(nextPageIndex);
                }).catch(error => {
                    console.log(error);
                })
        } else {
            isNext && setPageIndex(prevPageIndex);
        }
    };


    return (
        <>
            <div className='d-flex flex-row flex-wrap  justify-content-end'>
                <PrevButton isValid={true} onClickHandler={ () => setPageIndex(prevPageIndex) } />
                <SaveButton isValid={true} onClickHandler={ () => saveFunction(false) } />
                <NextButton isValid={true} onClickHandler={ () => saveFunction(true) } />
            </div>
            <MedicalTestList/>
        </>
    );
};

export default withReducer('patientMedicalTest', reducer)(MedicalTest);