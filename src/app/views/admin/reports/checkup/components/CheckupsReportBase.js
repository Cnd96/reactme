import React from 'react';
import withReducer from "../../../../../store/withReducer";
import reducer from "../components/store/reducers";
import CheckupReportGenerateBase from "./components/CheckupReportGenerateBase";

const CheckupsReportBase = () => {
    return (
        <div>
            <CheckupReportGenerateBase/>
        </div>
    );
};

export default withReducer('checkupReport', reducer)(CheckupsReportBase);