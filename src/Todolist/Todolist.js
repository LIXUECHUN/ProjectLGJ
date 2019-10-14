
import React, { Component } from 'react'
import Todoinput from './Todoinput'
import Todoing from './Todoing'

export default class Todolist extends Component {
    constructor(){
        super();
        this.state = {
            todo:[1,2,3],
            a:100,
            b:200
        }
        // 深拷贝\浅拷贝
        // var obj = {a:100,b:[1,2,3]};
        // var obj1 = {c:300};
        // var o = {...obj};
        // var o = Object.assign({},obj,obj1);
        // 深拷贝
        // var o = JSON.parse(JSON.stringify(obj));
        // o.b[0] = 200;
        // console.log(o===obj);
        // 遍历对象
        // Object.keys(obj).forEach((item)=>{
        //     console.log(item)
        //     console.log(obj[item])
        // })

    }
    addItem = (data)=>{
        // this.state.todo.push(data);
        this.setState({
            todo: [...this.state.todo,data]
        })
    }
    delItem = (idx)=>{
        // 1、不能直接改变或处理state，通过setState改变
        let todo = [...this.state.todo];
        todo.splice(idx,1);
        // 2、setState是异步执行
        this.setState((state,props)=>{
            console.log(state.todo);
            return {
                todo: todo
            }
        })
        // 在setState里获取state可能会出错，不是你想要的值
        // 可以像上面那样，把第一个参数写成函数，解决该问题
        // this.setState({
        //     todo: this.state.num + 100
        // },()=>{
        //     console.log(this.state.todo)
        // })
    }
    render() {
        return (
            <div>
                <Todoinput add={this.addItem}/>
                <Todoing del={this.delItem} todo={this.state.todo}/>
            </div>
        )
    }
}
// import React, { Component } from 'react'
// // 引入
// import Todoinput from './Todoinput'
// import Todoing from './Todoing'

// export default class Todolist extends Component {
//     constructor(){
//         super();
//         this.state = {
//             todo:[1,2,3]
//         }

//         // 深拷贝\浅拷贝
//         // var obj = {a:100,b:[1,2,3]};
//         // var obj1 = {c:300};
//         // var o = {...obj};
//         // var o = Object.assign({},obj,obj1);
//         // 深拷贝
//         // 转化为字符串以后再转化为字符串
//         // var o = JSON.parse(JSON.stringify(obj));
//         // o.b[0] = 200;
//         // console.log(o===obj);
//         // 遍历对象
//         // Object.keys(obj).forEach((item)=>{
//         //     console.log(item)
//         //     console.log(obj[item])
//         // })

//     }

//     // 传入函数
//     //this一定要用箭头函数和ban
//     addItem = (data)=>{
//          // 父组件向子组件
//          //向子组件chuan方法
//          // 添加
//         // 改变状态
//         // this.state.todo.push(data);
//         this.setState({
//             todo: [...this.state.todo,data]
//         })
//     }
//     delItem = (idx)=>{
//         // 1、不能直接改变或处理state，通过setState改变
//         let todo = [...this.state.todo];
//         todo.splice(idx,1);
//         // 2、setState是异步执行
//         this.setState((state,props)=>{
//             console.log(state.todo);
//             return {
//                 todo: todo
//             }
//         })
//     }
//         // 在setState里获取state可能会出错，不是你想要的值
//         // 可以像上面那样，把第一个参数写成函数，解决该问题
//         // this.setState({
//         //     todo: this.state.num + 100
//         // },()=>{
//         //     console.log(this.state.todo)
//         // })
//     render() {
//         return (
//             <div>
//                 {/* 多次使用，穿不同的数字 */}
//                 <Todoinput add={this.addItem}/>
//                 <Todoing del={this.delItem} todo={this.state.todo}/>
//             </div>
//         )
//     }
// }