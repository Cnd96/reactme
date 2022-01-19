import React from 'react';
import {CTabPane} from "@coreui/react";
import SelectProblem from "./SelectProblem";

const TabBody = ({familyType, index}) => {

    return (
        <CTabPane data-tab={`${familyType.familyTypeID}`}>
            <SelectProblem familyTypeID={familyType.familyTypeID} key={familyType.familyTypeID}/>
        </CTabPane>
    );
};

export default TabBody;