import React, {useEffect, useState} from 'react';
import withReducer from "../../../../../../../store/withReducer";
import reducer from "./store/reducers";
import {CNav, CTabContent, CTabs} from "@coreui/react";
import {useDispatch, useSelector} from "react-redux";
import * as Action from "./store/actions";
import * as PatientAction from "../registerPatient/store/actions";
import * as _ from "lodash";
import TabHeader from "./components/TabHeader";
import TabBody from "./components/TabBody";
import { NextButton, PrevButton, SaveButton } from "../../../../../../common/NextPrevButtonGroup";

const generateSaveObject = (patientData, familyTypeData) => {
    let removedMedicalDiseasesMap = {};
    let addedMedicalDiseasesMap = {};
    let selectedMedicalDiseasesMap = familyTypeData.selectedMedicalDiseasesMap;
    let currentMedicalDiseasesMap = familyTypeData.currentMedicalDiseasesMap;
    let isChanged = false;

    familyTypeData.familyTypes.forEach((familyType) => {
        removedMedicalDiseasesMap[familyType.familyTypeID] = _.difference(currentMedicalDiseasesMap[familyType.familyTypeID], selectedMedicalDiseasesMap[familyType.familyTypeID]);
        addedMedicalDiseasesMap[familyType.familyTypeID] = _.difference(selectedMedicalDiseasesMap[familyType.familyTypeID], currentMedicalDiseasesMap[familyType.familyTypeID]);
    });

    familyTypeData.familyTypes.forEach((familyType) => {
        if (removedMedicalDiseasesMap[familyType.familyTypeID].length > 0 || addedMedicalDiseasesMap[familyType.familyTypeID].length > 0) {
            isChanged = true;
        }
    });

    return Object.assign({}, {
        removedMedicalDiseases: removedMedicalDiseasesMap,
        familyWiseMedicalDiseases: addedMedicalDiseasesMap
    }, {patientID: patientData.patient ? patientData.patient.patientID : null}, {isChanged: isChanged});
};

const SelectFamilyHistory = ({setPageIndex, nextPageIndex, prevPageIndex}) => {

    const dispatch = useDispatch();
    const patientData = useSelector(({patient}) => patient.patientAddEdit);
    const familyTypeData = useSelector(({familyType}) => familyType.familyTypeAddEdit);
    const [activeTabID, setActiveTabID] = useState();

    useEffect(() => {
        dispatch(Action.setPatientInitialData({
            currentMedicalDiseasesMap: patientData.patient.familyWiseMedicalDiseases,
            familyTypeID: patientData.patient.familyTypeID
        }));
        dispatch(Action.getAllFamilyTypes());
        dispatch(Action.getMedicalDiseasesList({}));
    }, []);

    useEffect(() => {
        setActiveTabID(familyTypeData.familyTypes[0] ? familyTypeData.familyTypes[0].familyTypeID : 0);
    }, [familyTypeData.familyTypes]);

    const saveFunction = (isNext) => {
        let saveObject = generateSaveObject(patientData, familyTypeData);
        if (saveObject.isChanged) {
            dispatch(Action.saveOrUpdatePatientWithFamilyDiseases(saveObject)).then(response => {
                dispatch(PatientAction.setPatient(response.payload));
                isNext && setPageIndex(nextPageIndex);
            })
        } else {
            isNext && setPageIndex(nextPageIndex);
        }        
    };

    return (
        <>
            <div className='d-flex flex-row flex-wrap  justify-content-end'>
                <PrevButton isValid={true} onClickHandler={ () => setPageIndex(prevPageIndex) } />
                <SaveButton isValid={true} onClickHandler={ () => saveFunction(false) } />
                <NextButton isValid={true} onClickHandler={ () => saveFunction(true) } />
            </div>
            <CTabs activeTab={`${activeTabID}`}>
                <CNav variant="tabs">
                    {
                        familyTypeData.familyTypes.map((familyType, index) => {
                            return <TabHeader familyType={familyType} index={index} key={index}/>
                        })
                    }
                </CNav>
                <CTabContent>
                    {
                        familyTypeData.familyTypes.map((familyType, index) => {
                            return <TabBody familyType={familyType} index={index} key={index}/>
                        })
                    }
                </CTabContent>
            </CTabs>
        </>
    );
};

export default withReducer('familyType', reducer)(SelectFamilyHistory);