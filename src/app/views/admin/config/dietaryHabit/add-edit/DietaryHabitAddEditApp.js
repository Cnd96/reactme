import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import * as Actions from "../store/action";
import {getStorageItem, removeStorageItem} from "../../../../../../utils/StorageUtils";
import Constants from "../../../../../../utils/Constants";
import {trimData} from "../../../../../../utils/DataExtractHelper";
import {CButton, CCard, CCardBody, CCol, CRow} from "@coreui/react";
import withReducer from "../../../../../store/withReducer";
import reducer from "../store/reducer";
import DietaryHabitAddEditFrom from "./components/DietaryHabitAddEditFrom";

const DietaryHabitAddEditApp = () => {

    const dispatch = useDispatch();
    const data = useSelector(({dietaryHabit}) => dietaryHabit.dietaryHabitAddEdit);

    useEffect(() => {
        dispatch(Actions.getDietaryCategories());

        let dietaryHabitID = getStorageItem(Constants.STORAGE.SELECTED_DIETARY_HABIT_ID);
        if (dietaryHabitID) {
            dispatch(Actions.getDietaryHabitByID(dietaryHabitID));
        }

        return (() => {
            removeStorageItem(Constants.STORAGE.SELECTED_DIETARY_HABIT_ID);
            dispatch(Actions.reset());
        })

    }, [dispatch]);

    const saveOrUpdateDietaryHabit = () => {
        let saveObj = trimData(data.formData.values);
        console.log(saveObj);
        dispatch(Actions.saveOrUpdateDietaryHabit(saveObj));
    };


    return (
        <div>
            <CRow>
                <CCol xs="12">
                    <CCard>
                        <CCardBody>
                            <DietaryHabitAddEditFrom/>
                            <CRow>
                                <CCol xs="12">
                                    <CButton
                                        disabled={!data.formData.isValid}
                                        onClick={() => {
                                            saveOrUpdateDietaryHabit();
                                        }}
                                        color="primary" className="float-right">Save</CButton>
                                </CCol>
                            </CRow>
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>
        </div>
    );
};

export default withReducer('dietaryHabit', reducer)(DietaryHabitAddEditApp);