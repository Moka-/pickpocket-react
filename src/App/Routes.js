import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './home/home'
import Shop from './shop/shop'
import About from './about/about'

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
