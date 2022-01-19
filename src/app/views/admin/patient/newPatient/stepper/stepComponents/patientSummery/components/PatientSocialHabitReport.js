import React, {useState} from 'react';
import {CCard, CCardBody, CCardHeader, CCol, CCollapse, CRow} from "@coreui/react";
import {useSelector} from "react-redux";
import CIcon from "@coreui/icons-react";

const PatientSocialHabitReport = () => {
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
                        <h5><b>Social Habits</b></h5>
                        <span><CIcon size={'lg'}
                                     name={collapse ? 'cil-chevron-circle-up-alt' : 'cil-chevron-circle-down-alt'}/></span>

                    </div>
                </CCardHeader>

                <CCollapse
                    show={collapse}
                >
                    <CCardBody>
                        {
                            patientSummeryData.patientSocialHabits.map((socialHabit, index) => {
                                return <div style={{marginTop: '20px'}} key={index}>
                                    <h5><CIcon size={'lg'} name={'cil-recycle'} style={{marginRight:'1%'}}/> {socialHabit.categoryName}</h5>
                                    <CRow style={{marginLeft: '5%'}}>

                                        <CCol xs="3" key={index}>
                                            <CIcon size={'sm'} name={'cil-link'}/> {socialHabit.socialHabitName}</CCol>
                                    </CRow>
                                </div>
                            })
                        }
                    </CCardBody>
                </CCollapse>
            </CCard>
        </div>
    );
};

export default PatientSocialHabitReport;