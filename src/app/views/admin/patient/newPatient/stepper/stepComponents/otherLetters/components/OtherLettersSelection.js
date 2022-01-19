import React from 'react';
import CustomCheckBox from "../../../../../../../common/CustomCheckBox";
import Constants from "../../../../../../../../../utils/Constants";
import {useDispatch, useSelector} from "react-redux";
import * as Actions from '../store/actions/select.other.letter.action'

const OtherLettersSelection = () => {

    const dispatch = useDispatch();
    const reducerData = useSelector(({selectOtherLetter}) => selectOtherLetter.selectOtherLetter);


    return (
        <div>

            <div className='privilege-scroll-section'>
                <div className={'privilege-main-category-section'}>
                    <div className={'privilege-category-name'}>
                        <h5>Documents</h5>
                    </div>

                    <div className={'privilege-category-section'} style={{marginLeft: '5%'}}>
                        <div>
                            {
                                Constants.OTHER_LETTERS.map((data, index) => {
                                    return (
                                        <div className={'privilege-checkbox'} key={index}>
                                            <CustomCheckBox
                                                id={data.ID}
                                                name={data.ID}
                                                value={data}
                                                label={data.LABEL}
                                                checked={reducerData.letterType.ID == data.ID}
                                                onCheckChange={(e, data) => {
                                                    let checked = e.target.checked;
                                                    console.log(data);
                                                    if (checked) {
                                                        dispatch(Actions.onSelectOtherLetters(data))
                                                    } else {
                                                        dispatch(Actions.onSelectOtherLetters({ID: null, TYPE: null}));
                                                    }
                                                }}
                                            />
                                        </div>
                                    )
                                })
                            }

                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default OtherLettersSelection;