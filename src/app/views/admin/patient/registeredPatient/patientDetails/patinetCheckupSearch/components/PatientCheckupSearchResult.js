import React, {useEffect} from 'react';
import {CAlert, CButton, CCol, CRow, CTooltip} from "@coreui/react";
import {getCommonStringForGrid, getDateFromDateStr} from "../../../../../../../../utils/GridUtil";
import AppPagination from "../../../../../../common/AppPagination";
import {useDispatch, useSelector} from "react-redux";
import {getStorageItem, setStorageItem} from "../../../../../../../../utils/StorageUtils";
import Constants from "../../../../../../../../utils/Constants";
import history from "../../../../../../../../@history";
import * as Actions from "../store/actions";
import * as PatientActions from "../../../../newPatient/stepper/stepComponents/registerPatient/store/actions";
import * as CheckupActions from "../../../../newPatient/stepper/stepComponents/createCheckUp/store/action";

const PatientCheckupSearchResult = () => {
    const data = useSelector(({patientCheckupSearch}) => patientCheckupSearch.patientCheckupSearch);
    const dispatch = useDispatch();

    const gotToAddEdit = (checkupID) => {
        setStorageItem(Constants.STORAGE.CHECKUP_ID, checkupID);

        let patientID = getStorageItem(Constants.STORAGE.PATIENT_ID_FOR_DETAIL);
        setStorageItem(Constants.STORAGE.PATIENT_ID, patientID);

        history.push({
            pathname: Constants.PAGES.patientCheckupSummeryDetails
        });
    };

    const loadCheckupWithPatient = (checkupID) => {
        dispatch(PatientActions.onResetPatientData());
        dispatch(CheckupActions.resetCheckupData());

        let patientID = getStorageItem(Constants.STORAGE.PATIENT_ID_FOR_DETAIL);
        setStorageItem(Constants.STORAGE.PATIENT_ID, patientID);

        setStorageItem(Constants.STORAGE.CHECKUP_ID, checkupID);
        history.push({
            pathname: Constants.PAGES.newPatient
        });
    };

    const onPageDataChange = (data) => {
        dispatch(Actions.setPageInfo(data));
    };


    useEffect(() => {
        return (() => {
            dispatch(Actions.resetPagedData());
        });
    }, []);

    return (
        <div>
            {
                data.pagedPatientCheckups.pageData && data.pagedPatientCheckups.pageData.length > 0 &&
                <>
                    <table className="table table-striped">
                        <thead>
                        <tr>
                            <th style={{width: '5%'}}>#</th>
                            <th>Checkup Code</th>
                            <th>Date</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            data.pagedPatientCheckups.pageData && data.pagedPatientCheckups.pageData.length > 0 &&
                            data.pagedPatientCheckups.pageData.map((data, index) => {
                                return (
                                    <tr key={data.checkupID}
                                        className={'clickable-data-row'}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            e.stopPropagation();
                                            gotToAddEdit(data.checkupID);
                                        }}
                                    >
                                        <td>{getCommonStringForGrid(index + 1)}</td>
                                        <td>{getCommonStringForGrid(data.checkupCode)}</td>
                                        <td>{getDateFromDateStr(data.checkupDateStr)}</td>
                                        <td>
                                            <CTooltip
                                                content={'Load Checkup'}
                                                placement={'left-start'}
                                            >
                                                <CButton
                                                    type="button"
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        e.stopPropagation();
                                                        loadCheckupWithPatient(data.checkupID);
                                                    }}
                                                    disabled={!data.checkupID}
                                                    color="info"
                                                    className=" mr-2"
                                                >
                                                    <i className='fa fa-upload'></i>
                                                </CButton>
                                            </CTooltip>
                                        </td>
                                    </tr>
                                );
                            })
                        }
                        </tbody>
                    </table>

                    <CRow>
                        <CCol xs="12">
                            <AppPagination
                                currentPageNo={data.pagedPatientCheckups.currentPageNo}
                                totalNoOfPages={data.pagedPatientCheckups.totalNoOfPages}
                                pageLength={data.pagedPatientCheckups.pageLength}
                                onPaginationChange={onPageDataChange}
                            />
                        </CCol>
                    </CRow>
                </>
            }
            {
                data.pagedPatientCheckups.pageData && data.pagedPatientCheckups.pageData.length == 0 &&
                <CAlert color="warning">
                    No Checkups(s) found.
                </CAlert>
            }
        </div>
    );
};

export default PatientCheckupSearchResult;