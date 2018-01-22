import React, { Component } from 'react'
import Routes from './Routes'
import Header from './Header/Header'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import { grey, blue, red, purple } from 'material-ui/colors';
import Reboot from 'material-ui/Reboot';
import './App.css'

const theme = createMuiTheme({
  palette: {
    contrastThreshold: 3,
    tonalOffset: 0.2,
    primary: grey,
    secondary: blue,
    error: {
      main: red[500],
    },
  },
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <Reboot />
          <Header />
          <Routes />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
