import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {CCard, CCardBody, CCardHeader, CCollapse} from "@coreui/react";
import * as _ from "lodash";
import FamilyDiseases from "./FamilyDiseases";
import CIcon from "@coreui/icons-react";

const PatientFamilyDiseases = () => {
    let dispatch = useDispatch();
    const [collapse, setCollapse] = useState(true);
    const patientSummeryData = useSelector(({patientSummery}) => patientSummery.patientSummeryReport);
    const [familyTypes, setFamilyTypes] = useState([]);

    const toggle = (e) => {
        setCollapse(!collapse);
        e.preventDefault();
    };

    useEffect(() => {
        let familyTypes = _.keys(patientSummeryData.patientFamilyDiseases);
        setFamilyTypes(familyTypes);
    }, [dispatch, patientSummeryData.patientFamilyDiseases]);

    return (
        <div>
            <CCard>
                <CCardHeader onClick={toggle} className={'card-header-custom'}>
                    <div className="d-flex flex-row flex-wrap  justify-content-between">
                        <h5><b>Family Diseases</b></h5>
                        <span><CIcon size={'lg'} name={ collapse ? 'cil-chevron-circle-up-alt':'cil-chevron-circle-down-alt'}/></span>
                    </div>
                </CCardHeader>

                <CCollapse
                    show={collapse}
                >
                    <CCardBody>
                        <div>
                            {
                                familyTypes.map((familyType, index) => {
                                    return <FamilyDiseases familyType={familyType} key={index}/>
                                })
                            }
                        </div>
                    </CCardBody>
                </CCollapse>
            </CCard>
        </div>
    );
};

export default PatientFamilyDiseases;