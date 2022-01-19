import React, {useEffect} from 'react';
import PrescriptionTemplateSearch from "./components/PrescriptionTemplateSearch";
import PrescriptionTemplateResult from "./components/PrescriptionTemplateResult";
import withReducer from "../../../../../store/withReducer";
import reducer from "../store/reducer";
import {CCard, CCardBody, CCol, CRow} from "@coreui/react";
import {useDispatch, useSelector} from "react-redux";
import * as Actions from "../store/actions/index";
import {getPagedDataFromState} from "../../../../../../utils/DataExtractHelper";
import {getConstantValueForSearch} from "../../../../../../utils/FormUtils";
import Constants from "../../../../../../utils/Constants";

const PrescriptionTemplateSearchApp = () => {

    const dispatch = useDispatch();
    const data = useSelector(({prescriptionTemplate}) => prescriptionTemplate.prescriptionTemplateSearch);

    useEffect(() => {
        onSearch();
    }, [dispatch, data.pageInfo, data.searchData]);

    useEffect(() => {
        return () => {
            dispatch(Actions.onResetSearchData());
        };
    }, []);

    let onSearch = () => {
        let pageInfo = data.pageInfo;
        let formData = data.searchData;
        let pageData = getPagedDataFromState(pageInfo);
        let searchData = {
            ...pageData,
            ...formData,
            status: getConstantValueForSearch(formData.status, Constants.STATUS_CONST.ACT)
        };
        dispatch(Actions.getPagedPrescriptionTemplate(searchData));
    };

    return (
        <>
            <CRow>
                <CCol xs="12">
                    <CCard>
                        <CCardBody>
                            <PrescriptionTemplateSearch/>
                            <PrescriptionTemplateResult/>
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>
        </>
    );
};
export default withReducer('prescriptionTemplate', reducer)(PrescriptionTemplateSearchApp);