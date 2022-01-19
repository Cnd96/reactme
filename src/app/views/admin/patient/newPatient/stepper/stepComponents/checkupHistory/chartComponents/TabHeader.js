import React from 'react';
import {CNavItem, CNavLink} from "@coreui/react";

const TabHeader = ({testType, index}) => {
    return (
        <CNavItem>
            <CNavLink data-tab={testType}>
                <p>{testType}</p>
            </CNavLink>
        </CNavItem>
    );
};

export default TabHeader;