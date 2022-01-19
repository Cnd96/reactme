import React, {useEffect} from 'react';
import {CCard, CCardBody, CCol, CRow} from "@coreui/react";
import withReducer from "../../../../../store/withReducer";
import reducer from "../store/reducer/index";
import {useDispatch, useSelector} from "react-redux";
import {getPagedDataFromState} from "../../../../../../utils/DataExtractHelper";
import {getConstantValueForSearch} from "../../../../../../utils/FormUtils";
import Constants from "../../../../../../utils/Constants";
import MedicalTestTypeResults from "./components/MedicalTestTypeResults";
import MedicalTestTypesSearch from "./components/MedicalTestTypesSearch";
import * as Actions from "../store/actions/index"

const MedicalTestTypesSearchApp = () => {

    const dispatch = useDispatch();
    const data = useSelector(({medicalTestTypes}) => medicalTestTypes.medicalTestTypeSearch);

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
        dispatch(Actions.getPagedMedicalTestTypes(searchData));
    };


    return (
        <>
            <CRow>
                <CCol xs="12">
                    <CCard>
                        <CCardBody>
                            <MedicalTestTypesSearch/>
                            <MedicalTestTypeResults/>
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>
        </>
    );
};

export default withReducer('medicalTestTypes', reducer)(MedicalTestTypesSearchApp);
