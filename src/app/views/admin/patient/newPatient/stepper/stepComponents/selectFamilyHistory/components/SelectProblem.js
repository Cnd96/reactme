import React from 'react';
import Problem from "./Problem";
import {useSelector} from "react-redux";

const SelectProblem = ({familyTypeID}) => {

    const familyType = useSelector(({familyType}) => familyType.familyTypeAddEdit);

    return (
        <div className='privilege-scroll-section'>
            <div
                className={'privilege-main-category-section'}
            >
                <div className={'privilege-category-name'}>
                    <h5> Select Problem </h5>
                </div>

                <div
                    className={'privilege-category-section'}
                    style={{marginLeft: '2%'}}
                >
                    {
                        familyType.medicalDiseases.map((medicalDisease, index) => {
                            return <Problem key={index} medicalDisease={medicalDisease} familyTypeID={familyTypeID}/>
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default SelectProblem;