import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import CustomCheckBox from "../../../../../../../common/CustomCheckBox";
import * as Action from "../store/actions";

const FitToWork = ({fitToWork}) => {
    const dispatch = useDispatch();
    const fitToWorkData = useSelector(({SelectFitToWork}) => SelectFitToWork.fitToWorkSelect);

    return (
        <div className={'privilege-checkbox'}>
            <CustomCheckBox
                id={fitToWork.fitToWorkID}
                name={fitToWork.fitToWorkID}
                value={fitToWork}
                label={fitToWork.category}
                checked={fitToWork.fitToWorkID == fitToWorkData.selectedFitToWorkID}
                onCheckChange={(e, data) => {
                    let checked = e.target.checked;
                    if (checked) {
                        dispatch(Action.onAddFitToWorkID(fitToWork.fitToWorkID));
                    } else {
                        dispatch(Action.onRemoveFitToWorkID(fitToWork.fitToWorkID));
                    }
                }}
            />
        </div>
    );
};

export default FitToWork;