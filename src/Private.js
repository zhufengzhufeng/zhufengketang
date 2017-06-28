import React, { Component } from 'react'
import {
    Route,
    Redirect,
} from 'react-router-dom';
import {connect} from 'react-redux';
@connect(state=>({
    userInfo:state.userInfo
}))
export default class Home extends Component{
    render(){
        let {component:Component,...rest} = this.props
        return (
            <Route {...rest} render={props => {
                return (
                    this.props.userInfo.nickName? (
                        <Component {...props}/>
                    ) : (
                        <Redirect to={{
                            pathname: '/login',
                        }}/>
                    )
                )
            }}/>
        )
    }
}