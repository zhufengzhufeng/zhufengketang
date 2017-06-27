import React,{Component} from 'react';
import {HashRouter as Router,Route,Switch,Redirect} from 'react-router-dom';
import {render} from 'react-dom';
// 根组件 承载 头 尾 和一级路由
import App from './containers/index';
//首页
import Home from './containers/Home';
//课程组件
import Lesson from './containers/Lesson';

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



render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
                <App>
                    <Switch>
                        <Route path={'/home'} component={Home}/>
                        <Route path={'/lesson'} component={Lesson}/>
                        <Redirect to="/home"/>
                    </Switch>
                </App>
        </ConnectedRouter>
    </Provider>
,document.getElementById('app'));


//重定向問題
