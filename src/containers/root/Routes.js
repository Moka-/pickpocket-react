import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../../containers/home/Home'
import Shop from '../../containers/shop/Shop'
import About from '../../containers/about/About'

const Routes = () => (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/shop' component={Shop} />
        <Route path='/about' component={About} />
    </Switch>
)

export default Routes