import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getPagedDataFromState} from "../../../../../../../../../../utils/DataExtractHelper";
import {getConstantValueForSearch} from "../../../../../../../../../../utils/FormUtils";
import Constants from "../../../../../../../../../../utils/Constants";
import * as Action from "../../store/actions/index";
import withReducer from "../../../../../../../../../store/withReducer";
import reducer from "../../store/reducer";
import PatientComplainResult from "./PatientComplainResult";
import {getStorageItem} from "../../../../../../../../../../utils/StorageUtils";


const SearchApp = () => {

    const dispatch = useDispatch();
    const data = useSelector(({patientComplain}) => patientComplain.patientComplainSearch);

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
            patientID: getStorageItem(Constants.STORAGE.PATIENT_ID),
            status: getConstantValueForSearch(formData.status, Constants.STATUS_CONST.ACT)
        };
        dispatch(Action.getPagedPatientComplains(searchData));
    };

    return (
        <div>
            <PatientComplainResult/>
        </div>
    );
};

export default withReducer('patientComplain', reducer)(SearchApp);