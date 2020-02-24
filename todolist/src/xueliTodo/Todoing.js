import React, { Component } from 'react'
import './todo.css';

export default class Todoing extends Component {
    // 删除
    removeData=(index)=>{
        this.props.removeData(index);
    }
    // 元素值改变时
    changeChecked=(index)=>{
        this.props.changeChecked(index);
    }

    render() {
        return (
            <div className="section">
                <h2>待办<span>{this.props.todo}</span></h2>
                
                <ol>
                    {
                        this.props.list.map((value,key)=>{
                            if(!value.checked){
                                return (
                                    <li key={key}>
                                        <input  type="checkbox"  checked={value.checked} onChange={this.changeChecked.bind(this,key)}/>
                                        {value.title}
                                        <button onClick={this.removeData.bind(this, key)}>×</button>
                                    </li>
                                )
                            }
                            return '';                            
                        })
                    }
                </ol>
                <h2>已完成<span>{this.props.done}</span></h2>
                <ul>
                    {
                        this.props.list.map((value,key)=>{
                            if(value.checked){
                                return (
                                    <li key={key}>
                                        <input  type="checkbox"  checked={value.checked} onChange={this.changeChecked.bind(this,key)}/>
                                        {value.title}
                                        <button onClick={this.removeData.bind(this, key)}>×</button>
                                    </li>
                                )
                            }
                            return '';                            
                        })
                    }
                </ul>
            </div>
        )
    }
}
