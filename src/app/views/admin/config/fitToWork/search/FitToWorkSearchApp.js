import React, {useEffect} from 'react';
import {CCard, CCardBody, CCol, CRow} from "@coreui/react";
import withReducer from "../../../../../store/withReducer";
import reducer from "../store/reducers";
import {useDispatch, useSelector} from "react-redux";
import {getPagedDataFromState} from "../../../../../../utils/DataExtractHelper";
import {getConstantValueForSearch} from "../../../../../../utils/FormUtils";
import Constants from "../../../../../../utils/Constants";
import * as Actions from "../store/actions";
import FitToWorkResult from "./components/FitToWorkResult";
import FitToWorkSearch from "./components/FitToWorkSearch";

const FitToWorkSearchApp = () => {

    const dispatch = useDispatch();
    const data = useSelector(({fitToWork}) => fitToWork.fitToWorkSearch);

    useEffect(() => {
        onSearch();
    }, [dispatch, data.pageInfo, data.searchData]);

    useEffect(() => {
        dispatch(Actions.onResetSearchData());
    }, [dispatch]);

    let onSearch = () => {
        let pageInfo = data.pageInfo;
        let formData = data.searchData;
        let pageData = getPagedDataFromState(pageInfo);
        let searchData = {
            ...pageData,
            ...formData,
            status: getConstantValueForSearch(formData.status, Constants.STATUS_CONST.ACT)
        };
        dispatch(Actions.getFitToWorkList(searchData));
    };

    return (
        <>
            <CRow>
                <CCol xs="12">
                    <CCard>
                        <CCardBody>
                            <FitToWorkSearch/>
                            <FitToWorkResult/>
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>
        </>
    );
};

export default withReducer('fitToWork', reducer)(FitToWorkSearchApp);