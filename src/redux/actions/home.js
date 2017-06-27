//获取列表
import * as Types from '../action-types/home'
import {getSliders,getLessons} from '../../api/home';
let url = 'http://localhost:3000';
export const getList =()=>(dispatch,getState)=>{
    getSliders(url+'/api/getSliders').then(sliders=>{
        dispatch({
            type:Types.GET_SLIDER,
            sliders
        })
    });
};
export const setLesson=(lesson)=>{
    return {
        type:Types.SET_CURRENT_LESSON,
        lesson
    }
}
export const getLesson =()=>(dispatch,getState)=>{
    getLessons(url+'/api/getLessons').then(lessons=>{
        dispatch({
            type:Types.GET_LESSON,
            lessons
        })
    });
};
