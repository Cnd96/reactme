import axios from 'axios';
import jwtDecode from 'jwt-decode';
import HealthTrackerUtils from "../../../utils/HealthTrackerUtils";
import Constants from "../../../utils/Constants";
import {getStorageItem, removeStorageItem, setStorageItem} from "../../../utils/StorageUtils";

class jwtService extends HealthTrackerUtils.EventEmitter {

    accessToken;

    init() {
        this.setInterceptors();
        this.handleAuthentication();
    }

    setInterceptors = () => {
        axios.interceptors.response.use(response => {
            return response;
        }, err => {
            return new Promise((resolve, reject) => {
                if (err.response.status === 401 && err.config && !err.config.__isRetryRequest) {
                    // if you ever get an unauthorized response, logout the user
                    this.emit('onAutoLogout', 'Invalid access_token');
                    this.setSession(null);
                }
                throw err;
            });
        });
    };

    handleAuthentication = () => {

        let accessToken = this.getAccessToken();

        if (!accessToken) {
            return;
        }

        if (this.isAuthTokenValid(accessToken)) {
            this.setSession(accessToken);
            this.emit('onAutoLogin', true);
        } else {
            this.setSession(null);
            this.emit('onAutoLogout', 'accessToken expired');
        }
    };

    onLoginSuccess = () => {
        this.emit('onLoginSuccess', true);
    };

    setSession = accessToken => {
        if (accessToken) {
            this.accessToken = accessToken;
            setStorageItem(Constants.STORAGE.ACCESS_TOKEN, accessToken);
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + accessToken;
        } else {
            this.accessToken = null;
            removeStorageItem(Constants.STORAGE.ACCESS_TOKEN);
            delete axios.defaults.headers.common['Authorization'];
        }
    };

    logout = () => {
        this.setSession(null);
        removeStorageItem(Constants.STORAGE.REFRESH_TOKEN);
        removeStorageItem(Constants.STORAGE.LOGGED_USER_ENC);
    };

    isAuthTokenValid = accessToken => {
        if (!accessToken) {
            return false;
        }
        const decoded = jwtDecode(accessToken);
        const currentTime = Date.now() / 1000;
        if (decoded.exp < currentTime) {
            console.warn('access token expired');
            return false;
        } else {
            return true;
        }
    };

    getAccessToken = () => {
        if (this.accessToken) {
            return this.accessToken;
        }

        return getStorageItem(Constants.STORAGE.ACCESS_TOKEN);
    };

    setRefreshToken = (token) => {
        setStorageItem(Constants.STORAGE.REFRESH_TOKEN, token);
    };

    setLoginUser = (user) => {
        setStorageItem(Constants.STORAGE.LOGGED_USER_ENC, JSON.stringify(user));
    };

    getLoginUser = () => {
        return getStorageItem(Constants.STORAGE.LOGGED_USER_ENC, true);
    };

    isUserLoggedIn = () => {
        let token = this.getAccessToken();
        return this.isAuthTokenValid(token);
    };
}

const instance = new jwtService();

export default instance;
