import React, {useState} from 'react';
import {CCard, CCardBody, CCardHeader, CCol, CCollapse, CRow} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import Chart from "./Chart";
import ResultList from "./ResultList";

const Measurement = ({measurementName, dataSource}) => {

    const [collapse, setCollapse] = useState(true);

    const toggle = (e) => {
        setCollapse(!collapse);
        e.preventDefault();
    };

    return (
        <div>
            <CCard>
                <CCardHeader onClick={toggle} className={'card-header-custom'}>
                    <div className="d-flex flex-row flex-wrap  justify-content-between">
                        <h5><b>{measurementName}</b></h5>
                        <span><CIcon size={'lg'}
                                     name={collapse ? 'cil-chevron-circle-up-alt' : 'cil-chevron-circle-down-alt'}/></span>
                    </div>
                </CCardHeader>

                <CCollapse
                    show={collapse}
                >
                    <CCardBody>
                        <CRow>
                            <CCol sm="4">
                                <ResultList dataSource={dataSource}/>
                            </CCol>
                            <CCol sm="8">
                                <Chart
                                    xName={'xValue'}
                                    yName={'yValue'}
                                    title={measurementName}
                                    xTitle={'Checkups'}
                                    yTitle={'unit'}
                                    dataSource={dataSource}
                                />
                            </CCol>
                        </CRow>
                    </CCardBody>
                </CCollapse>
            </CCard>
        </div>
    );
};

export default Measurement;