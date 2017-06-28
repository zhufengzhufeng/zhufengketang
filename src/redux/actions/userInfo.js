import * as Types from '../action-types/userInfo'
import {login} from '../../api/login';
let url = 'http://localhost:3000';
import {  push } from 'react-router-redux';

export const setInfo =(data)=>(dispatch,getState)=>{
    login(data).then(user=>{
        dispatch({
            type:Types.SET_USER_INFO,
            user
        })
        dispatch(push('/lesson'));
    });
};