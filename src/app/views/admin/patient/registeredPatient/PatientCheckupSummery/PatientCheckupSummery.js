import React, {useEffect} from 'react';
import PatientSummeryBase from "../../newPatient/stepper/stepComponents/patientSummery/PatientSummeryBase";
import {removeStorageItem} from "../../../../../../utils/StorageUtils";
import Constants from "../../../../../../utils/Constants";


const PatientCheckupSummery = () => {

    useEffect(() => {
        return (() => {
            removeStorageItem(Constants.STORAGE.PATIENT_ID);
            removeStorageItem(Constants.STORAGE.CHECKUP_ID);
        })
    }, []);

    return (
        <div>
            <PatientSummeryBase/>
        </div>
    );
};

export default PatientCheckupSummery;