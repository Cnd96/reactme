import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setStorageItem} from "../../../../../../../utils/StorageUtils";
import Constants from "../../../../../../../utils/Constants";
import history from "../../../../../../../@history";
import * as Actions from "../../store/action"
import {CAlert, CCard, CCardBody, CCol, CRow} from "@coreui/react";
import {getActInaFromConstantForGrid, getCommonStringForGrid} from "../../../../../../../utils/GridUtil";
import AppPagination from "../../../../../common/AppPagination";


const getCommaSeparatedVales = (dataArray, keyValue) => {
    let stringVales = '';
    dataArray.forEach(element => {
        stringVales.concat(element[keyValue]).concat(', ');
    });
    stringVales.slice(0, -1);
    return stringVales;
};

const MedicineResult = () => {

    const dispatch = useDispatch();
    const data = useSelector(({medicine}) => medicine.medicineSearch);

    const gotToAddEdit = (medicineID) => {
        setStorageItem(Constants.STORAGE.SELECTED_MEDICINE_ID, medicineID);
        history.push({
            pathname: Constants.PAGES.medicineAddEdit
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
                        data.pagedMedicine.pageData && data.pagedMedicine.pageData.length == 0 &&

                        <CAlert color="warning">
                            No Medicines found.
                        </CAlert>
                    }
                    {
                        data.pagedMedicine.pageData && data.pagedMedicine.pageData.length > 0

                        &&
                        <>

                            <div className="table-responsive">
                                <table className="table table-striped">
                                    <thead>
                                    <tr>
                                        <th>Medicine</th>
                                        <th>Doses</th>
                                        <th>Frequents</th>
                                        <th>Meal Times</th>
                                        <th>Trades</th>
                                        <th>Status</th>
                                    </tr>
                                    </thead>
                                    <tbody>

                                    {data.pagedMedicine.pageData.map((data) => {
                                        return (
                                            <tr key={data.medicineID}
                                                className={'clickable-data-row'}
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    e.stopPropagation();
                                                    gotToAddEdit(data.medicineID);
                                                }}
                                            >
                                                <td>{getCommonStringForGrid(data.medicineName)}</td>
                                                <td>{getCommonStringForGrid(data.doses)}</td>
                                                <td>{getCommonStringForGrid(data.frequents)}</td>
                                                <td>{getCommonStringForGrid(data.mealTimes)}</td>
                                                <td>{getCommonStringForGrid(data.trades)}</td>
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
                                        currentPageNo={data.pagedMedicine.currentPageNo}
                                        totalNoOfPages={data.pagedMedicine.totalNoOfPages}
                                        pageLength={data.pagedMedicine.pageLength}
                                        onPaginationChange={onPageDataChange}
                                    />
                                </CCol>
                            </CRow>
                        </>
                    }

                </CCardBody>
            </CCard>
        </div>
    );
};

export default MedicineResult;