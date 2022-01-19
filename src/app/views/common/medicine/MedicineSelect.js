import React, {Component} from 'react';
import dataService from "../../../services/dataService";
import {filter, isEmpty} from "lodash";
import {Field, Form, Formik} from "formik";
import CustomCheckBox from "../CustomCheckBox"

import {CAlert, CButton, CCard, CCardBody, CCol, CFormGroup, CLabel, CRow, CSelect,} from "@coreui/react";
import {getActInaFromConstantForGrid, getCommonStringForGrid} from "../../../../utils/GridUtil";
import AppPagination from "../AppPagination";
import Constants from "../../../../utils/Constants";
import {getCommonStatusOptions} from "../../../../utils/FormUtils";

class MedicineSelect extends Component {


    endPoint = {
        headerParam: {
            showLoading: true,
            showToast: true,
            skipAuth: false
        },
        url: '/api/medicine/getPagedMedicine',
        type: 'POST'
    };

    searchFormData = {};

    pageInfo = {
        page: 1,
        rows: 10,
    };
    state = {
        selectedIDs: [],
        excludeIDs: [],
        selectedItems: [],
        pagedItems: {},
        isAllReadersSelected: false
    };

    componentDidMount() {
        this.updateInitData({});
        this.onSearch({});
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.updateInitData(prevProps);
    }

    updateInitData = (prevProps) => {
        const {excludeIDs, selectedIDs} = this.props;
        if (excludeIDs && excludeIDs !== prevProps.excludeIDs) {
            this.setState({
                excludeIDs: excludeIDs
            });
        }

        if (selectedIDs && selectedIDs !== prevProps.selectedIDs) {
            this.setState({
                selectedIDs: selectedIDs
            });
        }
    };

    getSearchData = () => {
        let search = {
            ...this.pageInfo,
            ...this.searchFormData,
            status: this.searchFormData.status ? this.searchFormData.status : Constants.STATUS_CONST.ACT,
        };

        return search;
    };

    onReset = (resetForm) => {
        this.pageInfo = {
            page: 1,
            rows: 10,
        };
        resetForm();

        this.getPagedData(this.getSearchData());
    };

    getPagedData = (searchRQ) => {

        const request = dataService.post(this.endPoint, searchRQ);
        request.then((response) => {
            this.setState({
                pagedItems: response.data.result
            })
        }, (error) => {
            console.log(error);
        });
    };

    onSearch = (searchData) => {
        this.searchFormData = searchData;
        this.getPagedData(this.getSearchData());
    };

    setPageInfo = (pageInfo) => {
        this.pageInfo = pageInfo;
        this.getPagedData(this.getSearchData());
    };

    isExcludedItem = (id) => this.state.excludeIDs.indexOf(id) !== -1;

    isSelectedItem = (id) => this.state.selectedIDs.indexOf(id) !== -1;

    isItemDisabled = (id) => this.isExcludedItem(id);

    isItemSelected = () => !isEmpty(this.state.selectedItems) || !isEmpty(this.state.selectedIDs);

    onItemSelect = (item) => {
        if (!this.isItemDisabled(item.medicineID) && !this.isSelectedItem(item.medicineID)) {

            const {multiSelect} = this.props;
            this.setState({
                selectedIDs: multiSelect ? [...this.state.selectedIDs, item.medicineID] : [item.medicineID],
                selectedItems: multiSelect ? [...this.state.selectedItems, item] : [item]
            });

            if (this.props.onItemSelect) {
                this.props.onItemSelect(item);
            }
        }

        if (this.isSelectedItem(item.medicineID)) {

            const {multiSelect} = this.props;
            const selectedIDs = filter(this.state.selectedIDs, (readerID) => readerID !== item.medicineID);
            const selectedItems = filter(this.state.selectedItems, (curItem) => curItem.medicineID !== item.medicineID);
            this.setState({
                selectedIDs: multiSelect ? [...selectedIDs] : [],
                selectedItems: multiSelect ? [...selectedItems] : []
            });

            if (this.props.onItemRemove) {
                this.props.onItemRemove(item);
            }
        }
    };

    onConfirm = () => {
        if (this.props.onConfirm) {
            this.props.onConfirm(this.state.selectedIDs);
        }
    };

    onConfirmItems = () => {
        if (this.props.onSelectAllAndConfirm) {
            this.props.onSelectAllAndConfirm(this.state.selectedItems);
        }
    };

    onSelectAll = () => {
        return this.state.selectedIDs.length > 0;
    };

    onSelectAllAndConfirm = () => {
        this.pageInfo = {
            page: 1,
            rows: 10000,
        };
        if (this.props.onselectAllReaders) {
            this.props.onselectAllReaders(true);
        }

        const request = dataService.post(this.endPoint, this.getSearchData());
        request.then((response) => {
            this.setState({
                pagedItems: response.data.result
            }, () => {
                const {pagedItems} = this.state;
                const {excludeIDs} = this.props;
                let items = [...pagedItems.pageData];
                //const selectedItems = filter(items, (item) => excludeIDs.indexOf(item.readerID) === -1);
                // const selectedIDs = items.map(item => item.medicineID);
                // console.log(selectedIDs);
                console.log(items);
                this.setState({
                    selectedItems: items,
                    // selectedIDs: selectedIDs,
                }, () => {
                    this.onConfirmItems();
                });
            });
        }, (error) => {
            console.log(error);
        });
    };
    handleClose = () => {
        this.props.onClose();
    };

    getInitData = () => {
        return {
            medicineID: '',
            name: '',
            status: ''
        };
    };

    render() {
        const initData = this.getInitData();
        let {
            pagedItems,

        } = this.state;
        pagedItems = pagedItems ? pagedItems : {};
        const hasData = pagedItems.pageData && pagedItems.pageData.length > 0;

        return (
            <>
                <CRow>
                    <CCol>
                        <CCard>
                            <CCardBody>
                                <Formik
                                    enableReinitialize={true}
                                    initialValues={initData}
                                    onSubmit={(values, {setSubmitting, resetForm}) => {
                                        this.onSearch(values);
                                        setSubmitting(false);
                                    }}
                                >
                                    {({isSubmitting, dirty, resetForm}) => (
                                        <Form className={'d-full flex flex-row flex-wrap items-center'}>

                                            <CRow>
                                                <CCol sm="8" md="6" lg="6">
                                                    <CFormGroup>
                                                        <CLabel htmlFor="medicine">Medicine</CLabel>

                                                        <Field
                                                            type="text"
                                                            name="medicineName"
                                                            placeholder={'Medicine'}
                                                            className={'form-control'}
                                                        />
                                                    </CFormGroup>
                                                </CCol>

                                                <CCol sm="4" md="2" lg="2">
                                                    <CFormGroup>
                                                        <CLabel htmlFor="status">Status</CLabel>

                                                        <Field name="status">
                                                            {({
                                                                  field, // { name, value, onChange, onBlur }
                                                                  form: {touched, errors}, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                                                                  meta,
                                                              }) => (

                                                                <CSelect custom name="status" {...field}>
                                                                    {
                                                                        getCommonStatusOptions(true).map((item) => {
                                                                            return (
                                                                                <option key={item.key}
                                                                                        value={item.key}>{item.value}</option>
                                                                            );
                                                                        })
                                                                    }
                                                                </CSelect>
                                                            )}
                                                        </Field>
                                                    </CFormGroup>
                                                </CCol>

                                                <CCol sm="12" md="4" lg="4">
                                                    <CButton
                                                        type="submit"
                                                        disabled={isSubmitting}
                                                        color="info" className="row-button-styles mr-2">Search</CButton>
                                                    <CButton
                                                        onClick={() => {
                                                            this.onReset(resetForm);
                                                        }}
                                                        type='reset'
                                                        color="light" className="row-button-styles">Clear</CButton>

                                                </CCol>
                                            </CRow>

                                        </Form>
                                    )}
                                </Formik>
                            </CCardBody>
                        </CCard>
                    </CCol>
                </CRow>

                <CRow>
                    <CCol xm="12">

                        {
                            !hasData &&
                            <CAlert color="warning">
                                No reader(s) found.
                            </CAlert>
                        }

                        {
                            hasData &&
                            <>
                                <div className="table-responsive">
                                    <table className="table table-striped">
                                        <thead>
                                        <tr>
                                            <th style={{width: '75px'}}>
                                            </th>
                                            <th>Name</th>
                                            {/*<th>Status</th>*/}
                                        </tr>
                                        </thead>
                                        <tbody>

                                        {
                                            pagedItems.pageData.map((data) => {
                                                return (
                                                    <tr key={data.medicineID}
                                                        className={'clickable-data-row'}
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            e.stopPropagation();
                                                            this.onItemSelect(data);

                                                        }}
                                                    >
                                                        <td>
                                                            <CustomCheckBox
                                                                id={data.medicineID}
                                                                className={"pr-50p clickable-item  color-000000 "}
                                                                disabled={this.isItemDisabled(data.medicineID)}
                                                                checked={this.isSelectedItem(data.medicineID)}
                                                                onChange={(event) => {
                                                                    if (event) {
                                                                        event.preventDefault();
                                                                        event.stopPropagation();
                                                                    }
                                                                    this.onItemSelect(data);
                                                                }}
                                                            />

                                                        </td>
                                                        <td>{getCommonStringForGrid(data.medicineName)}</td>
                                                        {/*<td>*/}
                                                        {/*    {*/}
                                                        {/*        getActInaFromConstantForGrid(data.status)*/}
                                                        {/*    }*/}
                                                        {/*</td>*/}
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
                                            currentPageNo={pagedItems.currentPageNo}
                                            totalNoOfPages={pagedItems.totalNoOfPages}
                                            pageLength={pagedItems.pageLength}
                                            onPaginationChange={this.setPageInfo}
                                        />
                                    </CCol>
                                </CRow>

                                <CRow>
                                    <CCol xs="12">
                                        <CButton
                                            onClick={() => {
                                                this.handleClose();
                                            }}
                                            color="dark"
                                            className="float-right ml-1 mr-1">Cancel</CButton>
                                        <CButton
                                            onClick={() => {
                                                this.onConfirmItems();
                                            }}
                                            color="warning"
                                            className="float-right ml-1 mr-1">Confirm</CButton>
                                        {/*<CButton*/}
                                        {/*    onClick={() => {*/}
                                        {/*        this.onSelectAllAndConfirm();*/}
                                        {/*    }}*/}
                                        {/*    color="success"*/}
                                        {/*    className="float-right ml-1 mr-1">Select All</CButton>*/}
                                    </CCol>
                                </CRow>
                            </>
                        }

                    </CCol>
                </CRow>
            </>
        );
    }
}

MedicineSelect.defaultProps = {
    multiSelect: true,
    initData: {}
};

export default MedicineSelect;