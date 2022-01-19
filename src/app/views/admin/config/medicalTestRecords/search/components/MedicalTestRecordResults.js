import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setStorageItem} from "../../../../../../../utils/StorageUtils";
import Constants from "../../../../../../../utils/Constants";
import history from "../../../../../../../@history";
import {CAlert, CCard, CCardHeader, CCol, CRow} from "@coreui/react";
import {getActInaFromConstantForGrid, getCommonStringForGrid} from "../../../../../../../utils/GridUtil";
import AppPagination from "../../../../../common/AppPagination";
import * as Actions from '../../store/actions/index'

const MedicalTestRecordResults = () => {

    const dispatch = useDispatch();
    const data = useSelector(({medicalTestRecords}) => medicalTestRecords.medicalTestRecordSearch);

    const gotToAddEdit = (recordID) => {
        setStorageItem(Constants.STORAGE.SELECTED_MEDICAL_TEST_RECORD_ID, recordID);
        history.push({
            pathname: Constants.PAGES.medicalTestRecordsAddEdit
        });
    };

    const onPageDataChange = (data) => {
        dispatch(Actions.setPageInfo(data));
    };

    return (
        <div>
            <CCard>
                <CCardHeader>
                    {
                        data.pagedMedicalTestRecords.pageData && data.pagedMedicalTestRecords.pageData.length == 0 &&

                        <CAlert color="warning">
                            No role(s) found.
                        </CAlert>
                    }
                    {
                        data.pagedMedicalTestRecords.pageData && data.pagedMedicalTestRecords.pageData.length > 0

                        &&

                        <table className="table">
                            <thead>
                            <tr style={{fontSize: '15px'}}>
                                <th>Measurement</th>
                                <th>Report Type</th>
                                <th>Status</th>
                            </tr>
                            </thead>
                            <tbody>

                            {data.pagedMedicalTestRecords.pageData.map((data) => {
                                return (
                                    <tr key={data.medicalTestRecordID}
                                        className={'clickable-data-row'}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            e.stopPropagation();
                                            gotToAddEdit(data.medicalTestRecordID);
                                        }}
                                    >
                                        <td>{getCommonStringForGrid(data.measurementName)}</td>
                                        <td>{getCommonStringForGrid(data.testType)}</td>
                                        <td>
                                            {
                                                getActInaFromConstantForGrid(data.status)
                                            }
                                        </td>
                                    </tr>
                                );
                            })
                            }
                            </tbody>
                        </table>
                    }
                    <CRow>
                        <CCol xs="12">
                            <AppPagination
                                currentPageNo={data.pagedMedicalTestRecords.currentPageNo}
                                totalNoOfPages={data.pagedMedicalTestRecords.totalNoOfPages}
                                pageLength={data.pagedMedicalTestRecords.pageLength}
                                onPaginationChange={onPageDataChange}
                            />
                        </CCol>
                    </CRow>
                </CCardHeader>
            </CCard>
        </div>
    );
};

export default MedicalTestRecordResults;