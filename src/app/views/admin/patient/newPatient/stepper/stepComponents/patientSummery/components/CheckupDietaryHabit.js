import React, {useState} from 'react';
import {CCard, CCardBody, CCardHeader, CCol, CCollapse, CRow} from "@coreui/react";
import {useSelector} from "react-redux";
import CIcon from "@coreui/icons-react";

const CheckupDietaryHabit = () => {
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
                        <h5><b>Dietary Habits</b></h5>
                        <span><CIcon size={'lg'}
                                     name={collapse ? 'cil-chevron-circle-up-alt' : 'cil-chevron-circle-down-alt'}/></span>

                    </div>
                </CCardHeader>

                <CCollapse
                    show={collapse}
                >
                    <CCardBody>
                        {
                            patientSummeryData.checkupDietaryHabits
                            && patientSummeryData.checkupDietaryHabits.length == 0
                            && <div style={{marginTop: '20px', marginLeft: '5%'}}>
                                <p>No Dietary Habits Mentioned </p>
                            </div>
                        }
                        {
                            patientSummeryData.checkupDietaryHabits &&
                            patientSummeryData.checkupDietaryHabits.map((dietaryHabit, index) => {
                                return <div style={{marginTop: '20px'}} key={index}>
                                    <h5><CIcon size={'lg'} name={'cil-fastfood'}
                                               style={{marginRight: '1%'}}/> {dietaryHabit.dietaryCategory}</h5>
                                    <CRow style={{marginLeft: '5%'}}>

                                        <CCol xs="3" key={index}>
                                            <CIcon size={'sm'} name={'cil-link'}/> {dietaryHabit.dietaryHabit}</CCol>
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

export default CheckupDietaryHabit;