import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as StoreProvider} from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import Routes from './routes';
import './styles/_main.scss';

import configureStore, { history } from './redux/store';

export const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <ConnectedRouter history={history}>
        <Routes />
      </ConnectedRouter>
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
