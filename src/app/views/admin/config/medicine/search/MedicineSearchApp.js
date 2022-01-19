import React, {useEffect} from 'react';
import MedicineSearch from "./components/MedicineSearch";
import MedicineResult from "./components/MedicineResult";
import withReducer from "../../../../../store/withReducer";
import reducer from "../store/reducers/index";
import {useDispatch, useSelector} from "react-redux";
import * as Actions from "../store/action";
import {getPagedDataFromState} from "../../../../../../utils/DataExtractHelper";
import {getConstantValueForSearch} from "../../../../../../utils/FormUtils";
import Constants from "../../../../../../utils/Constants";
import {CCard, CCardBody, CCol, CRow} from "@coreui/react";

const MedicineSearchApp = () => {
    const dispatch = useDispatch();
    const data = useSelector(({medicine}) => medicine.medicineSearch);


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

        dispatch(Actions.getPagedMedicine(searchData));
    };

    return (
        <>
            <CRow>
                <CCol xs="12">
                    <CCard>
                        <CCardBody>
                            <MedicineSearch/>
                            <MedicineResult/>
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>
        </>

    );
};

export default withReducer('medicine', reducer)(MedicineSearchApp);