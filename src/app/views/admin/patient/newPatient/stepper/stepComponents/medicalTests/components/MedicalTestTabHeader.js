import React from 'react';
import {CNavItem, CNavLink} from "@coreui/react";

const MedicalTestTabHeader = ({medicalTestType}) => {
    return (
        <CNavItem>
            <CNavLink data-tab={medicalTestType.medicalTestTypeID}>
                {medicalTestType.testType}
            </CNavLink>
        </CNavItem>
    );
};

export default MedicalTestTabHeader;