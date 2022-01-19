import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import withReducer from "../../../../../../../../store/withReducer";
import reducer from "../store/reducer";
import TabTestTypeBody from "./TabTestTypeBody";
import TabHeader from "./TabHeader";
import {CNav, CTabContent, CTabs} from "@coreui/react";

const CheckupHistoryDetails = () => {

    const checkupHistory = useSelector(({checkupHistory}) => checkupHistory.checkupHistory);
    const [activeTabID, setActiveTabID] = useState();

    useEffect(() => {
        setActiveTabID(checkupHistory.testTypes[0] ? checkupHistory.testTypes[0] : 0);
    }, [checkupHistory.testTypes]);

    return (
        <CTabs activeTab={`${activeTabID}`}>
            <CNav variant="tabs">
                {
                    checkupHistory.testTypes.map((testType, index) => {
                        return <TabHeader testType={testType} index={index} key={index}/>
                    })
                }
            </CNav>
            <CTabContent>
                {
                    checkupHistory.testTypes.map((testType, index) => {
                        return <TabTestTypeBody testType={testType} index={index} key={index}/>
                    })
                }
            </CTabContent>
        </CTabs>
    );
};

export default withReducer('checkupHistory', reducer)(CheckupHistoryDetails);