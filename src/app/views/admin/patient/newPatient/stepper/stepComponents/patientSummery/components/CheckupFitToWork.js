import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {CCard, CCardBody, CCardHeader, CCollapse, CRow} from "@coreui/react";
import CIcon from "@coreui/icons-react";

const CheckupFitToWork = () => {
    const dispatch = useDispatch();
    const [collapse, setCollapse] = useState(true);
    const [fitToWorkCategory, setFitToWorkCategory] = useState();
    const patientSummeryData = useSelector(({patientSummery}) => patientSummery.patientSummeryReport);

    const toggle = (e) => {
        setCollapse(!collapse);
        e.preventDefault();
    };

    useEffect(() => {
        setFitToWorkCategory(patientSummeryData.fitToWork.category);
    }, [dispatch, patientSummeryData.fitToWork.category]);


    return (
        <div>
            <CCard>
                <CCardHeader onClick={toggle} className={'card-header-custom'}>
                    <div className="d-flex flex-row flex-wrap  justify-content-between">
                        <h5><b>Fit To Work</b></h5>
                        <span><CIcon size={'lg'}
                                     name={collapse ? 'cil-chevron-circle-up-alt' : 'cil-chevron-circle-down-alt'}/></span>

                    </div>
                </CCardHeader>

                <CCollapse
                    show={collapse}
                >
                    <CCardBody>
                        <CRow style={{marginLeft: '5%'}}>

                            {fitToWorkCategory && <p><CIcon size={'sm'} name={'cil-link'}/> {fitToWorkCategory}</p>}
                            {!fitToWorkCategory && <p>Fit To Work Category is not mentioned</p>}
                        </CRow>
                    </CCardBody>
                </CCollapse>
            </CCard>
        </div>
    );
};

export default CheckupFitToWork;