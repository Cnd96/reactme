import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import MedicalDiseasesAddEditBase from "./components/MedicalDiseasesAddEditBase";
import withReducer from "../../../../../store/withReducer";
import reducer from "../store/reducers";
import {getStorageItem, removeStorageItem} from "../../../../../../utils/StorageUtils";
import Constants from "../../../../../../utils/Constants";
import * as Action from "../store/action/index";

function MedicalDiseasesAddEditApp() {
    const dispatch = useDispatch();
    useEffect(() => {

        let medicalDiseaseID = getStorageItem(Constants.STORAGE.SELECTED_MEDICAL_DISEASE_ID);
        if (medicalDiseaseID) {
            dispatch(Action.getMedicalDiseaseDTOByID(medicalDiseaseID));
        }

        return () => {
            dispatch(Action.reset());
            removeStorageItem(Constants.STORAGE.SELECTED_MEDICAL_DISEASE_ID);
        };
    }, [dispatch]);

    return (
        <div>
            <MedicalDiseasesAddEditBase/>
        </div>
    );
}

export default withReducer('medicalDisease', reducer)(MedicalDiseasesAddEditApp);