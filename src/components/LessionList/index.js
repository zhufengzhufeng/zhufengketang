import React,{Component} from 'react';
import './index.less'
export default class LessonList extends Component{
    render(){
        return (
            <div className="lesson-list">
                {this.props.lists.length?
                    this.props.lists.map((item,index)=>{
                        let {url,lesson,price} = item;
                        return (
                            <div key={index} className="lesson-list-item">
                                <img src={url} alt=""/>
                                <p>{lesson}</p>
                                <strong>{price}</strong>
                            </div>
                        )
                    })
                :'正在加載'}
            </div>
        )
    }
}