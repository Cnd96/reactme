import React from 'react'
import {TheContent, TheHeader, TheSidebar} from './index'
import {useSelector} from "react-redux";
import TheFooter from "./TheFooter";

const TheLayout = () => {

    const settings = useSelector(({notebook}) => notebook.settings.current);

    let showAdminSideMenu = false;
    let showAdminTopMenu = false;

    if (settings && settings.settings && settings.settings.layout) {
        showAdminSideMenu = settings.settings.layout.adminSideMenu.display;
        showAdminTopMenu = settings.settings.layout.adminTopMenu.display;
    }

    return (
        <div className="c-app c-default-layout">
            {
                showAdminSideMenu &&
                <TheSidebar/>
            }

            <div className="c-wrapper">
                {
                    showAdminTopMenu &&
                    <TheHeader/>
                }

                <div className="c-body">
                    <TheContent/>
                </div>
                <TheFooter/>
            </div>
        </div>
    )
};

export default TheLayout
