import '../styles/App.scss';
import React, {Component} from 'react';
import AppContext from './AppContext';
import {Route, Router, Switch} from 'react-router-dom';
import history from '../@history';
import {Provider} from "react-redux";
import store from './store';
import routes from './config/routes';
import Auth from "./auth/Auth";
import Master from "./master/Master";
import NotebookAuthorization from "./master/NotebookAuthorization";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingComponent from "./views/common/LoadingComponent";
import LayoutManager from "./containers/LayoutManager";

const TheLayout = React.lazy(() => import('./containers/TheLayout'));

const Login = React.lazy(() => import('./views/pages/login/Login'));
const Register = React.lazy(() => import('./views/pages/register/Register'));
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'));
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'));

toast.configure({
    autoClose: 5000,
    draggable: false,
    hideProgressBar: true,
    pauseOnHover: true,
    position: "top-right",
});


class App extends Component {


    render() {
        return (
            <AppContext.Provider
                value={{
                    routes
                }}
            >
                <Provider store={store}>
                    <Auth>
                        <Master>
                            <Router history={history}>
                                <NotebookAuthorization>
                                    <React.Suspense fallback={LoadingComponent}>
                                        <Switch>
                                            <Route exact path="/login" name="Login Page"
                                                   render={props => <Login {...props}/>}/>
                                            <Route exact path="/register" name="Register Page"
                                                   render={props => <Register {...props}/>}/>
                                            <Route exact path="/404" name="Page 404"
                                                   render={props => <Page404 {...props}/>}/>
                                            <Route exact path="/500" name="Page 500"
                                                   render={props => <Page500 {...props}/>}/>
                                            <Route path="/" name="Home" render={props => <LayoutManager {...props}/>}/>
                                        </Switch>
                                    </React.Suspense>
                                </NotebookAuthorization>
                            </Router>
                        </Master>
                    </Auth>
                </Provider>
            </AppContext.Provider>
        );
    }
}

export default App;
