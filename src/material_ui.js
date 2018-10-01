import { createMuiTheme } from '@material-ui/core/styles';
import Blue from '@material-ui/core/colors/blue';

export default createMuiTheme({
  palette: {
    primary: { main: 'rgb(249, 187, 0)' },
    secondary: { main: Blue[500] }
  },
});