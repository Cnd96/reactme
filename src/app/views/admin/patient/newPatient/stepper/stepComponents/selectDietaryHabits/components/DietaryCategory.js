import React from 'react';
import DietaryHabit from "./DietaryHabit";

const DietaryCategory = ({dietaryCategory}) => {
    return (
        <div className='privilege-scroll-section'>
            <div
                className={'privilege-main-category-section'}
            >
                <div className={'privilege-category-name'}>
                    <h5>{dietaryCategory.dietaryCategory} </h5>
                </div>

                <div
                    className={'privilege-category-section'}
                    style={{marginLeft: '5%'}}
                >
                    {
                        dietaryCategory.dietaryHabits.sort((a, b) => parseFloat(a.dietaryHabitID) - parseFloat(b.dietaryHabitID)).map((dietaryHabit, index) => {
                            return <DietaryHabit key={index} dietaryHabit={dietaryHabit}/>
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default DietaryCategory;