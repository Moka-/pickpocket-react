import React, { Component } from 'react'
import Routes from './routes'
import Header from './header/header'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Reboot from 'material-ui/Reboot'
import './Root.css'
import theme from './theme'

const Root = ({ store }) => (
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
        <Header />
        <Routes />
    </MuiThemeProvider>
    <Reboot />
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired,
}

export default Root
