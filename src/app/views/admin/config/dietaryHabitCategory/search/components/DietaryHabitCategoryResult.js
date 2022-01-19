import React from 'react';
import {CAlert, CCard, CCardBody, CCol, CRow} from "@coreui/react";
import {getActInaFromConstantForGrid, getCommonStringForGrid} from "../../../../../../../utils/GridUtil";
import AppPagination from "../../../../../common/AppPagination";
import {useDispatch, useSelector} from "react-redux";
import * as Actions from "../../store/action";
import {setStorageItem} from "../../../../../../../utils/StorageUtils";
import Constants from "../../../../../../../utils/Constants";
import history from "../../../../../../../@history";

const gotToAddEdit = (dietaryCategoryID) => {
    setStorageItem(Constants.STORAGE.SELECTED_DIETARY_HABIT_CATEGORY_ID, dietaryCategoryID);
    history.push({
        pathname: Constants.PAGES.dietaryHabitCategoriesAddEdit
    });
};

const DietaryHabitCategoryResult = () => {
    const data = useSelector(({dietaryHabitCategory}) => dietaryHabitCategory.dietaryHabitCategorySearch);

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
                                data.pagedDietaryHabitCategory.pageData && data.pagedDietaryHabitCategory.pageData.length == 0 &&
                                <CAlert color="warning">
                                    No Dietary Categories(s) found.
                                </CAlert>
                            }

                            {
                                data.pagedDietaryHabitCategory.pageData && data.pagedDietaryHabitCategory.pageData.length > 0 &&
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
                                                data.pagedDietaryHabitCategory.pageData.map((data) => {
                                                    return (
                                                        <tr key={data.dietaryCategoryID}
                                                            className={'clickable-data-row'}
                                                            onClick={(e) => {
                                                                e.preventDefault();
                                                                e.stopPropagation();
                                                                gotToAddEdit(data.dietaryCategoryID);
                                                            }}
                                                        >
                                                            <td>{getCommonStringForGrid(data.dietaryCategory)}</td>
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
                                                currentPageNo={data.pagedDietaryHabitCategory.currentPageNo}
                                                totalNoOfPages={data.pagedDietaryHabitCategory.totalNoOfPages}
                                                pageLength={data.pagedDietaryHabitCategory.pageLength}
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

export default DietaryHabitCategoryResult;