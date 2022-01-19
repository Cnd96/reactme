import React from 'react';
import {useSelector} from "react-redux";
import {getCommonStringForGrid, getDateFromDateStr} from "../../../../../../../../../utils/GridUtil";
import {CCard, CCardHeader} from "@coreui/react";
import * as _ from "lodash";


const getFullName = (patient) => {
    let {title, firstName, middleName, lastName} = patient;
    title = _.trim(title);
    firstName = _.trim(firstName);
    middleName = _.trim(middleName);
    lastName = _.trim(lastName);
    return title.concat(' .').concat(firstName).concat(' ').concat(middleName).concat(' ').concat(lastName);
};

const PatientBasicInformation = () => {

    const patientSummeryData = useSelector(({patientSummery}) => patientSummery.patientSummeryReport);

    return (
        <div>
            <CCard>
                <CCardHeader>
                    {
                        patientSummeryData.patient &&
                        <table className="table">
                            <thead>
                            <tr style={{fontSize: '15px', backgroundColor: '#EBEDEF'}}>
                                <th>Name</th>
                                <th>Patient Code</th>
                                <th>NIC</th>
                                <th>Age</th>
                                <th>Contact</th>
                                <th>Checkup Code</th>
                                <th>Checkup Date</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>{getCommonStringForGrid(getFullName(patientSummeryData.patient))}</td>
                                <td>{getCommonStringForGrid(patientSummeryData.patient.patientCode)}</td>
                                <td>{getCommonStringForGrid(patientSummeryData.patient.nic)}</td>
                                <td>{getCommonStringForGrid(patientSummeryData.patient.age)}</td>
                                <td>{getCommonStringForGrid(patientSummeryData.patient.contactNo)}</td>
                                <td>{getCommonStringForGrid(patientSummeryData.checkup.checkupCode)}</td>
                                <td>{getDateFromDateStr(patientSummeryData.checkup.checkupDateStr)}</td>
                            </tr>
                            </tbody>
                        </table>
                    }
                </CCardHeader>
            </CCard>
        </div>
    );
};

export default PatientBasicInformation;