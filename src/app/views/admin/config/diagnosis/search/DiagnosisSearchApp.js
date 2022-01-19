import React, {useEffect} from 'react';
import DiagnosisSearch from "./components/DiagnosisSearch";
import DiagnosisResult from "./components/DiagnosisResult";
import {useDispatch, useSelector} from "react-redux";
import {getPagedDataFromState} from "../../../../../../utils/DataExtractHelper";
import {getConstantValueForSearch} from "../../../../../../utils/FormUtils";
import Constants from "../../../../../../utils/Constants";
import * as Actions from "../store/action/index";
import withReducer from "../../../../../store/withReducer";
import reducer from "../store/reducers/index";
import {CCard, CCardBody, CCol, CRow} from "@coreui/react";

const DiagnosisSearchApp = () => {

    const dispatch = useDispatch();
    const data = useSelector(({diagnosis}) => diagnosis.diagnosisSearch);

    useEffect(() => {
        onSearch();
    }, [dispatch, data.pageInfo, data.searchData]);


    let onSearch = () => {
        let pageInfo = data.pageInfo;
        let formData = data.searchData;
        let pageData = getPagedDataFromState(pageInfo);
        let searchData = {
            ...pageData,
            ...formData,
            status: getConstantValueForSearch(formData.status, Constants.STATUS_CONST.ACT)
        };

        dispatch(Actions.getPagedDiagnosis(searchData));
    };

    return (
        <div>
            <CRow>
                <CCol xs="12">
                    <CCard>
                        <CCardBody>
                            <DiagnosisSearch/>
                            <DiagnosisResult/>
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>
        </div>
    );
};

export default withReducer('diagnosis', reducer)(DiagnosisSearchApp);
