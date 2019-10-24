import React, { Component } from 'react'

export default class Todoinput extends Component {
    // 回车添加代办
    addDateByEnter=(e)=>{
        if(e.keyCode === 13){
            // 调用props中的add的方法
            this.props.add(this.refs["title"].value);
            // 属性框归零
            this.refs["title"].value ="";
        }
    }
    render() {
        return (
            <div className="header">
                <div className="section">
                    <div className="label">Todolist</div>
                    <input ref="title" onKeyUp={this.addDateByEnter} />           
                </div>
            </div>
        )
    }
}
