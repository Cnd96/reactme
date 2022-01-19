import React, {useEffect} from 'react';
import DietaryHabitCategoryAddEditForm from "./components/DietaryHabitCategoryAddEditForm";
import withReducer from "../../../../../store/withReducer";
import reducer from "../store/reducer";
import {CButton, CCard, CCardBody, CCol, CRow} from "@coreui/react";
import {useDispatch, useSelector} from "react-redux";
import {getStorageItem, removeStorageItem} from "../../../../../../utils/StorageUtils";
import Constants from "../../../../../../utils/Constants";
import * as Action from "../store/action";
import {trimData} from "../../../../../../utils/DataExtractHelper";

const DietaryHabitCategoryAddEditApp = () => {

    const dispatch = useDispatch();
    const data = useSelector(({dietaryHabitCategory}) => dietaryHabitCategory.dietaryHabitCategoryAddEdit);

    useEffect(() => {
        let dietaryCategoryID = getStorageItem(Constants.STORAGE.SELECTED_DIETARY_HABIT_CATEGORY_ID);
        if (dietaryCategoryID) {
            dispatch(Action.getDietaryHabitCategoryByID(dietaryCategoryID));
        }
        return () => {
            dispatch(Action.reset());
            removeStorageItem(Constants.STORAGE.SELECTED_DIETARY_HABIT_CATEGORY_ID);
        };
    }, [dispatch]);

    const saveOrUpdateDietaryHabitCategory = () => {
        let saveObj = trimData(data.formData.values);
        dispatch(Action.saveOrUpdateDietaryHabitCategory(saveObj));
    };


    return (
        <div>
            <CRow>
                <CCol xs="12">
                    <CCard>
                        <CCardBody>
                            <DietaryHabitCategoryAddEditForm/>
                            <CRow>
                                <CCol xs="12">
                                    <CButton
                                        disabled={!data.formData.isValid}
                                        onClick={() => {
                                            saveOrUpdateDietaryHabitCategory();
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

export default withReducer('dietaryHabitCategory', reducer)(DietaryHabitCategoryAddEditApp);