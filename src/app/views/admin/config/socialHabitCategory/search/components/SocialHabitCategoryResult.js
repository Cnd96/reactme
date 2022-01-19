import React from 'react';
import {CAlert, CCard, CCardBody, CCol, CRow} from "@coreui/react";
import {getActInaFromConstantForGrid, getCommonStringForGrid} from "../../../../../../../utils/GridUtil";
import AppPagination from "../../../../../common/AppPagination";
import {useDispatch, useSelector} from "react-redux";
import * as Actions from "../../store/actions";
import {setStorageItem} from "../../../../../../../utils/StorageUtils";
import Constants from "../../../../../../../utils/Constants";
import history from "../../../../../../../@history";

const gotToAddEdit = (categoryID) => {
    console.log(categoryID);
    setStorageItem(Constants.STORAGE.SELECTED_SOCIAL_HABIT_CATEGORY_ID, categoryID);
    history.push({
        pathname: Constants.PAGES.socialHabitCategoryAddEdit
    });
};

const SocialHabitCategoryResult = () => {
    const data = useSelector(({socialHabitCategory}) => socialHabitCategory.socialHabitCategorySearch);

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
                                data.pagedSocialHabitCategories.pageData && data.pagedSocialHabitCategories.pageData.length == 0 &&
                                <CAlert color="warning">
                                    No Social Habit Categories(s) found.
                                </CAlert>
                            }

                            {
                                data.pagedSocialHabitCategories.pageData && data.pagedSocialHabitCategories.pageData.length > 0 &&
                                <>
                                    <div className="table-responsive">
                                        <table className="table table-striped">
                                            <thead>
                                            <tr>
                                                <th>Social Habit Category</th>
                                                <th>Status</th>
                                            </tr>
                                            </thead>
                                            <tbody>

                                            {
                                                data.pagedSocialHabitCategories.pageData.map((data) => {
                                                    return (
                                                        <tr key={data.socialHabitCategoryID}
                                                            className={'clickable-data-row'}
                                                            onClick={(e) => {
                                                                e.preventDefault();
                                                                e.stopPropagation();
                                                                console.log("Category Id Clicked", data.socialHabitCategoryID)
                                                                gotToAddEdit(data.socialHabitCategoryID);
                                                            }}
                                                        >
                                                            <td>{getCommonStringForGrid(data.categoryName)}</td>
                                                            {/*<td>{getCommonStringForGrid(data.description)}</td>*/}
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
                                                currentPageNo={data.pagedSocialHabitCategories.currentPageNo}
                                                totalNoOfPages={data.pagedSocialHabitCategories.totalNoOfPages}
                                                pageLength={data.pagedSocialHabitCategories.pageLength}
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

export default SocialHabitCategoryResult;
