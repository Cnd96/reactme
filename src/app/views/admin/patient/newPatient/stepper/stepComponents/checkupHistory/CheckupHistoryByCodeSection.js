import React from "react";
import { useSelector } from "react-redux";
import {
    selectCheckupHistoryBycode,
    selectTestAllTypes,
} from "../../../../../../../selectors/checkupHistory.selector";

const CheckupHistoryByCodeSection = ({checkupDataByDate}) => {
    const checkupHistorybyCode = useSelector(selectCheckupHistoryBycode(checkupDataByDate.checkupCode));
    const checkupHistoryTypes = useSelector(selectTestAllTypes);
    
    return (
        <>
            <span className="color-green">{checkupDataByDate.checkupDate.slice(0,10)}</span>
            <div className={'privilege-main-category-section'}>
                <div className={'privilege-category-name'}>
                    <h5>{checkupDataByDate.checkupCode}</h5>
                </div>
                <div className={'privilege-category-section'}>
                <table className="checkup-history-table-by-year w-100-p">
                    <tbody>
                    {
                        checkupHistoryTypes.map((type, index) => {
                            return (
                                <React.Fragment key={index}>
                                    <tr className='history-table-group-name'>
                                        <th>{type}</th>                                
                                    </tr>
                                    {
                                        checkupHistorybyCode.map((checkupData, index) => {
                                            if (checkupData.testType === type) {
                                                return (
                                                    <tr key={index}>
                                                        <td style={{paddingLeft: '2rem'}}>{checkupData.measurementName}</td>
                                                        <td>
                                                            <span style={{fontWeight: 'bold'}}>{checkupData.value}</span>
                                                            <span style={{paddingLeft: '0.5rem'}}>{checkupData.measurementUnit}</span>
                                                        </td>
                                                    </tr>
                                                );
                                            }
                                        })
                                    }
                                </React.Fragment>
                            );
                        })
                    }
                    </tbody>
                </table>
                </div>
            </div>
        </>
    );
};

export default CheckupHistoryByCodeSection;