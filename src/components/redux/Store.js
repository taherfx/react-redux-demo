import {createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import rootReducer from './rootReducer'
import thunk from 'redux-thunk'
// import DevTools from '../../containers/DevTools';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, thunk)));

export default store