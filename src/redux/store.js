import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory, createHashHistory } from 'history';
import { routerMiddleware } from 'connected-react-router'

import createRootReducer from './reducers';
import sagas from './sagas/index';

let middleware = [];
const sagaMiddleware = createSagaMiddleware();
const history = createBrowserHistory();

middleware.push(sagaMiddleware);
middleware.push(routerMiddleware(history));

export default (preloadedState) => {
    const enhancers = [applyMiddleware(...middleware)];
    const store = createStore(
        createRootReducer(history),
        compose(...enhancers),
        preloadedState,
    );
    
    sagaMiddleware.run(sagas);

    return store;
};

export { history };