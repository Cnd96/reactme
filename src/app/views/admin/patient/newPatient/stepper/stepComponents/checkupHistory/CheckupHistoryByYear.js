import React, { useState } from 'react';
import HistoryYearSection from './HistoryYearSection';
import {CCol, CRow} from "@coreui/react";
import CheckupHistoryByCodeSection from './CheckupHistoryByCodeSection';

const CheckupHistoryByYear = () => {
    const [checkupDataByDate, setCheckupDataByDate] = useState(null)
    return (
        <>
            <CRow className='history-by-year'>
                <CCol sm="2" className='years-section p-2' style={{backgroundColor:'#f3f3f3', alignItems:'center'}}>
                    <HistoryYearSection setCheckupDataByDate={setCheckupDataByDate} />
                </CCol>
                <CCol sm="10" className='history-section'>
                    {
                    checkupDataByDate ?
                        <CheckupHistoryByCodeSection checkupDataByDate={checkupDataByDate} /> :
                        <h5 style={{display:'flex', width:'100%', height:'100%', alignItems:'center', justifyContent:'center'}}>Please select a date</h5>
                    }
                </CCol>
            </CRow>
        </>
    );
};

export default CheckupHistoryByYear;