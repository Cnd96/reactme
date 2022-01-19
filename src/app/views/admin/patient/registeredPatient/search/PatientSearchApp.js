import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Constants from "../../../../../../utils/Constants";
import {getPagedDataFromState} from "../../../../../../utils/DataExtractHelper";
import {getConstantValueForSearch} from "../../../../../../utils/FormUtils";
import * as Actions from "../store/actions/index";
import withReducer from "../../../../../store/withReducer";
import reducer from "../store/reducers/index";
import PatientResult from "./components/PatientResult";
import PatientSearch from "./components/PatientSearch";
import {removeStorageItem, setStorageItem} from "../../../../../../utils/StorageUtils";
import * as PatientActions from "../../newPatient/stepper/stepComponents/registerPatient/store/actions";
import * as CheckupActions from "../../newPatient/stepper/stepComponents/createCheckUp/store/action";
import history from "../../../../../../@history";

const PatientSearchApp = () => {
    const dispatch = useDispatch();
    const data = useSelector(({patientSearch}) => patientSearch.patientSearch);

    useEffect(() => {
        onSearch();
    }, [dispatch, data.pageInfo, data.searchData]);

    useEffect(() => {
        return (() => {
            dispatch(Actions.resetSearchData());
        });
    }, [dispatch]);

    const createCheckUp = (patientID) => {
        removeStorageItem(Constants.STORAGE.CHECKUP_ID);
        dispatch(PatientActions.onResetPatientData());
        dispatch(CheckupActions.resetCheckupData());


        setStorageItem(Constants.STORAGE.PATIENT_ID, patientID);
        history.push({
            pathname: Constants.PAGES.newPatient
        });
    };


    let onSearch = () => {
        let pageInfo = data.pageInfo;
        let formData = data.searchData;
        let pageData = getPagedDataFromState(pageInfo);
        let searchData = {
            ...pageData,
            ...formData,
            status: getConstantValueForSearch(formData.status, Constants.STATUS_CONST.ACT)
        };

        dispatch(Actions.getPagedPatients(searchData));
    };

    return (
        <>
            <PatientSearch createCheckUp={createCheckUp}/>
            <PatientResult createCheckUp={createCheckUp}/>
        </>
    );
};

export default withReducer('patientSearch', reducer)(PatientSearchApp);