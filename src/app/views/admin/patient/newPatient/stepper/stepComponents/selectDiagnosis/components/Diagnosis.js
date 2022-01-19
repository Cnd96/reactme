import React, {useEffect, useState} from 'react';
import CustomCheckBox from "../../../../../../../common/CustomCheckBox";
import * as Action from "../store/actions";
import {useDispatch, useSelector} from "react-redux";

const Diagnosis = ({diagnosis}) => {
    const dispatch = useDispatch();
    const diagnosisData = useSelector(({selectDiagnosis}) => selectDiagnosis.diagnosisSelect);
    const [index, setIndex] = useState();

    useEffect(() => {
        let index = diagnosisData.selectedDiagnosisIDs.findIndex((id) => {
            return id == diagnosis.diagnosisID
        });
        setIndex(index);
    }, [dispatch, diagnosisData.selectedDiagnosisIDs]);

    return (

        <div className={'privilege-checkbox'}>
            <CustomCheckBox
                id={diagnosis.diagnosisID}
                name={diagnosis.diagnosisID}
                value={diagnosis}
                label={diagnosis.diagnosisName}
                checked={index !== -1}
                onCheckChange={(e, data) => {
                    let checked = e.target.checked;
                    if (checked) {
                        dispatch(Action.onAddDiagnosisID(diagnosis.diagnosisID));
                    } else {
                        dispatch(Action.onRemoveDiagnosisID(diagnosis.diagnosisID));
                    }
                }}
            />
        </div>

    );
};

export default Diagnosis;