import React from 'react';
import CustomCheckBox from "../../../../../../../common/CustomCheckBox";
import {useDispatch, useSelector} from "react-redux";
import * as Action from '../store/actions'

const FollowUp = ({followUp}) => {
    const dispatch = useDispatch();
    const followUpsData = useSelector(({SelectFollowUps}) => SelectFollowUps.followUpSelect);

    return (
        <div className={'privilege-checkbox'}>
            <CustomCheckBox
                id={followUp.followUpID}
                name={followUp.followUpID}
                value={followUp}
                label={followUp.followUp}
                checked={followUp.followUpID == followUpsData.selectedFollowUpID}
                onCheckChange={(e, data) => {
                    let checked = e.target.checked;
                    if (checked) {
                        dispatch(Action.onAddFollowUpID(followUp.followUpID));
                    } else {
                        dispatch(Action.onRemoveFollowUpID(followUp.followUpID));
                    }
                }}
            />
        </div>
    );
};

export default FollowUp;