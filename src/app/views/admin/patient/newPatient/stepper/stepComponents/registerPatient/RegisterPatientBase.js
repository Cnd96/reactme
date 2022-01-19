import React, {useEffect} from 'react';
import PatientAddEditFrom from "./components/PatientAddEditFrom";
import withReducer from "../../../../../../../store/withReducer";
import reducer from "./store/reducers";
import {getStorageItem} from "../../../../../../../../utils/StorageUtils";
import Constants from "../../../../../../../../utils/Constants";
import {useDispatch} from "react-redux";
import * as Action from "./store/actions";

const RegisterPatientBase = (props) => {
    const {setPageIndex, nextPageIndex} = props;
    const dispatch = useDispatch();

    useEffect(() => {
        const patientID = getStorageItem(Constants.STORAGE.PATIENT_ID);
        if (patientID) {
            dispatch(Action.getPatientDTOByID(patientID))
        } else {
            dispatch(Action.reset());
        }
        return (() => {
            dispatch(Action.reset());
        })
    }, [dispatch]);

    return (
        <>
            {/*This following implementations is for Patient Search*/}
            {/*<div className={'privilege-main-category-section'}>*/}
            {/*    <div className={'privilege-category-name'}>*/}
            {/*        <h5>Search Patient </h5>*/}
            {/*    </div>*/}
            {/*    <div className={'privilege-category-section'}>*/}
            {/*        <SearchPatientFrom/>*/}
            {/*    </div>*/}
            {/*</div>*/}

            <PatientAddEditFrom setPageIndex={setPageIndex} nextPageIndex={nextPageIndex}/>
        </>
    );
};

export default withReducer('patient', reducer)(RegisterPatientBase);