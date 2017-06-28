import {home} from './home';
import {userInfo} from './userInfo';
import {lesson} from './lesson';
import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux'
export default combineReducers({
    home,
    userInfo,
    lesson,
    router:routerReducer //注入router Reducer
});