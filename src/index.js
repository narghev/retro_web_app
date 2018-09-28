import React from 'react';
import ReactDOM from 'react-dom';
import App from './application';
import { Provider } from 'react-redux';
import store from './store';
import registerServiceWorker from './registerServiceWorker';
import './setup';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './material_ui';

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
