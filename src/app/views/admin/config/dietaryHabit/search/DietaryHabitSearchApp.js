import React, {useEffect} from 'react';
import withReducer from "../../../../../store/withReducer";
import reducer from "../store/reducer";
import {useDispatch, useSelector} from "react-redux";
import {getPagedDataFromState} from "../../../../../../utils/DataExtractHelper";
import {getConstantValueForSearch} from "../../../../../../utils/FormUtils";
import Constants from "../../../../../../utils/Constants";
import * as Actions from "../store/action";
import DietaryHabitsSearchFrom from "./components/DietaryHabitsSearchFrom";
import DietaryHabitsResult from "./components/DietaryHabitsResult";
import {CCard, CCardBody, CCol, CRow} from "@coreui/react";

const DietaryHabitSearchApp = () => {

    const dispatch = useDispatch();
    const data = useSelector(({dietaryHabit}) => dietaryHabit.dietaryHabitSearch);

    useEffect(() => {
        dispatch(Actions.getDietaryCategories({}));
    }, []);

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

        dispatch(Actions.getPagedDietaryHabit(searchData));
    };

    return (
        <div>
            <CRow>
                <CCol xs="12">
                    <CCard>
                        <CCardBody>
                            <DietaryHabitsSearchFrom/>
                            <DietaryHabitsResult/>
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>
        </div>
    );
};

export default withReducer('dietaryHabit', reducer)(DietaryHabitSearchApp);
