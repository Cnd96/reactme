import dataService from "../../../services/dataService";
import loginAppEndpoints from "./login.api";
import jwtService from '../../../services/auth/jwtService';
import _ from "lodash";
import history from '../../../../@history';
import * as CryptoJS from 'crypto-js';
import {clearAppLocalStorage} from "../../../../utils/StorageUtils";
import Constants from "../../../../utils/Constants";

export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export const LOGIN_SET_USER = 'LOGIN_SET_USER';

export const USER_LOGGED_OUT = 'USER_LOGGED_OUT';

export const ADMIN_PASSWORD_RESET = 'ADMIN_PASSWORD_RESET';

export const ADMIN_EXPIRE_USER_CACHE = 'ADMIN_EXPIRE_USER_CACHE';

export function submitLogin({userName, password}) {

    const request = dataService.post(loginAppEndpoints.login, {
        username: userName,
        password: password,
    });

    return (dispatch, getState) => {
        request.then((response) => {
                let user = _.cloneDeep(response.data);
                delete user.token;
                delete user.refreshToken;

                jwtService.setSession(response.data.accessToken);
                jwtService.setRefreshToken(response.data.refreshToken);
                jwtService.setLoginUser(user);

                Constants.LOGGED_IN_USER = user.user;

                console.log(Constants.LOGGED_IN_USER);

                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: user
                });

                jwtService.onLoginSuccess();
            }
        ).catch(error => {
            Constants.LOGGED_IN_USER = null;

            return dispatch({
                type: LOGIN_ERROR,
                payload: error
            });
        });
    };
}

export function changeAdminPassword(data) {
    let oldPassword = CryptoJS.SHA1(data.oldPassword);
    oldPassword = CryptoJS.enc.Base64.stringify(oldPassword);

    const request = dataService.post(loginAppEndpoints.changeAdminUserPassword, {
        ...data,
        oldPassword: oldPassword
    });

    return (dispatch, getState) => {
        request.then((response) => {
                dispatch({
                    type: ADMIN_PASSWORD_RESET,
                    payload: 'SUCCESS'
                });
            }
        );
    };
}


export async function expireUserCache() {
    await dataService.post(loginAppEndpoints.expireUseCache);
}


export function setLoginUser(user) {
    return (dispatch, getState) => {
        dispatch({
            type: LOGIN_SET_USER,
            payload: user
        });
    };
}

export function userLogOut() {
    return (dispatch, getState) => {

        jwtService.logout();

        clearAppLocalStorage();

        // dispatch(setInitialSettings());

        dispatch({
            type: USER_LOGGED_OUT,
            payload: null
        });

        history.push({
            pathname: '/'
        });
    };
}
