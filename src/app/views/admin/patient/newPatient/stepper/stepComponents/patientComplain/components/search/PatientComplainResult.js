import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {CAlert, CButton, CCard, CCardBody, CCol, CRow, CTooltip} from "@coreui/react";
import {getCommonStringForGrid, getDateTimeFromDateStr} from "../../../../../../../../../../utils/GridUtil";
import * as Actions from "../../store/actions/index";
import AppPagination from "../../../../../../../../common/AppPagination";
import Constants from "../../../../../../../../../../utils/Constants";
import {getStorageItem} from "../../../../../../../../../../utils/StorageUtils";

const PatientComplainResult = () => {

    const data = useSelector(({patientComplain}) => patientComplain.patientComplainSearch);
    const addEditData = useSelector(({patientComplain}) => patientComplain.patientComplainAddEdit);
    const dispatch = useDispatch();

    const remove = (patientComplainID) => {
        let removeRQ = {
            ...data.pageInfo,
            patientComplainID,
            patientID: getStorageItem(Constants.STORAGE.PATIENT_ID),
            status: Constants.STATUS_CONST.ACT
        };
        dispatch(Actions.removePatientComplain(removeRQ));
    };

    const updateData = (data) => {
        dispatch(Actions.onSetPatientComplainToForm(data))
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
                                data.patientComplainData.pageData && data.patientComplainData.pageData.length == 0 &&
                                <CAlert color="warning">
                                    No Results(s) found.
                                </CAlert>
                            }
                            {
                                data.patientComplainData.pageData && data.patientComplainData.pageData.length > 0 &&
                                <>
                                    <div className="table-responsive">
                                        <table className="table table-striped">
                                            <thead>
                                            <tr>
                                                <th className="w-10-p">
                                                    Date
                                                </th>
                                                <th>
                                                    Complain
                                                </th>
                                                <th className="w-10-p">
                                                    Action
                                                </th>
                                            </tr>
                                            </thead>
                                            <tbody>

                                            {
                                                data.patientComplainData.pageData.map((data, index) => {
                                                    return (

                                                        <React.Fragment key={index}>

                                                            <tr
                                                                className={addEditData.updatingPatientComplainID !== data.patientComplainID ? 'clickable-data-row' : 'patient-complain-updated-row'}
                                                            >
                                                                <td>
                                                                    {
                                                                        getDateTimeFromDateStr(data.createdDateStr)
                                                                    }
                                                                </td>

                                                                <td>
                                                            <pre className="pre-tag">
                                                                {getCommonStringForGrid(data.patientComplain)}
                                                            </pre>
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
                                                                                remove(data.patientComplainID);
                                                                            }}
                                                                            disabled={!data.patientComplainID}
                                                                            color="danger"
                                                                            className=" mr-2"
                                                                        >
                                                                            <i className='fa fa-trash'></i>
                                                                        </CButton>
                                                                    </CTooltip>

                                                                    <CTooltip
                                                                        content={'Update Complain'}
                                                                        placement={'left-start'}
                                                                    >
                                                                        <CButton
                                                                            type="button"
                                                                            onClick={(e) => {
                                                                                e.preventDefault();
                                                                                e.stopPropagation();
                                                                                updateData(data);
                                                                            }}
                                                                            disabled={!data.patientComplainID}
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
                                        currentPageNo={data.patientComplainData.currentPageNo}
                                        totalNoOfPages={data.patientComplainData.totalNoOfPages}
                                        pageLength={data.patientComplainData.pageLength}
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

export default PatientComplainResult;