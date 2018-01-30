import React, { Component } from 'react';
import Routes from './routes';
import Header from './header/header';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Reboot from 'material-ui/Reboot';
import './App.css';
import theme from './theme';

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
