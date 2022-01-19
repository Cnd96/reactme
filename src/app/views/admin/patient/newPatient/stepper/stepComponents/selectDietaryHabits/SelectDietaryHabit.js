import React, {useEffect} from 'react';
import { NextButton, PrevButton, SaveButton } from "../../../../../../common/NextPrevButtonGroup";
import withReducer from "../../../../../../../store/withReducer";
import reducer from "./store/reducer/index";
import {useDispatch, useSelector} from "react-redux";
import * as Actions from './store/action'
import DietaryCategory from "./components/DietaryCategory";
import * as _ from "lodash";
import {trimData} from "../../../../../../../../utils/DataExtractHelper";
import * as CheckupAction from "../createCheckUp/store/action/index";

const generateSaveObject = (dietaryHabits, checkup) => {

    let removedIDList = _.difference(dietaryHabits.prevDietaryHabitIds, dietaryHabits.currentIDs);
    let addedIDList = _.difference(dietaryHabits.currentIDs, dietaryHabits.prevDietaryHabitIds);
    return Object.assign({}, {
        addedIDList: addedIDList,
        removedIDList: removedIDList
    }, {checkupID: checkup.checkupID ? checkup.checkupID : null});
};

const SelectDietaryHabit = ({setPageIndex, nextPageIndex, prevPageIndex}) => {

    let dispatch = useDispatch();
    const dietaryHabits = useSelector(({selectDietaryHabit}) => selectDietaryHabit.selectDietaryHabit);
    const checkupData = useSelector(({checkup}) => checkup.checkupAddEdit);

    useEffect(() => {
        dispatch(Actions.getDietaryCategories());
    }, []);

    useEffect(() => {
        dispatch(Actions.setCheckupDietaryHabitIds(checkupData.checkup.dietaryHabits));
    }, [dispatch, checkupData]);

    const saveFunction = (isNext) => {
        let saveObj = generateSaveObject(dietaryHabits, checkupData.checkup);
        if (saveObj.removedIDList.length > 0 || saveObj.addedIDList.length > 0) {
            dispatch(Actions.saveOrUpdateCheckupWithDietaryHabits(trimData(saveObj))).then(response => {
                dispatch(CheckupAction.onSetCheckup(response.payload));
                isNext && setPageIndex(nextPageIndex);
            })
        } else {
            isNext && setPageIndex(nextPageIndex);
        }
    };

    return (
        <>
            <div className='d-flex flex-row flex-wrap  justify-content-end'>
                <PrevButton isValid={true} onClickHandler={ () => setPageIndex(prevPageIndex) } />
                <SaveButton isValid={true} onClickHandler={ () => saveFunction(false) } />
                <NextButton isValid={true} onClickHandler={ () => saveFunction(true) } />
            </div>
            <h5>Dietary Habits</h5>
            {
                dietaryHabits.dietaryCategories &&
                dietaryHabits.dietaryCategories.map((dietaryCategory, index) => {
                    return <DietaryCategory key={index} dietaryCategory={dietaryCategory}/>
                })
            }
        </>
    );
};

export default withReducer('selectDietaryHabit', reducer)(SelectDietaryHabit);