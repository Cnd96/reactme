import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllHistoryYears } from '../../../../../../../selectors/checkupHistory.selector';
import HistoryDatesByYear from './HistoryDatesByYear';

const HistoryYearSection = ({setCheckupDataByDate}) => {
    const allCheckupHistoryYears = useSelector(selectAllHistoryYears);
    
    return(
        <>
            <li className='history-year-list' style={{listStyle: 'none'}}>
                {
                    allCheckupHistoryYears.map((year, index) => {
                        return(
                            <ul key={index} style={{fontWeight: 'bold'}} >
                                <a style={{textDecoration:'underline'}} onClick={() => setSelectedYear(year)}>
                                    {year}
                                </a>
                                <HistoryDatesByYear historyYear={year} setCheckupDataByDate={setCheckupDataByDate} />
                            </ul>
                        );
                    })
                }
            </li>
        </>
    );
}

export default HistoryYearSection;