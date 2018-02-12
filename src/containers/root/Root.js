import React from 'react'
import Routes from './Routes'
import Header from '../../components/header/header'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Reboot from 'material-ui/Reboot'
import './Root.css'
import theme from './Theme'
import DevTools from './DevTools'
import { Provider } from 'react-redux'
import PropTypes from 'prop-types'

const Root = ({ store }) => (
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
        <Header />
        <Routes />
        <DevTools />
        <Reboot />
    </MuiThemeProvider>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired,
}

export default Root