import { createStore, applyMiddleware } from 'redux';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const store = createStore(
        rootReducer,
        composeWithDevTools(
            applyMiddleware(...middlewares)
        )
    );

sagaMiddleware.run(rootSaga);

export default store;