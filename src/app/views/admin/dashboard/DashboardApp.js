import React from 'react';
import withReducer from "../../../store/withReducer";
import reducer from "./../../../store/reducers/notebook/settings.reducer";
import history from "../../../../@history";
import Constants from "../../../../utils/Constants";
import {CCard, CCardBody, CCol, CRow} from "@coreui/react";
import {removeStorageItem} from "../../../../utils/StorageUtils";
import * as PatientActions from "../patient/newPatient/stepper/stepComponents/registerPatient/store/actions";
import * as CheckupActions from "../patient/newPatient/stepper/stepComponents/createCheckUp/store/action";

const navigateNewPatient = () => {
    removeStorageItem(Constants.STORAGE.PATIENT_ID);
    removeStorageItem(Constants.STORAGE.CHECKUP_ID);
    dispatch(PatientActions.onResetPatientData());
    dispatch(CheckupActions.resetCheckupData());
    history.push({
        pathname: Constants.PAGES.newPatient
    });
};

function DashboardApp() {

    return (
        <div>
            <CRow>
                <CCol xs="12">
                    <CCard>
                        <CCardBody>
                            <h4>Welcome to the Exceed Health Application</h4>
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>
        </div>
    );
}

export default withReducer('dashboardReducer', reducer)(DashboardApp);
