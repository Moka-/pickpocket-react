import { createMuiTheme } from 'material-ui/styles';
import { grey, blue, red } from 'material-ui/colors';

export default createMuiTheme({
    palette: {
      contrastThreshold: 3,
      tonalOffset: 0.2,
      primary: grey,
      secondary: blue,
      error: red 
    },
  });