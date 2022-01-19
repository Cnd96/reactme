import React from 'react';
import {CNavItem, CNavLink} from "@coreui/react";

const TabHeader = ({familyType, index}) => {
    return (
        <CNavItem>
            <CNavLink data-tab={familyType.familyTypeID}>
                {familyType.familyTypeName}
            </CNavLink>
        </CNavItem>
    );
};

export default TabHeader;