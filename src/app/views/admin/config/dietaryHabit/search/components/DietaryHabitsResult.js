import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setStorageItem} from "../../../../../../../utils/StorageUtils";
import Constants from "../../../../../../../utils/Constants";
import history from "../../../../../../../@history";
import {CAlert, CCard, CCardBody, CCol, CRow} from "@coreui/react";
import {getActInaFromConstantForGrid, getCommonStringForGrid} from "../../../../../../../utils/GridUtil";
import AppPagination from "../../../../../common/AppPagination";
import * as Actions from '../../store/action/index'

const DietaryHabitsResult = () => {

    const dispatch = useDispatch();
    const data = useSelector(({dietaryHabit}) => dietaryHabit.dietaryHabitSearch);

    const gotToAddEdit = (recordID) => {
        setStorageItem(Constants.STORAGE.SELECTED_DIETARY_HABIT_ID, recordID);
        history.push({
            pathname: Constants.PAGES.dietaryHabitsAddEdit
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
                        data.pagedDietaryHabit.pageData && data.pagedDietaryHabit.pageData.length == 0 &&

                        <CAlert color="warning">
                            No Quiz(zes) found.
                        </CAlert>
                    }
                    {
                        data.pagedDietaryHabit.pageData && data.pagedDietaryHabit.pageData.length > 0

                        &&

                        <div className="table-responsive">
                            <table className="table table-striped">
                                <thead>
                                <tr>
                                    <th>Dietary Quiz</th>
                                    <th>Dietary Category</th>
                                    <th>Status</th>
                                </tr>
                                </thead>
                                <tbody>

                                {data.pagedDietaryHabit.pageData.map((data) => {
                                    return (
                                        <tr key={data.dietaryHabitID}
                                            className={'clickable-data-row'}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                e.stopPropagation();
                                                gotToAddEdit(data.dietaryHabitID);
                                            }}
                                        >
                                            <td>{getCommonStringForGrid(data.dietaryHabit)}</td>
                                            <td>{getCommonStringForGrid(data.dietaryCategory)}</td>
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
                                currentPageNo={data.pagedDietaryHabit.currentPageNo}
                                totalNoOfPages={data.pagedDietaryHabit.totalNoOfPages}
                                pageLength={data.pagedDietaryHabit.pageLength}
                                onPaginationChange={onPageDataChange}
                            />
                        </CCol>
                    </CRow>
                </CCardBody>
            </CCard>
        </div>
    );
};

export default DietaryHabitsResult;