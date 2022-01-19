import React from 'react';
import {CAlert, CCard, CCardHeader, CCol, CRow} from "@coreui/react";
import {getActInaFromConstantForGrid, getCommonStringForGrid} from "../../../../../../../utils/GridUtil";
import {useDispatch, useSelector} from "react-redux";
import AppPagination from "../../../../../common/AppPagination";
import * as Actions from "../../store/actions";
import {setStorageItem} from "../../../../../../../utils/StorageUtils";
import Constants from "../../../../../../../utils/Constants";
import history from "../../../../../../../@history";

const MedicalTestTypeResults = () => {

    const dispatch = useDispatch();
    const data = useSelector(({medicalTestTypes}) => medicalTestTypes.medicalTestTypeSearch);

    const onPageDataChange = (data) => {
        dispatch(Actions.setPageInfo(data));
    };

    const gotToAddEdit = (medicalTestTypeID) => {
        setStorageItem(Constants.STORAGE.SELECTED_MEDICAL_TEST_TYPE_ID, medicalTestTypeID);
        history.push({
            pathname: Constants.PAGES.medicalTestTypesAddEdit
        });
    };


    return (
        <>
            <div>
                <CCard>
                    <CCardHeader>

                        {
                            data.pagedMedicalTestTypes.pageData && data.pagedMedicalTestTypes.pageData.length == 0 &&

                            <CAlert color="warning">
                                No role(s) found.
                            </CAlert>
                        }
                        {
                            data.pagedMedicalTestTypes.pageData && data.pagedMedicalTestTypes.pageData.length > 0 &&
                            <>
                                <table className="table">
                                    <thead>
                                    <tr style={{fontSize: '15px'}}>
                                        <th>Test Type</th>
                                        <th>Description</th>
                                        <th>Status</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        data.pagedMedicalTestTypes.pageData &&
                                        data.pagedMedicalTestTypes.pageData.map((data) => {
                                            return (
                                                <tr key={data.medicalTestTypeID}
                                                    className={'clickable-data-row'}
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        e.stopPropagation();
                                                        gotToAddEdit(data.medicalTestTypeID);
                                                    }}
                                                >
                                                    <td>{getCommonStringForGrid(data.testType)}</td>
                                                    <td>{getCommonStringForGrid(data.description)}</td>
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

                                <CRow>
                                    <CCol xs="12">
                                        <AppPagination
                                            currentPageNo={data.pagedMedicalTestTypes.currentPageNo}
                                            totalNoOfPages={data.pagedMedicalTestTypes.totalNoOfPages}
                                            pageLength={data.pagedMedicalTestTypes.pageLength}
                                            onPaginationChange={onPageDataChange}
                                        />
                                    </CCol>
                                </CRow>
                            </>
                        }


                    </CCardHeader>
                </CCard>
            </div>
        </>
    );
};

export default MedicalTestTypeResults;
