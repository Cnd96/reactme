import React from 'react';
import {useSelector} from "react-redux";

const HistoryTableRow = ({measurementName, testType, index}) => {

    const checkupHistory = useSelector(({checkupHistory}) => checkupHistory.checkupHistory);

    return (
        <React.Fragment key={"TableRow" + index}>
            <tr>
                <td style={{paddingLeft: '30px'}}>
                    {measurementName}
                </td>
                {
                    // getting only the last 4 checkups
                    checkupHistory.checkupHistoryFullData[testType][measurementName].slice(0,4).map((data, i) => {
                        return (
                            <React.Fragment key={i}>
                                <td style={{fontWeight: 'bold', textAlign: 'end'}}>
                                    {data.value}
                                </td>
                                <td style={{fontWeight: 'bold', textAlign: 'start', paddingLeft: '3px'}}>
                                    {data.measurementUnit}
                                </td>
                            </React.Fragment>
                        )
                    })
                }
            </tr>
        </React.Fragment>
    );
};

export default HistoryTableRow;