import React,{Component} from 'react';
import {HashRouter as Router,Route,Switch,Redirect} from 'react-router-dom';
import {render} from 'react-dom';
// 根组件 承载 头 尾 和一级路由
import App from './containers/index';
//首页
import Home from './containers/Home';
//课程组件
import Lesson from './containers/Lesson';
//个人中心
import Profile from './containers/Profile';
//登录页面
import Login from './containers/Login';

//公共样式
import './common/css/index.less';

//注入store
import store from './redux/store';
import {Provider} from 'react-redux';
window._store = store;

//创建history
import {ConnectedRouter} from 'react-router-redux'
import createHistory from 'history/createHashHistory';
const history = createHistory();

import PrivateRoute from './Private'



render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
                <App>
                    <Switch>
                        <Route path={'/home'} component={Home}/>
                        <PrivateRoute path={'/lesson'} component={Lesson}/>
                        <Route path={'/profile'} component={Profile}/>
                        <Route path={'/login'} component={Login}/>
                        <Redirect to="/home"/>
                    </Switch>
                </App>
        </ConnectedRouter>
    </Provider>
,document.getElementById('app'));


//重定向問題
