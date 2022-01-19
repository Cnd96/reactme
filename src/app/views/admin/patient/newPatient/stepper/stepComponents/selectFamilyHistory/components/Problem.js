import React, {useEffect, useState} from 'react';
import CustomCheckBox from "../../../../../../../common/CustomCheckBox";
import {useDispatch, useSelector} from "react-redux";
import * as Action from "../store/actions/family.type.add.edit.action";

const Problem = ({medicalDisease, familyTypeID}) => {

    const dispatch = useDispatch();
    const familyTypeData = useSelector(({familyType}) => familyType.familyTypeAddEdit);
    const [index, setIndex] = useState(1);

    useEffect(() => {
        let idArray = familyTypeData.selectedMedicalDiseasesMap[familyTypeID] ? familyTypeData.selectedMedicalDiseasesMap[familyTypeID] : [];
        let index = idArray.findIndex((id) => {
            return id == medicalDisease.medicalDiseaseID
        });
        setIndex(index);
    }, [dispatch, familyTypeData.selectedMedicalDiseasesMap]);

    return (

        <div className={'privilege-checkbox'}>
            <CustomCheckBox
                id={`${medicalDisease.medicalDiseaseID}${familyTypeID}`}
                name={`${medicalDisease.medicalDiseaseID}${familyTypeID}`}
                value={medicalDisease}
                label={medicalDisease.diseaseName}
                checked={index !== -1}
                onCheckChange={(e, data) => {
                    let checked = e.target.checked;
                    if (checked) {
                        dispatch(Action.onAddMedicalDiseaseID({
                            medicalDiseaseID: medicalDisease.medicalDiseaseID,
                            familyTypeID: familyTypeID
                        }));
                    } else {
                        dispatch(Action.onRemoveMedicalDiseaseID({
                            medicalDiseaseID: medicalDisease.medicalDiseaseID,
                            familyTypeID: familyTypeID
                        }));
                    }
                }}
            />
        </div>
    );
};
export default Problem;