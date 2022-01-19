import React, {useState} from 'react';
import {useSelector} from "react-redux";
import {CCard, CCardBody, CCardHeader, CCollapse, CRow} from "@coreui/react";
import CIcon from "@coreui/icons-react";

const CheckupFitnessNote = () => {

    const [collapse, setCollapse] = useState(true);
    const patientSummeryData = useSelector(({patientSummery}) => patientSummery.patientSummeryReport);

    const toggle = (e) => {
        setCollapse(!collapse);
        e.preventDefault();
    };

    return (
        <div>
            <CCard>
                <CCardHeader onClick={toggle} className={'card-header-custom'}>
                    <div className="d-flex flex-row flex-wrap  justify-content-between">
                        <h5><b>Fitness Note</b></h5>
                        <span><CIcon size={'lg'}
                                     name={collapse ? 'cil-chevron-circle-up-alt' : 'cil-chevron-circle-down-alt'}/></span>

                    </div>
                </CCardHeader>

                <CCollapse
                    show={collapse}
                >
                    <CCardBody>
                        <CRow style={{marginLeft: '5%'}}>
                            {patientSummeryData.checkupFitnessNote.fitnessNote &&
                            <p> {patientSummeryData.checkupFitnessNote.fitnessNote} </p>}
                            {!patientSummeryData.checkupFitnessNote.fitnessNote && <p> No Fitness Note Note Added</p>}
                        </CRow>
                    </CCardBody>
                </CCollapse>
            </CCard>
        </div>
    );
};

export default CheckupFitnessNote;