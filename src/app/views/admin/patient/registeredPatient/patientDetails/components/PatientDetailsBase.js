import React from 'react';
import {useSelector} from "react-redux";
import {CButton, CCard, CCardHeader} from "@coreui/react";
import {getCommonStringForGrid} from "../../../../../../../utils/GridUtil";
import * as _ from "lodash";
import CIcon from "@coreui/icons-react";
import {setStorageItem} from "../../../../../../../utils/StorageUtils";
import Constants from "../../../../../../../utils/Constants";
import history from "../../../../../../../@history";

const getFullName = (patient) => {
    let {title, firstName, middleName, lastName} = patient;
    title = _.trim(title);
    firstName = _.trim(firstName);
    middleName = _.trim(middleName);
    lastName = _.trim(lastName);
    return title.concat(' .').concat(firstName).concat(' ').concat(middleName).concat(' ').concat(lastName);
};

const createCheckUp = (patientID) => {
    setStorageItem(Constants.STORAGE.PATIENT_ID, patientID);
    history.push({
        pathname: Constants.PAGES.newPatient
    });
};

const PatientDetailsBase = () => {

    const data = useSelector(({patientDetails}) => patientDetails.patientDetails);

    return (
        <div>
            <CCard>
                <CCardHeader>
                    <table className="table">
                        <thead>
                        <tr style={{fontSize: '15px', backgroundColor: '#EBEDEF'}}>
                            <th>Name</th>
                            <th>Patient Code</th>
                            <th>NIC/Passport</th>
                            <th>Contact</th>
                            <th>Age</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>{getCommonStringForGrid(getFullName(data.patient))}</td>
                            <td>{getCommonStringForGrid(data.patient.patientCode)}</td>
                            <td>{getCommonStringForGrid(data.patient.nicPassport)}</td>
                            <td>{getCommonStringForGrid(data.patient.contactNo)}</td>
                            <td>{getCommonStringForGrid(data.patient.age)}</td>
                            <td width={{width: '20%'}}>
                                <CButton
                                    disabled={!data.patient.patientID}
                                    onClick={() => {
                                        createCheckUp(data.patient.patientID);
                                    }}
                                    color="success"
                                >
                        <span>
                            <CIcon
                                size={'lg'}
                                name={'cil-user-follow'}
                                style={{marginRight: '5px'}}
                            />
                        </span>
                                    New Checkup
                                </CButton>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </CCardHeader>
            </CCard>
        </div>
    );
};

export default PatientDetailsBase;