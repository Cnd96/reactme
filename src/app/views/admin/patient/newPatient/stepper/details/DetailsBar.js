import React from 'react';
import withReducer from "../../../../../../store/withReducer";
import reducer from "../stepComponents/registerPatient/store/reducers";
import {useSelector} from "react-redux";
import {CCol} from "@coreui/react";
import {getFullName} from "../../../../../../../utils/HealthTrackerUtils";
import {getDateFromDateStr} from "../../../../../../../utils/GridUtil";

const DetailsBar = () => {

    const patient = useSelector(({patient}) => patient.patientAddEdit);
    const checkupData = useSelector(({checkup}) => checkup.checkupAddEdit);

    return (
        <>
            <CCol xs="6">
                <p className="bold-font">
                    {patient.patient.patientCode ? patient.patient.patientCode + ' : ' : ''}
                    {getFullName(patient.patient)}
                </p>
            </CCol>
            <CCol xs="6">
                <p className='text-align-end bold-font'>
                    {checkupData.checkup.checkupCode ? checkupData.checkup.checkupCode : ''}
                    {checkupData.checkup.checkupDateStr ? ' : ' + getDateFromDateStr(checkupData.checkup.checkupDateStr) : ''}
                </p>
            </CCol>
        </>
    );
};

export default withReducer('patient', reducer)(DetailsBar);