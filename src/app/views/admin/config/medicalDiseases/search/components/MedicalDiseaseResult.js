import React, {Component} from 'react';
import * as Actions from "../../store/action/index";
import {bindActionCreators} from "redux";
import {CAlert, CCard, CCardBody, CCol, CRow} from "@coreui/react";
import {getActInaFromConstantForGrid, getCommonStringForGrid} from "../../../../../../../utils/GridUtil";
import AppPagination from "../../../../../common/AppPagination";
import {connect} from "react-redux";
import {setStorageItem} from "../../../../../../../utils/StorageUtils";
import Constants from "../../../../../../../utils/Constants";
import history from '../../../../../../../@history';

class MedicalDiseaseResult extends Component {

    onPageDataChange = (data) => {
        this.props.setPageInfo(data);
    };

    gotToAddEdit = (importerGroupID) => {
        setStorageItem(Constants.STORAGE.SELECTED_MEDICAL_DISEASE_ID, importerGroupID);
        history.push({
            pathname: Constants.PAGES.medicalDiseasesAddEdit
        });
    };

    render() {

        let {pagedMedicalDisease} = this.props;
        pagedMedicalDisease = pagedMedicalDisease ? pagedMedicalDisease : {};
        const hasData = pagedMedicalDisease.pageData && pagedMedicalDisease.pageData.length > 0;

        return (
            <>
                <CRow>
                    <CCol xs="12">
                        <CCard>
                            <CCardBody>

                                {
                                    !hasData &&
                                    <CAlert color="warning">
                                        No Disease(s) found.
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
                                                    pagedMedicalDisease.pageData.map((data) => {
                                                        return (
                                                            <tr key={data.medicalDiseaseID}
                                                                className={'clickable-data-row'}
                                                                onClick={(e) => {
                                                                    e.preventDefault();
                                                                    e.stopPropagation();
                                                                    this.gotToAddEdit(data.medicalDiseaseID);
                                                                }}
                                                            >
                                                                <td>{getCommonStringForGrid(data.diseaseName)}</td>
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
                                                    currentPageNo={pagedMedicalDisease.currentPageNo}
                                                    totalNoOfPages={pagedMedicalDisease.totalNoOfPages}
                                                    pageLength={pagedMedicalDisease.pageLength}
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

function mapStateToProps({medicalDisease}) {
    return {
        pagedMedicalDisease: medicalDisease.medicalDiseaseSearch.pagedMedicalDisease
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MedicalDiseaseResult);