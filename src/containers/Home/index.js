import React,{Component} from 'react';
import {getSliders} from '../../api/home';
import {connect} from 'react-redux';
import * as actions from '../../redux/actions/home';
import Swiper from "../../components/Swiper/index";
import './index.less'
import LessonList from "../../components/LessionList/index";
import HomeHeader from '../../components/HomeHeader';
@connect((state)=>({
    sliders:state.home.sliders,
    lessons:state.home.lessons
}),{...actions})

export default class Home extends Component{
    constructor(){
        super();
    }
    render(){
        return (

            <div className="home wrap-page">
                <HomeHeader/>
                {this.props.sliders.length>0?<Swiper sliders={this.props.sliders}/>:''}
                <h3><i className="iconfont icon-book"></i>全部課程</h3>
                <LessonList lists={this.props.lessons}/>
            </div>
        )
    }
    componentDidMount(){
        this.props.getList();
        this.props.getLesson();
    }
}