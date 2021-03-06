import { createStore, compose, applyMiddleware } from 'redux'
import {combineReducers} from 'redux-immutable'
import thunk from 'redux-thunk'
import root from './models/root'
import home from "./models/home"
import setting from "./models/setting"
import user from "./models/user"

const reducer = combineReducers({
  root,
  home,
  setting,
  user
});


const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));


export default store;