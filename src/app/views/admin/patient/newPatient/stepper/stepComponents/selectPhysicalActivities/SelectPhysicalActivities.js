import React, {useEffect} from 'react';
import NextPrevButtonGroup, { NextButton, PrevButton, SaveButton } from "../../../../../../common/NextPrevButtonGroup";
import * as Actions from "./store/actions";
import * as CheckupAction from '../../stepComponents/createCheckUp/store/action/checkup.app.add.edit.action'
import {useDispatch, useSelector} from "react-redux";
import withReducer from "../../../../../../../store/withReducer";
import reducer from "./store/reducers";
import PhysicalActivitiesCategories from "./components/PhysicalActivitiesCategories";
import * as _ from "lodash";
import {trimData} from "../../../../../../../../utils/DataExtractHelper";

const generateSaveObject = (physicalActivitiesData, checkup) => {

    let removedIDList = _.difference(physicalActivitiesData.prevPhysicalActivityIds, physicalActivitiesData.currentIDs);
    let addedIDList = _.difference(physicalActivitiesData.currentIDs, physicalActivitiesData.prevPhysicalActivityIds);
    return Object.assign({}, {
        addedIDList: addedIDList,
        removedIDList: removedIDList
    }, {checkupID: checkup.checkupID ? checkup.checkupID : null});
};

const SelectPhysicalActivities = ({setPageIndex, nextPageIndex, prevPageIndex}) => {

    let dispatch = useDispatch();
    const physicalActivitiesData = useSelector(({selectPhysicalActivities}) => selectPhysicalActivities.selectPhysicalActivity);
    const checkupData = useSelector(({checkup}) => checkup.checkupAddEdit);

    useEffect(() => {
        dispatch(Actions.getPhysicalActivityCategories());
    }, []);


    useEffect(() => {
        dispatch(Actions.setCheckupPhysicalActivityIds(checkupData.checkup.physicalActivities));
    }, [dispatch, checkupData]);


    const saveFunction = (isNext) => {
        let saveObj = generateSaveObject(physicalActivitiesData, checkupData.checkup);
        if (saveObj.removedIDList.length > 0 || saveObj.addedIDList.length > 0) {
            dispatch(Actions.saveOrUpdateCheckupWithPhysicalActivities(trimData(saveObj))).then(response => {
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
            <h5>Physical Activities</h5>
            {
                physicalActivitiesData.physicalActivityCategories &&
                physicalActivitiesData.physicalActivityCategories.map((physicalActivityCategory, index) => {
                    return <PhysicalActivitiesCategories key={index} physicalActivityCategory={physicalActivityCategory}/>
                })
            }
        </>
    );
};

export default withReducer('selectPhysicalActivities', reducer)(SelectPhysicalActivities);