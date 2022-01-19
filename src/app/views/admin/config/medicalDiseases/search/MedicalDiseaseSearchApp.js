import React, {useEffect} from 'react';
import MedicalDiseaseSearch from "./components/MedicalDiseaseSearch";
import MedicalDiseaseResult from "./components/MedicalDiseaseResult";
import withReducer from "../../../../../store/withReducer";
import reducer from "../store/reducers/index";
import {useDispatch, useSelector} from "react-redux";
import {getPagedDataFromState} from "../../../../../../utils/DataExtractHelper";
import {getConstantValueForSearch} from "../../../../../../utils/FormUtils";
import Constants from "../../../../../../utils/Constants";
import * as Actions from '../store/action/index';
import {CCard, CCardBody, CCol, CRow} from "@coreui/react";

function MedicalDiseaseSearchApp() {

    const dispatch = useDispatch();
    const data = useSelector(({medicalDisease}) => medicalDisease.medicalDiseaseSearch);

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

        dispatch(Actions.getPagedMedicalDiseases(searchData));
    };

    return (
        <div>
            <CRow>
                <CCol xs="12">
                    <CCard>
                        <CCardBody>
                            <MedicalDiseaseSearch/>
                            <MedicalDiseaseResult/>
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>
        </div>
    );
}

export default withReducer('medicalDisease', reducer)(MedicalDiseaseSearchApp);
