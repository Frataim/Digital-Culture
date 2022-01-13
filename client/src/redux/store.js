import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
// import createSagaMiddleware from 'redux-saga';
import {rootReducer} from './reducers/rootReducer';
import initialState from './initialState'

// redux saga middleware
// import rootSaga from './sagas/rootSaga';

// const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(thunk)));

// sagaMiddleware.run(rootSaga);
