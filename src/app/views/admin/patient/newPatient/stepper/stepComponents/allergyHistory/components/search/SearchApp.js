import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getPagedDataFromState} from "../../../../../../../../../../utils/DataExtractHelper";
import {getStorageItem} from "../../../../../../../../../../utils/StorageUtils";
import Constants from "../../../../../../../../../../utils/Constants";
import {getConstantValueForSearch} from "../../../../../../../../../../utils/FormUtils";
import * as Action from "../../store/actions";
import withReducer from "../../../../../../../../../store/withReducer";
import reducer from "../../store/reducers";
import AllergySearchResult from "./AllergySearchResult";

const SearchApp = () => {


    const dispatch = useDispatch();
    const data = useSelector(({allergyHistory}) => allergyHistory.allergyHistorySearch);

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
        dispatch(Action.getPagedAllergyHistory(searchData));
    };


    return (
        <div>
            <AllergySearchResult/>
        </div>
    );
};

export default withReducer('allergyHistory', reducer)(SearchApp);