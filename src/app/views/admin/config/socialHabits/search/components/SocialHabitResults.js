import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setStorageItem} from "../../../../../../../utils/StorageUtils";
import Constants from "../../../../../../../utils/Constants";
import history from "../../../../../../../@history";
import {CCard, CCardHeader, CCol, CRow} from "@coreui/react";
import {getActInaFromConstantForGrid, getCommonStringForGrid} from "../../../../../../../utils/GridUtil";
import AppPagination from "../../../../../common/AppPagination";
import * as Actions from '../../store/actions/index'

const SocialHabitResults = () => {

    const dispatch = useDispatch();
    const data = useSelector(({socialHabit}) => socialHabit.socialHabitSearch);

    const gotToAddEdit = (checkupID) => {
        setStorageItem(Constants.STORAGE.SELECTED_SOCIAL_HABIT_ID, checkupID);
        history.push({
            pathname: Constants.PAGES.socialHabitsAddEdit
        });
    };

        const onPageDataChange = (data) => {
            dispatch(Actions.setPageInfo(data));
        };

    return (
        <div>
            <CCard>
                <CCardHeader>
                    <table className="table">
                        <thead>
                        <tr style={{fontSize: '15px'}}>
                            <th>Habit</th>
                            <th>Category</th>
                            <th>Status</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            data.pagedSocialHabits.pageData &&
                            data.pagedSocialHabits.pageData.map((data) => {
                                return (
                                    <tr key={data.socialHabitID}
                                        className={'clickable-data-row'}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            e.stopPropagation();
                                            gotToAddEdit(data.socialHabitID);
                                        }}
                                    >
                                        <td>{getCommonStringForGrid(data.socialHabitName)}</td>
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

                    <CRow>
                        <CCol xs="12">
                            <AppPagination
                                currentPageNo={data.pagedSocialHabits.currentPageNo}
                                totalNoOfPages={data.pagedSocialHabits.totalNoOfPages}
                                pageLength={data.pagedSocialHabits.pageLength}
                                onPaginationChange={onPageDataChange}
                            />
                        </CCol>
                    </CRow>

                </CCardHeader>
            </CCard>
        </div>
    );
};

export default SocialHabitResults;
