import {home} from './home';
import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux'
export default combineReducers({
    home,
    router:routerReducer //注入router Reducer
});