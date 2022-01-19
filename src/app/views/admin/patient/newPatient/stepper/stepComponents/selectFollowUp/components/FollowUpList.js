import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import FollowUp from "./FollowUp";
import * as Action from '../store/actions';
import * as CheckupAction from '../../createCheckUp/store/action'
import NextPrevButtonGroup from "../../../../../../../common/NextPrevButtonGroup";

const generateSaveObject = (checkupData, followUpsData) => {

    return Object.assign({}, {
        checkupID: checkupData.checkup ? checkupData.checkup.checkupID : null,
        followUpID: followUpsData.selectedFollowUpID ? followUpsData.selectedFollowUpID : null
    });
};


const FollowUpList = ({setPageIndex}) => {

    const dispatch = useDispatch();
    const followUpsData = useSelector(({SelectFollowUps}) => SelectFollowUps.followUpSelect);
    const checkupData = useSelector(({checkup}) => checkup.checkupAddEdit);

    useEffect(() => {
        dispatch(Action.setCurrentFollowUpIDs(checkupData.checkup.followUpID));
    }, [dispatch, checkupData.checkup.followUpID]);

    const saveFunction = () => {
        let saveObject = generateSaveObject(checkupData, followUpsData);
        if (saveObject.followUpID) {
            dispatch(Action.saveOrUpdateCheckupWithFollowUp(saveObject)).then(response => {
                dispatch(CheckupAction.onSetCheckup(response.payload));
                setPageIndex(10);
            })
        }
        setPageIndex(10);
    };

    return (
        <div className='privilege-scroll-section'>
            <div className={'privilege-main-category-section'}>
                <div className={'privilege-category-name'}>
                    <h5>Follow Ups</h5>
                </div>

                <div className={'privilege-category-section'} style={{marginLeft: '5%'}}>
                    <div>
                        {
                            followUpsData.followUps.map((followUp, index) => {
                                return <FollowUp key={index} followUp={followUp}/>
                            })
                        }

                    </div>
                </div>
            </div>

            <NextPrevButtonGroup setPageIndex={setPageIndex} prevPageIndex={8} saveFunction={saveFunction} isValid={true}/>

        </div>
    );
};

export default FollowUpList;