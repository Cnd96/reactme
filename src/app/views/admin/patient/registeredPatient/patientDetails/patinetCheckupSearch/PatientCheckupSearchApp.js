import React, {useEffect} from 'react';
import withReducer from "../../../../../../store/withReducer";
import reducer from "./store/reducer";
import PatientCheckupSearch from "./components/PatientCheckupSearch";
import PatientCheckupSearchResult from "./components/PatientCheckupSearchResult";
import * as Action from "./store/actions";
import {useDispatch, useSelector} from "react-redux";
import Constants from "../../../../../../../utils/Constants";
import {getPagedDataFromState} from "../../../../../../../utils/DataExtractHelper";
import {getConstantValueForSearch} from "../../../../../../../utils/FormUtils";
import {CCard, CCardBody, CCardHeader, CCol, CRow} from "@coreui/react";

const PatientCheckupSearchApp = () => {

    let dispatch = useDispatch();
    const data = useSelector(({patientCheckupSearch}) => patientCheckupSearch.patientCheckupSearch);
    const patientData = useSelector(({patientDetails}) => patientDetails.patientDetails);
    useEffect(() => {
        onSearch();
    }, [dispatch, data.pageInfo, data.searchData, patientData.patient.patientID]);

    let onSearch = () => {

        let patientID = patientData.patient.patientID;
        let pageInfo = data.pageInfo;
        let formData = data.searchData;
        let pageData = getPagedDataFromState(pageInfo);
        let searchData = {
            ...pageData,
            ...formData,
            status: getConstantValueForSearch(formData.status, Constants.STATUS_CONST.ACT),
            patientID: patientID
        };
        if (patientID) {
            dispatch(Action.getPagedPatientCheckups(searchData));
        }

    };

    return (
        <div>
            <CRow>
                <CCol xs="12">
                    <CCard>
                        <CCardHeader>
                            <PatientCheckupSearch/>
                        </CCardHeader>
                        <CCardBody>
                            <PatientCheckupSearchResult/>
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>
        </div>
    );
};

export default withReducer('patientCheckupSearch', reducer)(PatientCheckupSearchApp);