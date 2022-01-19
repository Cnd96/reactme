import React from 'react';
import PhysicalActivity from "./PhysicalActivity";

const PhysicalActivitiesCategories = ({physicalActivityCategory}) => {
    return (
        <div className='privilege-scroll-section'>
            <div
                className={'privilege-main-category-section'}
            >
                <div className={'privilege-category-name'}>
                    <h5>{physicalActivityCategory.categoryName} </h5>
                </div>

                <div
                    className={'privilege-category-section'}
                    style={{marginLeft: '5%'}}
                >
                    {
                        physicalActivityCategory.physicalActivities.sort((a, b) => parseFloat(a.physicalActivityID) - parseFloat(b.physicalActivityID)).map((physicalActivity, index) => {
                            return <PhysicalActivity key={index} physicalActivity={physicalActivity}/>
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default PhysicalActivitiesCategories;

