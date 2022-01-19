import React, {useEffect} from 'react';
import {CCol, CRow} from "@coreui/react";
import OtherLettersSelection from "./components/OtherLettersSelection";
import withReducer from "../../../../../../../store/withReducer";
import reducer from "./store/reducers";
import OtherLetterTemplate from "./components/OtherLetterTemplate";
import {useDispatch} from "react-redux";
import {getStorageItem} from "../../../../../../../../utils/StorageUtils";
import Constants from "../../../../../../../../utils/Constants";
import * as Actions from './store/actions'

const OtherLettersBase = () => {

    let dispatch = useDispatch();

    useEffect(() => {
        let checkupID = getStorageItem(Constants.STORAGE.CHECKUP_ID);
        let patientID = getStorageItem(Constants.STORAGE.PATIENT_ID);
        let hospitalID = Constants.HOSPITAL_ID;
        let doctorId = Constants.DOCTOR_ID;
        if (checkupID) {
            let searchObj = {checkupID: checkupID};
            dispatch(Actions.getCheckupInstructionNoteByCheckupID(searchObj));
            dispatch(Actions.getPatientDTOByID(patientID));
            dispatch(Actions.getCheckupDTOByID(checkupID));
            dispatch(Actions.getHospitalByID(hospitalID));
            dispatch(Actions.getDoctorByID(doctorId));
        } else {
            // dispatch(Actions.onRemoveInstructionData());
        }
        return (() => {
            dispatch(Actions.clearStore());
        })
    }, [dispatch]);

    return (
        <div>
            <CRow>
                <CCol sm="3">
                    <OtherLettersSelection/>
                </CCol>

                <CCol sm="9">
                    <OtherLetterTemplate/>
                </CCol>

            </CRow>
            <CRow>
                {/*<NextPrevButtonGroup setPageIndex={setPageIndex} prevPageIndex={9} saveFunction={saveFunction}*/}
                {/*                     isValid={true}/>*/}

            </CRow>

        </div>
    );
};

export default withReducer('selectOtherLetter', reducer)(OtherLettersBase);