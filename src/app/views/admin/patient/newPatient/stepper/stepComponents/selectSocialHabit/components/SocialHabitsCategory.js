import React from 'react';
import SocialHabit from "./SocailHabit";
import Constants from "../../../../../../../../../utils/Constants";

const SocialHabitsCategory = ({socialHabitCategory}) => {

    return (
        <div className='privilege-scroll-section'>
            <div
                className={'privilege-main-category-section'}
            >
                <div className={'privilege-category-name'}>
                    <h5>{socialHabitCategory.categoryName} </h5>
                </div>

                <div
                    className={'privilege-category-section'}
                    style={{marginLeft: '5%'}}
                >
                    {
                        socialHabitCategory.socialHabits.sort((a, b) => parseFloat(a.socialHabitID) - parseFloat(b.socialHabitID)).filter(socailHabit => socailHabit.status === Constants.STATUS_CONST.ACT).map((socialHabit, index) => {
                            return <SocialHabit key={index} socialHabit={socialHabit}/>
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default SocialHabitsCategory;