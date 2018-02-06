import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'

export default class Header extends Component {
    render() {
        return (
            <header>
                <AppBar position="static">
                    <Toolbar>
                        <Typography type="title" color="inherit">
                            Pick Pocket
                        </Typography>
                        <Button component={Link} to="/" color="contrast">Home</Button>
                        <Button component={Link} to="/shop" color="contrast">Shop</Button>
                        <Button component={Link} to="/about" color="contrast">About</Button>
                    </Toolbar>
                </AppBar>
            </header>
        )
    }
}
