import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home/Home'
import Shop from './Shop/Shop'
import About from './About/About'

export default class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/shop' component={Shop} />
                <Route path='/about' component={About} />
            </Switch>
        )
    }
}
