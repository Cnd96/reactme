import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {CCol, CRow} from "@coreui/react";
import CIcon from "@coreui/icons-react";

const FamilyDiseases = ({familyType}) => {

    const patientSummeryData = useSelector(({patientSummery}) => patientSummery.patientSummeryReport);
    const [diseases, setDiseases] = useState([]);

    useEffect(() => {
        setDiseases(patientSummeryData.patientFamilyDiseases[familyType]);
    }, []);

    useEffect(() => {
        setDiseases(patientSummeryData.patientFamilyDiseases[familyType]);
    }, [patientSummeryData.patientFamilyDiseases[familyType]]);

    return (
        <div style={{marginTop: '20px'}}>
            <h5><CIcon size={'lg'} name={'cil-group'} style={{marginRight: '1%'}}/> {familyType}</h5>
            <CRow style={{marginLeft: '5%'}}>
                {
                    diseases && diseases.map((disease, index) => {
                        return <CCol xs="3" key={index}>
                            <CIcon size={'sm'} name={'cil-link'}/> {disease}</CCol>
                    })
                }
            </CRow>
        </div>
    );
};

export default FamilyDiseases;