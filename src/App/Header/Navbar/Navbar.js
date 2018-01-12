
import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
// import MenuIcon from 'material-ui-icons/Menu';

export default class Navbar extends Component {
  
  render() {
    return (
      <div>
        <AppBar position="static">
        <Toolbar>
          <IconButton color="red" aria-label="Menu">
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography type="title" color="inherit" >
            Title
          </Typography>
          <Button color="contrast">Login</Button>
        </Toolbar>
      </AppBar>
      </div>
    )
  }
}
