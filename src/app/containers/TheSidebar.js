import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {
    CCreateElement,
    CSidebar,
    CSidebarBrand,
    CSidebarMinimizer,
    CSidebarNav,
    CSidebarNavDivider,
    CSidebarNavDropdown,
    CSidebarNavItem,
    CSidebarNavTitle,
} from '@coreui/react'
// sidebar nav config
import navigation from '../config/_nav'
import * as Actions from "../store/actions/notebook";
import Constants from "../../utils/Constants";
import {hasAnyUserPrivilege} from "../../utils/PrivilegeUtils";

const TheSidebar = () => {
    const dispatch = useDispatch();
    const show = useSelector(state => state.notebook.settings.sidebarShow);
    const minimize = useSelector(state => state.notebook.settings.minimize);
    const getFilteredNavigation = () => {
        let filtered = [];

        navigation.forEach((n) => {
            let hasAnyPrivilege = hasAnyUserPrivilege(n.privileges);
            if (hasAnyPrivilege) {
                filtered.push(n);
            }
        });
        return filtered;
    };

    return (
        <CSidebar
            minimize={minimize}
            show={show}
            onShowChange={(val) => {
                console.log("Tha Value", val);
                dispatch(Actions.setShowSidebar(val));
            }}
        >
            <CSidebarBrand className="d-md-down-none" to={Constants.PAGES.adminDashboard}>

                {/*<CImg*/}
                {/*    className="c-sidebar-brand-full"*/}
                {/*    src={defaultLogo}*/}
                {/*    style={{'margin': '5px', height: '45px', width: 'auto'}}*/}
                {/*/>*/}

                {/*<CImg*/}
                {/*    className="c-sidebar-brand-minimized"*/}
                {/*    src={defaultLogoSmall}*/}

                {/*/>*/}
            </CSidebarBrand>
            <CSidebarNav>

                <CCreateElement
                    items={getFilteredNavigation()}
                    components={{
                        CSidebarNavDivider,
                        CSidebarNavDropdown,
                        CSidebarNavItem,
                        CSidebarNavTitle
                    }}
                />
            </CSidebarNav>
            <CSidebarMinimizer className="c-d-md-down-none"/>
        </CSidebar>
    )
};

export default React.memo(TheSidebar)
