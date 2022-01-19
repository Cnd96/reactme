import React from 'react';
import {CAlert, CCard, CCardBody, CCol, CRow} from "@coreui/react";
import {getActInaFromConstantForGrid, getCommonStringForGrid} from "../../../../../../../utils/GridUtil";
import AppPagination from "../../../../../common/AppPagination";
import {useDispatch, useSelector} from "react-redux";
import * as Actions from "../../store/actions";
import {setStorageItem} from "../../../../../../../utils/StorageUtils";
import Constants from "../../../../../../../utils/Constants";
import history from "../../../../../../../@history";

const gotToAddEdit = (physicalActivityCategoryID) => {
    setStorageItem(Constants.STORAGE.SELECTED_PHYSICAL_ACTIVITY_CATEGORY_ID, physicalActivityCategoryID);
    history.push({
        pathname: Constants.PAGES.physicalActivityCategoryAddEdit
    });
};

const PhysicalActivityCategoryResult = () => {
    const data = useSelector(({physicalActivityCategory}) => physicalActivityCategory.physicalActivityCategorySearch);

    const dispatch = useDispatch();
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
                                data.pagedPhysicalActivityCategories.pageData && data.pagedPhysicalActivityCategories.pageData.length == 0 &&
                                <CAlert color="warning">
                                    No Physical Activity Categories(s) found.
                                </CAlert>
                            }

                            {
                                data.pagedPhysicalActivityCategories.pageData && data.pagedPhysicalActivityCategories.pageData.length > 0 &&
                                <>
                                    <div className="table-responsive">
                                        <table className="table table-striped">
                                            <thead>
                                            <tr>
                                                <th>Dietary Category</th>
                                                <th>Description</th>
                                                <th>Status</th>
                                            </tr>
                                            </thead>
                                            <tbody>

                                            {
                                                data.pagedPhysicalActivityCategories.pageData.map((data) => {
                                                    return (
                                                        <tr key={data.physicalActivityCategoryID}
                                                            className={'clickable-data-row'}
                                                            onClick={(e) => {
                                                                e.preventDefault();
                                                                e.stopPropagation();
                                                                gotToAddEdit(data.physicalActivityCategoryID);
                                                            }}
                                                        >
                                                            <td>{getCommonStringForGrid(data.categoryName)}</td>
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

                                    <CRow>
                                        <CCol xs="12">
                                            <AppPagination
                                                currentPageNo={data.pagedPhysicalActivityCategories.currentPageNo}
                                                totalNoOfPages={data.pagedPhysicalActivityCategories.totalNoOfPages}
                                                pageLength={data.pagedPhysicalActivityCategories.pageLength}
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

export default PhysicalActivityCategoryResult;