import React, {useState} from 'react';
import {CCard, CCardBody, CCardHeader, CCollapse, CRow} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import {useSelector} from "react-redux";

const CheckupDietNote = () => {

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
                        <h5><b>Diet Note</b></h5>
                        <span><CIcon size={'lg'}
                                     name={collapse ? 'cil-chevron-circle-up-alt' : 'cil-chevron-circle-down-alt'}/></span>

                    </div>
                </CCardHeader>

                <CCollapse
                    show={collapse}
                >
                    <CCardBody>
                        <CRow style={{marginLeft: '5%'}}>
                            {patientSummeryData.checkupDietNote.dietNote &&
                            <p> {patientSummeryData.checkupDietNote.dietNote} </p>}
                            {!patientSummeryData.checkupDietNote.dietNote && <p> No Diet Note Added</p>}

                        </CRow>
                    </CCardBody>
                </CCollapse>
            </CCard>
        </div>
    );
};

export default CheckupDietNote;