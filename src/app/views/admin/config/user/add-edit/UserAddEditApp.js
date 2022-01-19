import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {getStorageItem, removeStorageItem} from "../../../../../../utils/StorageUtils";
import Constants from "../../../../../../utils/Constants";
import * as Action from "../store/actions/index"
import {trimData} from "../../../../../../utils/DataExtractHelper";
import withReducer from "../../../../../store/withReducer";
import reducer from "../store/reducers";
import * as _ from "lodash";
import UserAddEditBase from "./components/UserAddEditBase";


function UserAddEditApp() {

    const dispatch = useDispatch();
    const data = useSelector(({users}) => users.userAddEdit);

    useEffect(() => {
        dispatch(Action.getAllRoles());
        const userID = getStorageItem(Constants.STORAGE.SELECTED_USER_ID);

        if (userID) {
            dispatch(Action.getUserDTO(userID))
        }

        return () => {
            dispatch(Action.reSet());
            removeStorageItem(Constants.STORAGE.SELECTED_USER_ID)
        }
    }, [dispatch]);

    let isNew = !(data.user && data.user.userID);

    let roleChangeUpdate = (data) => {
        console.log(data);
        dispatch(Action.onRoleActionChange(data));
    };

    let isValid = () => {
        return data.formData && data.formData.isValid
    };

    let save = () => {
        let user = Object.assign({}, data.user, data.formData.values);
        let selectedRolesList = data.selectedRolesList;

        user.userType = Constants.USER_TYPE_CONST.ADMIN;

        if (isNew) {
            user.password = data.formData.values.password;
            user.roles = selectedRolesList;

            dispatch(Action.addAdminUser(trimData(user)));
        } else {
            let added = _.difference(selectedRolesList, data.user.roles);
            let removed = _.difference(data.user.roles, selectedRolesList);
            user.addedRoles = added;
            user.removedRoles = removed;

            dispatch(Action.updateAdminUser(trimData(user)));
        }
    };

    let onPasswordReset = (userID) => {
        dispatch(Action.resetUserPassword(userID));
    };

    return (
        <>
            <UserAddEditBase
                isNew={isNew}
                user={data.user}

                roles={data.roles}
                checkedRoleIDs={data.selectedRolesList}
                onRoleChange={roleChangeUpdate}
                onPasswordReset={onPasswordReset}

                isValid={isValid()}
                onSaveUpdate={save}
            />
        </>
    )
}

export default withReducer('users', reducer)(UserAddEditApp)
