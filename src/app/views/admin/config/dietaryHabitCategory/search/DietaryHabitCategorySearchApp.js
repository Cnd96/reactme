import React, {useEffect} from 'react';
import DietaryHabitCategoryResult from "./components/DietaryHabitCategoryResult";
import DietaryHabitCategorySearchForm from "./components/DietaryHabitCategorySearchForm";
import withReducer from "../../../../../store/withReducer";
import reducer from "../store/reducer/index";
import {useDispatch, useSelector} from "react-redux";
import {getPagedDataFromState} from "../../../../../../utils/DataExtractHelper";
import {getConstantValueForSearch} from "../../../../../../utils/FormUtils";
import Constants from "../../../../../../utils/Constants";
import * as Actions from "../store/action";
import {CCard, CCardBody, CCol, CRow} from "@coreui/react";

const DietaryHabitCategorySearchApp = () => {

    const dispatch = useDispatch();
    const data = useSelector(({dietaryHabitCategory}) => dietaryHabitCategory.dietaryHabitCategorySearch);

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

        dispatch(Actions.getPagedDietaryHabitCategories(searchData));
    };

    return (
        <div>
            <CRow>
                <CCol xs="12">
                    <CCard>
                        <CCardBody>
                            <DietaryHabitCategorySearchForm/>
                            <DietaryHabitCategoryResult/>
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>
        </div>
    );
};

export default withReducer('dietaryHabitCategory', reducer)(DietaryHabitCategorySearchApp);
