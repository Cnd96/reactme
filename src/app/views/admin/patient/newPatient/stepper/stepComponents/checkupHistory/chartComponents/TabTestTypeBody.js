import React from 'react';
import {CCol, CRow, CTabPane} from "@coreui/react";
import {useSelector} from "react-redux";
import Chart from "./Chart";

const TabTestTypeBody = ({testType, index}) => {
    const checkupHistory = useSelector(({checkupHistory}) => checkupHistory.checkupHistory);
    return (
        <CTabPane data-tab={`${testType}`}>
            {/*{*/}
            {/*    Object.keys(checkupHistory.checkupHistoryData[testType]).map((measurementName, index) => {*/}
            {/*        return <Measurement measurementName={measurementName}*/}
            {/*                            dataSource={checkupHistory.checkupHistoryData[testType][measurementName]}/>*/}
            {/*    })*/}
            {/*}*/}
            <CRow>
                {
                    Object.keys(checkupHistory.checkupHistoryData[testType]).map((measurementName, index) => {
                        return (

                            <CCol sm="12" className='chart-content' key={index}>
                                <Chart
                                    xName={'xValue'}
                                    yName={'yValue'}
                                    title={measurementName}
                                    xTitle={'Checkup Dates'}
                                    yTitle={'unit'}
                                    dataSource={checkupHistory.checkupHistoryData[testType][measurementName]}/>

                            </CCol>
                        )
                    })
                }
            </CRow>
        </CTabPane>
    );
};

export default TabTestTypeBody;