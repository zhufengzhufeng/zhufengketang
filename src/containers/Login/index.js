import React,{Component} from 'react';
import './index.less';
import Header from "../../components/Header/index";
import * as action from '../../redux/actions/userInfo';
import {connect} from 'react-redux';
@connect((state=>({

})),{...action})
export default class Home extends Component{
    constructor(){
        super();
        this.state = {
            tel:'',
            pass:''
        }
    }
    login(){
        this.props.setInfo(this.state)
    }
    render(){
        return (
            <div className="container login">
                <Header title="登录" history={this.props.history}/>
                <div className="avatar"></div>
                <div className="login-list">
                    <input type="text" placeholder="手机号" onChange={(e)=>{
                        this.setState({
                            tel:e.target.value
                        })
                    }}/>
                    <input type="text" placeholder="密码" onChange={(e)=>{
                        this.setState({
                            pass:e.target.value
                        })
                    }}/>
                    <a className="login-btn" onClick={this.login.bind(this)}>登录</a>
                </div>
            </div>
        )
    }
}