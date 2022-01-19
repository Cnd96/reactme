import React, {useEffect, useState} from 'react';
import CustomCheckBox from "../../../../../../../common/CustomCheckBox";
import * as Action from "../store/actions";
import {useDispatch, useSelector} from "react-redux";

const PhysicalActivity = ({physicalActivity}) => {

    const dispatch = useDispatch();
    const physicalActivitiesData = useSelector(({selectPhysicalActivities}) => selectPhysicalActivities.selectPhysicalActivity);
    const [index, setIndex] = useState();

    useEffect(() => {
        let index = physicalActivitiesData.currentIDs.findIndex((id) => {
            return id == physicalActivity.physicalActivityID
        });
        if (index !== -1) {
            dispatch(Action.onSelectOption(physicalActivity));
        }
        setIndex(index);
    }, []);

    useEffect(() => {
        let index = physicalActivitiesData.currentIDs.findIndex((id) => {
            return id == physicalActivity.physicalActivityID
        });
        setIndex(index);
    }, [physicalActivitiesData.currentIDs, physicalActivitiesData]);

    return (
        <div className={'privilege-checkbox'}>
            <CustomCheckBox
                id={physicalActivity.physicalActivityID}
                name={physicalActivity.physicalActivityID}
                value={physicalActivity}
                checked={index !== -1}
                label={physicalActivity.activityName}
                onCheckChange={(e, value) => {
                    dispatch(Action.onSelectOption(value));
                }}
            />
        </div>
    );
};

export default PhysicalActivity;