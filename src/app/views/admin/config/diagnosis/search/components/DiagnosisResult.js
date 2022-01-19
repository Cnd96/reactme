import React, {Component} from 'react';
import {setStorageItem} from "../../../../../../../utils/StorageUtils";
import Constants from "../../../../../../../utils/Constants";
import history from "../../../../../../../@history";
import {CAlert, CCard, CCardBody, CCol, CRow} from "@coreui/react";
import AppPagination from "../../../../../common/AppPagination";
import * as Actions from "../../store/action/index";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {getActInaFromConstantForGrid, getCommonStringForGrid} from "../../../../../../../utils/GridUtil";

class DiagnosisResult extends Component {

    onPageDataChange = (data) => {
        this.props.setPageInfo(data);
    };

    gotToAddEdit = (diagnosisID) => {
        setStorageItem(Constants.STORAGE.SELECTED_DIAGNOSIS_ID, diagnosisID);
        history.push({
            pathname: Constants.PAGES.diagnosisAddEdit
        });
    };

    render() {
        let {pagedDiagnosis} = this.props;
        pagedDiagnosis = pagedDiagnosis ? pagedDiagnosis : {};
        const hasData = pagedDiagnosis.pageData && pagedDiagnosis.pageData.length > 0;

        return (
            <>
                <CRow>
                    <CCol xs="12">
                        <CCard>
                            <CCardBody>

                                {
                                    !hasData &&
                                    <CAlert color="warning">
                                        No Diagnosis(s) found.
                                    </CAlert>
                                }

                                {
                                    hasData &&
                                    <>
                                        <div className="table-responsive">
                                            <table className="table table-striped">
                                                <thead>
                                                <tr>
                                                    <th>Disease</th>
                                                    <th>Description</th>
                                                    <th>Status</th>
                                                </tr>
                                                </thead>
                                                <tbody>

                                                {
                                                    pagedDiagnosis.pageData.map((data) => {
                                                        return (
                                                            <tr key={data.diagnosisID}
                                                                className={'clickable-data-row'}
                                                                onClick={(e) => {
                                                                    e.preventDefault();
                                                                    e.stopPropagation();
                                                                    this.gotToAddEdit(data.diagnosisID);
                                                                }}
                                                            >
                                                                <td>{getCommonStringForGrid(data.diagnosisName)}</td>
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
                                                    currentPageNo={pagedDiagnosis.currentPageNo}
                                                    totalNoOfPages={pagedDiagnosis.totalNoOfPages}
                                                    pageLength={pagedDiagnosis.pageLength}
                                                    onPaginationChange={this.onPageDataChange}
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
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
            setPageInfo: Actions.setPageInfo,
        },
        dispatch);
}

function mapStateToProps({diagnosis}) {
    return {
        pagedDiagnosis: diagnosis.diagnosisSearch.pagedDiagnosis
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(DiagnosisResult);