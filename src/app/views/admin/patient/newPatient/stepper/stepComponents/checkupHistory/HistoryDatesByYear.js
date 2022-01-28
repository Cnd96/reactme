import React from "react";
import { useSelector } from "react-redux";
import { selectCheckupDatesByYear } from "../../../../../../../selectors/checkupHistory.selector";

const HistoryDatesByYear = ({historyYear, setCheckupDataByDate}) => {
    const checkupHistorybyYear = useSelector(selectCheckupDatesByYear(historyYear));

    return(
        <li className="history-dates-by-year" style={{listStyle: 'none', cursor:'pointer'}}>
            {
                checkupHistorybyYear.map((dataByDate, index) => {
                    return (
                        <ul key={index} >
                            <a onClick={() => setCheckupDataByDate(dataByDate)}>
                                {dataByDate.checkupDate.slice(0,10)}
                            </a>
                        </ul>
                    );
                })
            }
        </li>
    );
}

export default HistoryDatesByYear;