import React, { useEffect, useState } from 'react'
import Switch from 'react-bootstrap/esm/Switch'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Registration from "../Registration/registration";
import Login from "../Login/login";
import PrivateRouter from './PrivateRouter/privateRouter';
import DashBoard from '../../Screens/dashBoard';
import { Redirect } from 'react-router'
function RouterPage() {
    const isLoggin = localStorage.getItem("loginToken")

    return (
        <>
            <Router>
                <Switch>
                    {
                        isLoggin ? <Redirect to="/dash" /> : null
                    }
                    <Route exact path="/" component={Login} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/registration" component={Registration} />

                    <PrivateRouter exact path="/dash" component={DashBoard} />
                </Switch>
            </Router>
        </>
    )
}
export default RouterPage
