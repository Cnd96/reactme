import React from 'react';
import withReducer from "../../../../../../../../store/withReducer";
import reducer from "../store/reducer";
import {useSelector} from "react-redux";
import MedicalTestType from "./MedicalTestType";

const CheckupHistoryTableBase = () => {

    const checkupHistory = useSelector(({checkupHistory}) => checkupHistory.checkupHistory);

    return (
        <div>
            <table className="checkup-history-table w-100-p">
                <tbody>
                {
                    checkupHistory.testAllTypes.map((testType, index) => {
                        return <MedicalTestType
                            testType={testType}
                            index={index}
                            key={index}
                        />
                    })
                }
                </tbody>
            </table>

        </div>
    );
};

export default withReducer('checkupHistory', reducer)(CheckupHistoryTableBase);