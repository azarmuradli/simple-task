import React, { Component } from 'react'
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"
import User from "../containers/User"
import Posts from "../containers/Posts"

export default class App extends Component {
    render() {
        return (
           <React.Fragment>
             <Router>
            <Switch>
                 <Route exact path="/" component={User}/>
                 <Route exact path="/user:id/posts" component={ Posts}/>
            </Switch>
            </Router>
           </React.Fragment>
        )
    }
}
