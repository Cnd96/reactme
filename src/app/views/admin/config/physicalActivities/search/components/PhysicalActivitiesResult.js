import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setStorageItem} from "../../../../../../../utils/StorageUtils";
import Constants from "../../../../../../../utils/Constants";
import history from "../../../../../../../@history";
import {CAlert, CCard, CCardBody, CCol, CRow} from "@coreui/react";
import {getActInaFromConstantForGrid, getCommonStringForGrid} from "../../../../../../../utils/GridUtil";
import AppPagination from "../../../../../common/AppPagination";
import * as Actions from '../../store/action/index'

const PhysicalActivitiesResult = () => {

    const dispatch = useDispatch();
    const data = useSelector(({physicalActivity}) => physicalActivity.physicalActivitySearch);

    const gotToAddEdit = (recordID) => {
        setStorageItem(Constants.STORAGE.SELECTED_PHYSICAL_ACTIVITY_ID, recordID);
        history.push({
            pathname: Constants.PAGES.physicalActivityAddEdit
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
                        data.pagedPhysicalActivities.pageData && data.pagedPhysicalActivities.pageData.length == 0 &&

                        <CAlert color="warning">
                            No Activity(ies) found.
                        </CAlert>
                    }
                    {
                        data.pagedPhysicalActivities.pageData && data.pagedPhysicalActivities.pageData.length > 0

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

                                {data.pagedPhysicalActivities.pageData.map((data) => {
                                    return (
                                        <tr key={data.physicalActivityID}
                                            className={'clickable-data-row'}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                e.stopPropagation();
                                                gotToAddEdit(data.physicalActivityID);
                                            }}
                                        >
                                            <td>{getCommonStringForGrid(data.activityName)}</td>
                                            <td>{getCommonStringForGrid(data.categoryName)}</td>
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
                                currentPageNo={data.pagedPhysicalActivities.currentPageNo}
                                totalNoOfPages={data.pagedPhysicalActivities.totalNoOfPages}
                                pageLength={data.pagedPhysicalActivities.pageLength}
                                onPaginationChange={onPageDataChange}
                            />
                        </CCol>
                    </CRow>
                </CCardBody>
            </CCard>
        </div>
    );
};

export default PhysicalActivitiesResult;