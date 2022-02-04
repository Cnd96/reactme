import React, {useEffect} from 'react';
import withReducer from "../../../../../../../store/withReducer";
import reducer from "./store/reducer";
import {useDispatch} from "react-redux";
import * as Action from "./store/actions/";
import CheckupHistoryDetails from "./chartComponents/CheckupHistoryDetails";
import {getStorageItem} from "../../../../../../../../utils/StorageUtils";
import Constants from "../../../../../../../../utils/Constants";
import CheckupHistoryTableBase from "./tableComponents/CheckupHistoryTableBase";
import {CCol, CRow} from "@coreui/react";

const CheckupHistory = () => {

    let dispatch = useDispatch();
    let storagePatientID = getStorageItem(Constants.STORAGE.PATIENT_ID);

    useEffect(() => {
        dispatch(Action.getCheckupHistoryNumericValuesOnlyByPatientID({patientID: storagePatientID}));
        dispatch(Action.getCheckupFullHistoryByPatientID({patientID: storagePatientID}));

        return (() => {
            dispatch(Action.resetCheckupHistory());
        })
    }, []);


    return (
        <div>
            <CRow>
                <CCol>
                    <h4>Checkup History (Last 4 Checkups)</h4>
                </CCol>
                <CCol sm="12" style={{overflowX: 'scroll', height: 'fit-content'}}>
                    <CheckupHistoryTableBase/>
                </CCol>
            </CRow>
        </div>
    );
};

export default withReducer('checkupHistory', reducer)(CheckupHistory);