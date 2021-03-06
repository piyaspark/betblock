import { Router, Switch, Route } from "react-router-dom";
import React, { Component } from 'react'
import App from "./App";
import Bet from "./component/bet"
import history from "./history";

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={App} />
                    <Route path='/home' exact component={Bet}/>
                </Switch>
            </Router>
        )
    }
}
