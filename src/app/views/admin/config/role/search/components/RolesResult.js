import React, {Component} from "react";
import * as Actions from "../../store/actions";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import Constants from "../../../../../../../utils/Constants";
import {setStorageItem} from "../../../../../../../utils/StorageUtils";
import history from '../../../../../../../@history';
import {getActInaFromConstantForGrid, getCommonStringForGrid} from "../../../../../../../utils/GridUtil";
import {CAlert, CCard, CCardBody, CCol, CRow} from "@coreui/react";
import AppPagination from "../../../../../common/AppPagination";
import {hasUserPrivilege} from "../../../../../../../utils/PrivilegeUtils";

class RolesResult extends Component {

    onPageDataChange = (data) => {
        this.props.setPageInfo(data);
    };

    gotToAddEdit = (roleID) => {
        if (hasUserPrivilege(Constants.PRIVILEGE_CODES.HEALTH_TRACKER_SETTINGS_ROLE_ADD_EDIT)) {
            setStorageItem(Constants.STORAGE.SELECTED_ROLE_ID, roleID);
            history.push({
                pathname: Constants.PAGES.roleAddEdit
            });
        }

    };

    render() {

        let {pagedRoles} = this.props;
        pagedRoles = pagedRoles ? pagedRoles : {};
        const hasData = pagedRoles.pageData && pagedRoles.pageData.length > 0;

        return (
            <>
                <CRow>
                    <CCol xs="12">
                        <CCard>
                            <CCardBody>

                                {
                                    !hasData &&
                                    <CAlert color="warning">
                                        No role(s) found.
                                    </CAlert>
                                }

                                {
                                    hasData &&
                                    <>
                                        <div className="table-responsive">
                                            <table className="table table-striped">
                                                <thead>
                                                <tr>
                                                    <th>Role Name</th>
                                                    <th>Status</th>
                                                </tr>
                                                </thead>
                                                <tbody>

                                                {
                                                    pagedRoles.pageData.map((data) => {
                                                        return (
                                                            <tr key={data.roleID}
                                                                className={'clickable-data-row'}
                                                                onClick={(e) => {
                                                                    e.preventDefault();
                                                                    e.stopPropagation();
                                                                    this.gotToAddEdit(data.roleID);
                                                                }}
                                                            >
                                                                <td>{getCommonStringForGrid(data.roleName)}</td>
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
                                                    currentPageNo={pagedRoles.currentPageNo}
                                                    totalNoOfPages={pagedRoles.totalNoOfPages}
                                                    pageLength={pagedRoles.pageLength}
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
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
            setPageInfo: Actions.setPageInfo,
        },
        dispatch);
}

function mapStateToProps({roles}) {
    return {
        pagedRoles: roles.rolesSearch.pagedRoles
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RolesResult);

