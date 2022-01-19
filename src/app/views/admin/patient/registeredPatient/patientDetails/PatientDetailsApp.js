import React, {useEffect} from 'react';
import withReducer from "../../../../../store/withReducer";
import reducer from "../store/reducers";
import {useDispatch} from "react-redux";
import {getStorageItem} from "../../../../../../utils/StorageUtils";
import Constants from "../../../../../../utils/Constants";
import * as Action from "../store/actions/patient.details.app.actions";
import PatientDetailsBase from "./components/PatientDetailsBase";
import PatientCheckupSearchApp from "./patinetCheckupSearch/PatientCheckupSearchApp";

const PatientDetailsApp = () => {

    let dispatch = useDispatch();

    useEffect(() => {
        let patientID = getStorageItem(Constants.STORAGE.PATIENT_ID_FOR_DETAIL);
        if (patientID) {
            dispatch(Action.getPatientDTOByID(patientID));
        }
        return (() => {
            dispatch(Action.resetPatientDetails());
        });
    }, [dispatch]);

    return (
        <div>
            <PatientDetailsBase/>
            <PatientCheckupSearchApp/>
        </div>
    );
};

export default withReducer('patientDetails', reducer)(PatientDetailsApp);