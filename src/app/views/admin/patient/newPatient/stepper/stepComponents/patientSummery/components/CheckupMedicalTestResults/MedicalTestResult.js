import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import CIcon from "@coreui/icons-react";
import {CCol, CRow} from "@coreui/react";

const MedicalTestResult = ({medicalTestType}) => {
    let dispatch = useDispatch();
    const patientSummeryData = useSelector(({patientSummery}) => patientSummery.patientSummeryReport);
    const [testResults, setTestResults] = useState([]);

    useEffect(() => {
        setTestResults(patientSummeryData.checkupMedicalTestResults[medicalTestType]);
    }, [dispatch, patientSummeryData.checkupMedicalTestResults[medicalTestType]]);


    return (
        <div style={{marginTop: '20px'}}>
            <h5><CIcon size={'lg'} name={'cil-window-restore'} style={{marginRight: '1%'}}/> {medicalTestType}</h5>
            {
                testResults && testResults.map((testResult, index) => {
                    return <CRow key={index} style={{marginLeft: '5%'}}>
                        <CIcon size={'sm'} name={'cil-link'}/>
                        <CCol xs="3">
                            {testResult.measurementName}
                        </CCol>
                        <CCol xs="2">
                            <div className='d-flex flex-row flex-wrap  justify-content-between'>
                                <div>
                                    {testResult.value}
                                </div>
                                <div>
                                    {testResult.unit}
                                </div>
                            </div>
                        </CCol>
                    </CRow>
                })
            }
        </div>
    );
};

export default MedicalTestResult;