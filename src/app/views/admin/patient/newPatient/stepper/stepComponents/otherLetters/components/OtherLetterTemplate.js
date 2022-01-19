import React from 'react';
import {useSelector} from "react-redux";
import DiagnosisCard from "./templates/DiagnosisCard";
import PrintPrescription from "./templates/PrintPrescription";
import PhysiotherapyRequestForm from "./templates/PhysiotherapyRequestForm";

const OtherLetterTemplate = () => {

    const reducerData = useSelector(({selectOtherLetter}) => selectOtherLetter.selectOtherLetter);
    return (
        <>
            <div>
                {
                    reducerData.letterType.TYPE === 'DIAGNOSIS_CARD' && <DiagnosisCard/>
                }
                {
                    reducerData.letterType.TYPE === 'PRESCRIPTION' && <PrintPrescription/>
                }
                {
                    reducerData.letterType.TYPE === 'PHYSIOTHERAPY_REQUEST' && <PhysiotherapyRequestForm/>
                }
            </div>
        </>
    );
};

export default OtherLetterTemplate;