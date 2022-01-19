import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import * as Action from "../store/actions/social.habit.select.action";
import CustomCheckBox from "../../../../../../../common/CustomCheckBox";

const SocialHabit = ({socialHabit}) => {

    const dispatch = useDispatch();
    const socialHabits = useSelector(({selectSocialHabits}) => selectSocialHabits.socialHabitSelect);
    const [index, setIndex] = useState();

    useEffect(() => {
        let index = socialHabits.currentIDs.findIndex((id) => {
            return id == socialHabit.socialHabitID
        });
        if (index !== -1) {
            dispatch(Action.onSelectOption(socialHabit));
        }
        setIndex(index);
    }, []);

    useEffect(() => {
        let index = socialHabits.currentIDs.findIndex((id) => {
            return id == socialHabit.socialHabitID
        });
        setIndex(index);
    }, [socialHabits.currentIDs, socialHabit]);

    return (
        <div className={'privilege-checkbox'}>
            <CustomCheckBox
                id={socialHabit.socialHabitID}
                name={socialHabit.socialHabitID}
                value={socialHabit}
                checked={index !== -1}
                label={socialHabit.socialHabitName}
                onCheckChange={(e, value) => {
                    dispatch(Action.onSelectOption(value));
                }}
            />
        </div>
    );
};

export default SocialHabit;