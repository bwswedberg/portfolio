import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { green, grey, red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = responsiveFontSizes(createMuiTheme({
  typography: {
    fontFamily: "'Fira Sans', sans-serif",
    fontSize: 18,
  },
  palette: {
    type: 'dark',
    primary: {
      main: grey[500],
    },
    secondary: {
      main: green.A700,
    },
    error: {
      main: red.A400,
    },
    background: {
      // default: '#0f0f0f',
    },
  },
}));

export default theme;