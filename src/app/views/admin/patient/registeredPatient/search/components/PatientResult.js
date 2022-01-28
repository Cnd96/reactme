import React, {useEffect, useState} from 'react';
import {CAlert, CButton, CCard, CCardBody, CCol, CRow, CTooltip} from "@coreui/react";
import {
    getCommonStringForGrid,
    getDateFromDateStr,
    getGenderFromConstantForGrid
} from "../../../../../../../utils/GridUtil";
import AppPagination from "../../../../../common/AppPagination";
import {useDispatch, useSelector} from "react-redux";
import * as Actions from '../../store/actions/index'
import * as _ from "lodash";
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

const getAddress = (patient) => {
    let {addressLine1, addressLine2, addressLine3} = patient;
    addressLine1 = _.trim(addressLine1);
    addressLine2 = _.trim(addressLine2);
    addressLine3 = _.trim(addressLine3);
    return addressLine1.concat(' ').concat(addressLine2).concat(' ').concat(addressLine3).concat(' ');
};

const gotToChekupList = (patientID) => {
    setStorageItem(Constants.STORAGE.PATIENT_ID_FOR_DETAIL, patientID);
    history.push({
        pathname: Constants.PAGES.registeredPatientDetails
    });
};

const PatientResult = ({createCheckUp}) => {

    const dispatch = useDispatch();
    const patientData = useSelector(({patientSearch}) => patientSearch.patientSearch);
    const [pagedPatientData, setPagedPatientData] = useState([]);

    useEffect(() => {
        setPagedPatientData(patientData.pagedPatients.pageData);
    }, [dispatch, patientData.pagedPatients.pageData]);

    const onPageDataChange = (data) => {
        dispatch(Actions.setPageInfo(data));
    };

    return (
        <>
            <CRow>
                <CCol xs="12">
                    <CCard>
                        <CCardBody>
                            {
                                patientData.pagedPatients.pageData && patientData.pagedPatients.pageData.length == 0 &&
                                <CAlert color="warning">
                                    No patients(s) found.
                                </CAlert>
                            }

                            {
                                patientData.pagedPatients.pageData && patientData.pagedPatients.pageData.length > 0 &&
                                <>
                                    <div className="table-responsive">
                                        <table className="table table-striped">
                                            <thead>
                                            <tr>
                                                <th>Patient Name</th>
                                                <th>Patient ID</th>
                                                <th>NIC/Passport</th>
                                                <th>Contact No.</th>
                                                <th>Age</th>
                                                <th>Gender</th>
                                                <th>DOB</th>
                                                <th>Address</th>
                                                <th>Email</th>
                                                <th>Occupation</th>
                                                <th>Action</th>
                                            </tr>
                                            </thead>
                                            <tbody>

                                            {
                                                pagedPatientData &&
                                                pagedPatientData.map((data, index) => {
                                                    return (
                                                        <tr key={data.patientID}>
                                                            <td>{getFullName(data)}</td>
                                                            <td>{getCommonStringForGrid(data.patientCode)}</td>
                                                            <td>{getCommonStringForGrid(data.nicPassport)}</td>
                                                            <td>{getCommonStringForGrid(data.contactNo)}</td>
                                                            <td>{getCommonStringForGrid(data.age)}</td>
                                                            <td>{getGenderFromConstantForGrid(data.gender)}</td>
                                                            <td>{getDateFromDateStr(data.dateOfBirthStr)}</td>
                                                            <td>{getAddress(data)}</td>
                                                            <td>{getCommonStringForGrid(data.email)}</td>
                                                            <td>{getCommonStringForGrid(data.occupation)}</td>
                                                            <td className="w-11-p">
                                                                <CTooltip content={'View History'} placement={'left-start'} >
                                                                    <CButton
                                                                        type="button"
                                                                        onClick={(e) => {
                                                                            e.preventDefault();
                                                                            e.stopPropagation();
                                                                            gotToChekupList(data.patientID);
                                                                        }}
                                                                        disabled={!data.patientID}
                                                                        color="info"
                                                                        className=" mr-2"
                                                                    >
                                                                        <i className='fa fa-eye'></i>
                                                                    </CButton>
                                                                </CTooltip>

                                                                <CTooltip content={'New Appointment'} placement={'left-start'} >
                                                                    <CButton
                                                                        disabled={!data.patientID}
                                                                        onClick={(e) => {
                                                                            e.preventDefault();
                                                                            e.stopPropagation();
                                                                            createCheckUp(data.patientID);
                                                                        }}
                                                                        color="success"
                                                                        className=""
                                                                    >
                                                                        <i className='fa fa-plus'></i>
                                                                    </CButton>
                                                                </CTooltip>
                                                            </td>
                                                        </tr>
                                                    );
                                                })
                                            }
                                            </tbody>
                                        </table>
                                    </div>
                                    <CRow>
                                        <CCol xs="12">
                                            <AppPagination
                                                currentPageNo={patientData.pagedPatients.currentPageNo}
                                                totalNoOfPages={patientData.pagedPatients.totalNoOfPages}
                                                pageLength={patientData.pagedPatients.pageLength}
                                                onPaginationChange={onPageDataChange}
                                            />
                                        </CCol>
                                    </CRow>
                                </>
                            }
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>
        </>
    );
};

export default PatientResult;