import React, { Component } from 'react'
import Todoinput from './Todoinput';
import Todoing from './Todoing';

export default class Todolist extends Component {
    constructor(props){
        super(props)
        const list = JSON.parse(localStorage.getItem('todolist'));
        //判断前面有list
        if (list) {
            this.state = {
                list: list
            }
        } else {
            this.state = {
                list: []
            }
        }
    }
    add=(title)=>{
        const temp = {
            title:title,
            checked:false
        }
        const list  = this.state.list;
        list.push(temp);
        this.setState({
            list:list
        })
    }

    // 删除
    removeData=(index)=>{
        const list  = this.state.list;
        list.splice(index,1);
        this.setState({
            list:list
        })
    }

    // 元素值改变时
    changeChecked=(index)=>{
        // 获取list状态
        const list = this.state.list;
        list[index].checked = !list[index].checked;
        this.setState({
            list: list
        })

    }

    //存储变量
    componentDidMount(){

    }

    render() {

        localStorage.setItem('todolist', JSON.stringify(this.state.list));
        let todo = 0;
        let done = 0;
        this.state.list.forEach((item)=>{
            if(item.checked===false){
                todo++;
            }else{
                done++;
            }
        })
        return (
            <div className="todolist">
                {/* 向子组件传方法 */}
                <Todoinput add={this.add} />
                <Todoing removeData={this.removeData} changeChecked={this.changeChecked} list={this.state.list} todo={todo} done={done} />

                
            </div>
        )
    }
}
