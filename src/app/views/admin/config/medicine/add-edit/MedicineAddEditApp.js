import React, {useEffect} from 'react';
import MedicineAddEditBase from "./components/MedicineAddEditBase";
import withReducer from "../../../../../store/withReducer";
import reducer from "../store/reducers";
import {useDispatch, useSelector} from "react-redux";
import * as Actions from "../store/action/index";
import {getStorageItem, removeStorageItem} from "../../../../../../utils/StorageUtils";
import Constants from "../../../../../../utils/Constants";
import AsyncMulti from "./components/test";

const MedicineAddEditApp = () => {

    const dispatch = useDispatch();
    const data = useSelector(({medicine}) => medicine.medicineAddEdit);

    useEffect(() => {
        let medicineID = getStorageItem(Constants.STORAGE.SELECTED_MEDICINE_ID);
        if (medicineID) {
            dispatch(Actions.getMedicineDTOByID(medicineID));
        }

        return () => {
            dispatch(Actions.reset());
            removeStorageItem(Constants.STORAGE.SELECTED_MEDICINE_ID);
        };
    }, []);

    return (
        <div>
            <MedicineAddEditBase/>
            {/*<AsyncMulti/>*/}
        </div>
    );
};

export default withReducer('medicine', reducer)(MedicineAddEditApp);