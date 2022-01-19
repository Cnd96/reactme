import React, {useEffect} from 'react';
import withReducer from "../../../../../store/withReducer";
import reducer from "../store/reducers/index";
import {useDispatch, useSelector} from "react-redux";
import * as Actions from '../store/actions';
import {getStorageItem, removeStorageItem} from "../../../../../../utils/StorageUtils";
import Constants from "../../../../../../utils/Constants";
import * as _ from 'lodash';
import {trimData} from "../../../../../../utils/DataExtractHelper";
import RoleAddEditBase from "./components/RoleAddEditBase";

function RoleAddEditApp() {

    const dispatch = useDispatch();
    const data = useSelector(({roles}) => roles.roleAddEdit);

    useEffect(() => {
        dispatch(Actions.getAllPrivileges());

        let roleID = getStorageItem(Constants.STORAGE.SELECTED_ROLE_ID);
        if (roleID) {
            dispatch(Actions.getRole(roleID));
        }

        return () => {
            dispatch(Actions.reset());
            removeStorageItem(Constants.STORAGE.SELECTED_ROLE_ID);
        };
    }, [dispatch]);

    let isValid = () => {
        return data.formData && data.formData.isValid;
    };

    let isNew = !data.role.roleID;

    let save = () => {
        if (!isValid()) {
            //TODO message
        }
        let role = Object.assign({}, data.role, data.formData.values);
        let selectedPrivileges = data.selectedPrivileges;

        if (isNew) {
            role.privileges = selectedPrivileges;
        } else {
            let added = _.difference(selectedPrivileges, data.role.privileges);
            let removed = _.difference(data.role.privileges, selectedPrivileges);

            role.addedPrivileges = added;
            role.deletedPrivileges = removed;
        }

        dispatch(Actions.saveUpdateRole(trimData(role)));
    };

    return (
        <>
            <RoleAddEditBase
                allPrivileges={data.allPrivileges}
                role={data.role}
                isValid={isValid()}
                onSaveUpdate={save}
            />
        </>
    );
}

export default withReducer('roles', reducer)(RoleAddEditApp);
