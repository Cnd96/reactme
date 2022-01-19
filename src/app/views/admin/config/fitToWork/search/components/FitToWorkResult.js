import React from 'react';
import {CAlert, CCard, CCardBody, CCol, CRow} from "@coreui/react";
import {getActInaFromConstantForGrid, getCommonStringForGrid} from "../../../../../../../utils/GridUtil";
import history from "../../../../../../../@history";
import Constants from "../../../../../../../utils/Constants";
import {setStorageItem} from "../../../../../../../utils/StorageUtils";
import {useSelector} from "react-redux";

const gotToAddEdit = (fitToWorkID) => {
    setStorageItem(Constants.STORAGE.SELECTED_FIT_TO_WORK_ID, fitToWorkID);
    history.push({
        pathname: Constants.PAGES.fitToWorkAddEdit
    });
};
const FitToWorkResult = () => {
    const data = useSelector(({fitToWork}) => fitToWork.fitToWorkSearch);
    return (
        <>
            <CRow>
                <CCol xs="12">
                    <CCard>
                        <CCardBody>

                            {
                                data.fitToWorkList && data.fitToWorkList.length == 0 &&
                                <CAlert color="warning">
                                    No Fit to Work Categories(s) found.
                                </CAlert>
                            }

                            {
                                data.fitToWorkList && data.fitToWorkList.length > 0 &&
                                <>
                                    <div className="table-responsive">
                                        <table className="table table-striped">
                                            <thead>
                                            <tr>
                                                <th>Category</th>
                                                <th>Status</th>
                                            </tr>
                                            </thead>
                                            <tbody>

                                            {
                                                data.fitToWorkList.map((data) => {
                                                    return (
                                                        <tr key={data.fitToWorkID}
                                                            className={'clickable-data-row'}
                                                            onClick={(e) => {
                                                                e.preventDefault();
                                                                e.stopPropagation();
                                                                gotToAddEdit(data.fitToWorkID);
                                                            }}
                                                        >
                                                            <td>{getCommonStringForGrid(data.category)}</td>
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
                                </>
                            }
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>
        </>
    );
};

export default FitToWorkResult;