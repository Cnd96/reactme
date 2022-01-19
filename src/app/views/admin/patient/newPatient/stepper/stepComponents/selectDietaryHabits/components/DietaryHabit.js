import React, {useEffect, useState} from 'react';
import CustomCheckBox from "../../../../../../../common/CustomCheckBox";
import {useDispatch, useSelector} from "react-redux";
import * as Action from '../store/action/select.dietary.habit.actions'

const DietaryHabit = ({dietaryHabit}) => {

    const dispatch = useDispatch();
    const dietaryHabits = useSelector(({selectDietaryHabit}) => selectDietaryHabit.selectDietaryHabit);
    const [index, setIndex] = useState();

    useEffect(() => {
        let index = dietaryHabits.currentIDs.findIndex((id) => {
            return id == dietaryHabit.dietaryHabitID
        });
        if (index !== -1) {
            dispatch(Action.onSelectOption(dietaryHabit));
        }
        setIndex(index);
    }, []);

    useEffect(() => {
        let index = dietaryHabits.currentIDs.findIndex((id) => {
            return id == dietaryHabit.dietaryHabitID
        });
        setIndex(index);
    }, [dietaryHabits.currentIDs, dietaryHabits]);

    return (
        <div className={'privilege-checkbox'}>
            <CustomCheckBox
                id={dietaryHabit.dietaryHabitID}
                name={dietaryHabit.dietaryHabitID}
                value={dietaryHabit}
                checked={index !== -1}
                label={dietaryHabit.dietaryHabit}
                onCheckChange={(e, value) => {
                    dispatch(Action.onSelectOption(value));
                }}
            />
        </div>
    );
};

export default DietaryHabit;