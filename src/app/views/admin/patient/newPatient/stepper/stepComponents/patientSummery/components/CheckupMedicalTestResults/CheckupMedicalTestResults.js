import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {CCard, CCardBody, CCardHeader, CCollapse} from "@coreui/react";
import * as _ from "lodash";
import MedicalTestResult from "./MedicalTestResult";
import CIcon from "@coreui/icons-react";

const CheckupMedicalTestResults = () => {
    let dispatch = useDispatch();
    const [collapse, setCollapse] = useState(true);
    const patientSummeryData = useSelector(({patientSummery}) => patientSummery.patientSummeryReport);
    const [medicalTestTypes, setMedicalTestTypes] = useState([]);

    const toggle = (e) => {
        setCollapse(!collapse);
        e.preventDefault();
    };

    useEffect(() => {
        let medicalTestTypes = _.keys(patientSummeryData.checkupMedicalTestResults);
        setMedicalTestTypes(medicalTestTypes);
    }, [dispatch, patientSummeryData.checkupMedicalTestResults]);

    return (
        <div>
            <CCard>
                <CCardHeader onClick={toggle} className={'card-header-custom'} >
                    <div className="d-flex flex-row flex-wrap  justify-content-between">
                        <h5><b>Medical Test</b></h5>
                        <span><CIcon size={'lg'} name={ collapse ? 'cil-chevron-circle-up-alt':'cil-chevron-circle-down-alt'}/></span>
                    </div>
                </CCardHeader>

                <CCollapse
                    show={collapse}
                >
                    <CCardBody>
                        <div>
                            {
                                medicalTestTypes.map((medicalTestType, index) => {
                                    return <MedicalTestResult key={index} medicalTestType={medicalTestType}/>
                                })
                            }
                        </div>
                    </CCardBody>
                </CCollapse>
            </CCard>
        </div>
    );
};

export default CheckupMedicalTestResults;