import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setStorageItem} from "../../../../../../../utils/StorageUtils";
import Constants from "../../../../../../../utils/Constants";
import history from "../../../../../../../@history";
import * as Actions from "../../store/actions/index";
import {CAlert, CCard, CCardBody, CCol, CRow} from "@coreui/react";
import {getActInaFromConstantForGrid, getCommonStringForGrid} from "../../../../../../../utils/GridUtil";
import AppPagination from "../../../../../common/AppPagination";

const PrescriptionTemplateResult = () => {
    const dispatch = useDispatch();
    const data = useSelector(({prescriptionTemplate}) => prescriptionTemplate.prescriptionTemplateSearch);

    const gotToAddEdit = (ID) => {
        setStorageItem(Constants.STORAGE.SELECTED_PRESCRIPTION_TEMPLATE_ID, ID);
        history.push({
            pathname: Constants.PAGES.prescriptionTemplateAddEdit
        });
    };

    const onPageDataChange = (data) => {
        dispatch(Actions.setPageInfo(data));
    };

    return (
        <div>
            <CCard>
                <CCardBody>
                    {
                        data.pagedPrescriptionTemplate.pageData && data.pagedPrescriptionTemplate.pageData.length == 0 &&

                        <CAlert color="warning">
                            No Templates(ies) found.
                        </CAlert>
                    }
                    {
                        data.pagedPrescriptionTemplate.pageData && data.pagedPrescriptionTemplate.pageData.length > 0
                        &&
                        <div className="table-responsive">
                            <table className="table table-striped">
                                <thead>
                                <tr>
                                    <th>Activity</th>
                                    <th>Category</th>
                                    <th>Status</th>
                                </tr>
                                </thead>
                                <tbody>

                                {data.pagedPrescriptionTemplate.pageData.map((data) => {
                                    return (
                                        <tr key={data.prescriptionTemplateID}
                                            className={'clickable-data-row'}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                e.stopPropagation();
                                                gotToAddEdit(data.prescriptionTemplateID);
                                            }}
                                        >
                                            <td>{getCommonStringForGrid(data.prescriptionTemplate)}</td>
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
                        </div>
                    }
                    <CRow>
                        <CCol xs="12">
                            <AppPagination
                                currentPageNo={data.pagedPrescriptionTemplate.currentPageNo}
                                totalNoOfPages={data.pagedPrescriptionTemplate.totalNoOfPages}
                                pageLength={data.pagedPrescriptionTemplate.pageLength}
                                onPaginationChange={onPageDataChange}
                            />
                        </CCol>
                    </CRow>
                </CCardBody>
            </CCard>
        </div>
    );
};

export default PrescriptionTemplateResult;