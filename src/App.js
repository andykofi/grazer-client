import React from 'react';
import './App.css';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages';
import Dashboard from "./components/Dashboard";
import { Provider} from "react-redux";
import store from "./store";
import Registration from "./pages/register/Registration";
import Login from "./pages/login/Login";
import EntryFee from "./components/Dashboard/DashItems/EntryFee";
import MonthlyFee from "./components/Dashboard/DashItems/MonthlyFee";
import Constitution from "./components/Dashboard/DashItems/Constitution";
import Contributions from "./components/Dashboard/DashItems/contributions";
import Awards from "./components/Dashboard/DashItems/Awards";
import jwt_decode from "jwt-decode";
import setJWTToken from "./pages/securityUtils/setJWTToken";
import {SET_CURRENT_USER} from "./actions/types";
import {logout} from "./actions/securityActions";
import SecuredRoute from "./pages/securityUtils/SecuredRoute";
import Leaders from "./pages/common/Leaders";
import Members from "./pages/common/Members";


const jwtToken = localStorage.jwtToken

if (jwtToken) {
    setJWTToken(jwtToken);
    const decoded_jwtToken = jwt_decode(jwtToken);
    store.dispatch({
        type: SET_CURRENT_USER,
        payload: decoded_jwtToken
    });

    const currentTime = Date.now() / 1000;
    if (decoded_jwtToken.exp < currentTime) {
        store.dispatch(logout());
        window.location.href = "/";
    }
}



function App() {
    return (
        <Provider store={store}>
            <Router>

                <Route path='/' component={Home} exact/>
                <Route path='/register' component={Registration} exact/>
                <Route path='/login' component={Login} exact/>
                <Route path='/leaders' component={Leaders} exact/>
                <Route path='/members' component={Members} exact/>

                <Switch>
                    <SecuredRoute path='/dashboard' component={Dashboard} exact/>
                    <SecuredRoute path='/entryFee' component={EntryFee} exact/>
                    <SecuredRoute path='/monthlyFee' component={MonthlyFee} exact/>
                    <SecuredRoute path='/constitution' component={Constitution} exact/>
                    <SecuredRoute path='/contributions' component={Contributions} exact/>
                    <SecuredRoute path='/awards' component={Awards} exact/>
                </Switch>
            </Router>
        </Provider>
    );
}

export default App;
