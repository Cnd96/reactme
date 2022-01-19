import React, {useEffect} from 'react';
import * as Action from "../store/actions";
import * as CheckupAction from "../../createCheckUp/store/action";
import {useDispatch, useSelector} from "react-redux";
import FitToWork from "./FitToWork";
import NextPrevButtonGroup from "../../../../../../../common/NextPrevButtonGroup";

const generateSaveObject = (checkupData, followUpsData) => {
    return Object.assign({}, {
        checkupID: checkupData.checkup ? checkupData.checkup.checkupID : null,
        fitToWorkID: followUpsData.selectedFitToWorkID ? followUpsData.selectedFitToWorkID : null
    });
};

const FitToWorkList = ({setPageIndex}) => {

    const dispatch = useDispatch();
    const fitToWorkData = useSelector(({SelectFitToWork}) => SelectFitToWork.fitToWorkSelect);
    const checkupData = useSelector(({checkup}) => checkup.checkupAddEdit);

    useEffect(() => {
        dispatch(Action.setCurrentFitToWorkID(checkupData.checkup.fitToWorkID));
    }, [dispatch, checkupData.checkup.fitToWorkID]);

    const saveFunction = () => {
        let saveObject = generateSaveObject(checkupData, fitToWorkData);
        if (saveObject.fitToWorkID) {
            dispatch(Action.saveOrUpdateCheckupWithFitToWork(saveObject)).then(response => {
                dispatch(CheckupAction.onSetCheckup(response.payload));
                setPageIndex(11);
            })
        } else {
            setPageIndex(11);
        }

    };

    return (
        <div className='privilege-scroll-section'>
            <div className={'privilege-main-category-section'}>
                <div className={'privilege-category-name'}>
                    <h5>Fit To Work</h5>
                </div>

                <div className={'privilege-category-section'} style={{marginLeft: '5%'}}>
                    <div>
                        {
                            fitToWorkData.fitToWorks.map((fitToWork, index) => {
                                return <FitToWork key={index} fitToWork={fitToWork}/>
                            })
                        }

                    </div>
                </div>
            </div>

            <NextPrevButtonGroup setPageIndex={setPageIndex} prevPageIndex={9} saveFunction={saveFunction}
                                 isValid={true}/>

        </div>
    );
};

export default FitToWorkList;
