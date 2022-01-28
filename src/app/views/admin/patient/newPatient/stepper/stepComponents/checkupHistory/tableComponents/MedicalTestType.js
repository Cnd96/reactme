import React from 'react';
import {useSelector} from "react-redux";
import HistoryTableRow from "./HistoryTableRow";

const MedicalTestType = ({testType, index}) => {
    const checkupHistory = useSelector(({checkupHistory}) => checkupHistory.checkupHistory);
    return (
        <React.Fragment key={index}>
            <tr className='history-table-group-name'>
                <th colSpan="10">
                    {testType}
                </th>
            </tr>
            {
                Object.keys(checkupHistory.checkupHistoryFullData[testType]).map((measurementName, i) => {
                    return <HistoryTableRow
                        measurementName={measurementName}
                        key={'HistoryTableRow' + i}
                        index={i}
                        testType={testType}/>
                })
            }
        </React.Fragment>
    )
};

export default MedicalTestType;