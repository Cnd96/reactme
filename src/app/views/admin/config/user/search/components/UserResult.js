import React, {Component} from "react";
import * as Actions from "../../store/actions";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import Constants from "../../../../../../../utils/Constants";
import {setStorageItem} from "../../../../../../../utils/StorageUtils";
import history from '../../../../../../../@history';
import {CAlert, CCard, CCardBody, CCol, CRow} from "@coreui/react";
import {getActInaFromConstantForGrid, getCommonStringForGrid} from "../../../../../../../utils/GridUtil";
import AppPagination from "../../../../../common/AppPagination";
import * as _ from "lodash";
import {hasUserPrivilege} from "../../../../../../../utils/PrivilegeUtils";

const getFullName = (data) => {
    let title = _.trim(data.title);
    let firstName = _.trim(data.firstName);
    let lastName = _.trim(data.lastName);
    return title.concat(' .').concat(firstName).concat(' ').concat(lastName);
};


class RolesResult extends Component {

    onPageDataChange = (data) => {
        this.props.setPageInfo(data);
    };

    gotToAddEdit = (userID) => {

        if(hasUserPrivilege(Constants.PRIVILEGE_CODES.HEALTH_TRACKER_SETTINGS_USER_ADD_EDIT)){
            setStorageItem(Constants.STORAGE.SELECTED_USER_ID, userID);
            history.push({
                pathname: Constants.PAGES.userAddEdit
            });
        }

    };

    render() {

        let {pagedUsers} = this.props;
        pagedUsers = pagedUsers ? pagedUsers : {};
        const hasData = pagedUsers.pageData && pagedUsers.pageData.length > 0;

        return (
            <>
                <CRow>
                    <CCol xs="12">
                        <CCard>
                            <CCardBody>
                                {
                                    !hasData &&
                                    <CAlert color="warning">
                                        No user(s) found.
                                    </CAlert>
                                }

                                {
                                    hasData &&
                                    <>
                                        <div className="table-responsive">
                                            <table className="table table-striped">
                                                <thead>
                                                <tr>
                                                    <th>User Name</th>
                                                    <th>Name</th>
                                                    <th>Email</th>
                                                    <th>Contact No</th>
                                                    <th>Status</th>
                                                </tr>
                                                </thead>
                                                <tbody>

                                                {
                                                    pagedUsers.pageData.map((data) => {
                                                        return (
                                                            <tr key={data.userID}
                                                                className={'clickable-data-row'}
                                                                onClick={(e) => {
                                                                    e.preventDefault();
                                                                    e.stopPropagation();
                                                                    this.gotToAddEdit(data.userID);
                                                                }}
                                                            >
                                                                <td>{getCommonStringForGrid(data.userName)}</td>
                                                                <td>{getCommonStringForGrid(getFullName(data))}</td>
                                                                <td>{getCommonStringForGrid(data.email)}</td>
                                                                <td>{getCommonStringForGrid(data.contactNo)}</td>
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
                                                    currentPageNo={pagedUsers.currentPageNo}
                                                    totalNoOfPages={pagedUsers.totalNoOfPages}
                                                    pageLength={pagedUsers.pageLength}
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

function mapStateToProps({users}) {
    return {
        pagedUsers: users.userSearch.pagedUsers
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RolesResult);

