import React from 'react';
import {CAlert, CButton, CCard, CCardBody, CCol, CRow, CTooltip} from "@coreui/react";
import {getCommonStringForGrid, getDateTimeFromDateStr} from "../../../../../../../../../../utils/GridUtil";
import AppPagination from "../../../../../../../../common/AppPagination";
import {useDispatch, useSelector} from "react-redux";
import Constants from "../../../../../../../../../../utils/Constants";
import * as Actions from "../../store/actions";
import {getStorageItem} from "../../../../../../../../../../utils/StorageUtils";

const AllergySearchResult = () => {


    const data = useSelector(({allergyHistory}) => allergyHistory.allergyHistorySearch);
    const AddEditData = useSelector(({allergyHistory}) => allergyHistory.allergyHistoryAddEdit);
    const dispatch = useDispatch();

    const remove = (allergyHistoryID) => {
        let removeRQ = {
            ...data.pageInfo,
            patientID: getStorageItem(Constants.STORAGE.PATIENT_ID),
            allergyHistoryID,
            status: Constants.STATUS_CONST.ACT
        };
        dispatch(Actions.removeAllergyHistory(removeRQ));
    };

    const updateData = (data) => {
        dispatch(Actions.onSetAllergyHistoryToForm(data))
    };

    const onPageDataChange = (data) => {
        dispatch(Actions.setPageInfo(data));
    };

    return (
        <div>
            <CRow>
                <CCol xs="12">
                    <CCard>
                        <CCardBody>

                            {
                                data.allergyHistoryData.pageData && data.allergyHistoryData.pageData.length == 0 &&
                                <CAlert color="warning">
                                    No Results(s) found.
                                </CAlert>
                            }
                            {
                                data.allergyHistoryData.pageData && data.allergyHistoryData.pageData.length > 0 &&
                                <>
                                    <div className="table-responsive">
                                        <table className="table table-striped">
                                            <thead>
                                            <tr>
                                                <th className="w-10-p">
                                                    Date
                                                </th>
                                                <th>
                                                    Allergy
                                                </th>
                                                <th className="w-10-p">
                                                    Action
                                                </th>
                                            </tr>
                                            </thead>
                                            <tbody>

                                            {
                                                data.allergyHistoryData.pageData.map((data, index) => {
                                                    return (

                                                        <React.Fragment key={index}>

                                                            <tr
                                                                className={AddEditData.updatingAllergyHistoryID !== data.allergyHistoryID ? 'clickable-data-row' : 'patient-complain-updated-row'}
                                                            >
                                                                <td>
                                                                    {
                                                                        getDateTimeFromDateStr(data.createdDateStr)
                                                                    }
                                                                </td>

                                                                <td>
                                                                    <div>
                                                                        <p className='pre-tag'>
                                                                            {getCommonStringForGrid(data.allergyDescription)}
                                                                        </p>
                                                                    </div>
                                                                </td>
                                                                <td className='text-align-end'>
                                                                    <CTooltip
                                                                        content={'Double Click to Remove'}
                                                                        placement={'left-start'}
                                                                    >
                                                                        <CButton
                                                                            type="button"
                                                                            onDoubleClick={(e) => {
                                                                                e.preventDefault();
                                                                                e.stopPropagation();
                                                                                remove(data.allergyHistoryID);
                                                                            }}
                                                                            disabled={!data.allergyHistoryID}
                                                                            color="danger"
                                                                            className=" mr-2"
                                                                        >
                                                                            <i className='fa fa-trash'></i>
                                                                        </CButton>
                                                                    </CTooltip>

                                                                    <CTooltip
                                                                        content={'Update Allergy'}
                                                                        placement={'left-start'}
                                                                    >
                                                                        <CButton
                                                                            type="button"
                                                                            onClick={(e) => {
                                                                                e.preventDefault();
                                                                                e.stopPropagation();
                                                                                updateData(data);
                                                                            }}
                                                                            disabled={!data.allergyHistoryID}
                                                                            color="info"
                                                                            className=" mr-2"
                                                                        >
                                                                            <i className='fa fa-pencil'></i>
                                                                        </CButton>
                                                                    </CTooltip>

                                                                </td>

                                                            </tr>
                                                        </React.Fragment>
                                                    );
                                                })
                                            }
                                            </tbody>
                                        </table>
                                    </div>
                                </>
                            }
                            <CRow>
                                <CCol xs="12">
                                    <AppPagination
                                        currentPageNo={data.allergyHistoryData.currentPageNo}
                                        totalNoOfPages={data.allergyHistoryData.totalNoOfPages}
                                        pageLength={data.allergyHistoryData.pageLength}
                                        onPaginationChange={onPageDataChange}
                                    />
                                </CCol>
                            </CRow>
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>

        </div>
    );
};

export default AllergySearchResult;