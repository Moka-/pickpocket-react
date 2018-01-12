import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import IconButton from 'material-ui/IconButton'

export default class Header extends Component {
    render() {
        return (
            <header>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton color="contrast" aria-label="Menu">
                        </IconButton>
                        <Typography type="title" color="inherit">
                            Pick Pocket
                        </Typography>
                        <Link to='/'><Button color="contrast">Home</Button></Link>
                        <Link to='/shop'><Button color="contrast">Shop</Button></Link>
                        <Link to='/about'><Button color="contrast">About</Button></Link>
                    </Toolbar>
                </AppBar>
            </header>
        )
    }
}
