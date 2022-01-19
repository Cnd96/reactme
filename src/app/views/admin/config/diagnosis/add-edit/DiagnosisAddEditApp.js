import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {getStorageItem, removeStorageItem} from "../../../../../../utils/StorageUtils";
import Constants from "../../../../../../utils/Constants";
import * as Action from "../store/action";
import DiagnosisAddEditBase from "./components/DiagnosisAddEditBase";
import withReducer from "../../../../../store/withReducer";
import reducer from "../store/reducers";

const DiagnosisAddEditApp = () => {
    const dispatch = useDispatch();

    useEffect(() => {

        let diagnosisID = getStorageItem(Constants.STORAGE.SELECTED_DIAGNOSIS_ID);
        if (diagnosisID) {
            dispatch(Action.getDiagnosisDTOByID(diagnosisID));
        }

        return () => {
            dispatch(Action.reset());
            removeStorageItem(Constants.STORAGE.SELECTED_DIAGNOSIS_ID);
        };
    }, [dispatch]);

    return (
        <div>
            <DiagnosisAddEditBase/>
        </div>
    );
};

export default withReducer('diagnosis', reducer)(DiagnosisAddEditApp);