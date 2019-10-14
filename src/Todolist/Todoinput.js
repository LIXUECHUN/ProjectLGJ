
import React, { Component } from 'react'
// 受控组件：value值被react控制的表单元素
// 可以实时获取表单元素的值（表单验证）/写法相对麻烦
// 
export default class Todoinput extends Component {
    constructor(){
        super();
        this.handleInput = this.handleInput.bind(this);
        this.state = {
            a:'',
            b:'',
            c:''
        }
    }
    handleInput = (e)=>{
        // 绑定this，事件处理函数写成箭头函数，或者用bind
        if(e.keyCode === 13){
            this.props.add(e.target.value);
        }
    }
    handleChange = (e)=>{
        this.setState({
            [e.target.name]: parseInt(e.target.value===''?0:e.target.value)
        })
    }
    componentDidMount(){
        console.log(this.refs.a);
        this.refs.a.focus();
    }
    render() {
        return (
            <div>
                <input ref='a' onKeyDown={this.handleInput} type="text"/>
                +
                <input name="b" onChange={this.handleChange} value={this.state.b} onKeyDown={this.handleInput} type="text"/>
                +
                <input name="c" onChange={this.handleChange} value={this.state.c} onKeyDown={this.handleInput} type="text"/>
                =
                <p>{this.state.a+this.state.b+this.state.c}</p>
                {/* 非受控组件:一次性获取或处理表单元素的值 */}
                <input ref={(inp)=>{this.inp=inp}} type="text"/>
                <button onClick={()=>{console.log(this.inp.value)}}>提交</button>

            </div>
        )
    }
}
// 受控组件：
// 1、给input标签添加value属性，赋值为state的值
// 2、给input标签绑定onChange事件，
// 在事件处理函数中setState
// 3、一个事件处理函数控制多个表单元素时，
// 给input标签加上name属性,事件处理函数中写：
// setState({[e.target.name]:e.target.value})


// //rcc 快捷键
// //引进来的是类，需要大写
// /**
//  * 受控组件：value被react控制的表单元素，
//  * 状态将被constructor中的状态控制
//  * 实时获取表单元素的值，例如表单验证，
//  * 写法较为麻烦
// */
// /**
//  * 
//  */
// import React, { Component } from 'react'
// import Todoing from './Todoing';

// export default class Todoinput extends Component {
//     constructor(){
//         super();
//         this.handleInput = this.handleInput.bind(this);
//         this.state = {
//             inputValue:'',
//             a:'',
//             b:'',
//             c:''
//         }
//         this.a.foces();        
//     }
//     handleInput=(e)=>{

//         // 看键值，回车穿13
//         if(e.keyCode === 13){
//           // 拿到输入块的值,target代指当前发生的元素结点。
//             // console.log();  
//             // props是从父组件拿来的属性
//             //绑定this,事件处理函数写成箭头函数，或者用bind
//             this.props.add(e.target.value);
//         }
//     }
//     //受控组件
//     handleChange=(e)=>{
//         this.setState({
//             [e.target.name]:parseInt(e.target.value===''?0:e.target.value)
//         })
//     }
//     // render以后执行的一个声明周期
//     //获取焦点
//     componentDidMount(){
//         this.a.focus();
//         this.refs.a.focus();
//     }
//     render() {

//         return (
//             <div>
//                 {/* onKeyDown绑定键盘事件 */}
//                 {/* handleInput是自己写的，不会自动执行， */}
//                 {/* 加value受控组件，一个事件处理函数，处理三个表单值 */}

//                 <input ref={(inp)=>{this.a=inp}} name='a' onChange={this.handleChange} value={this.state.a} onKeyDown={this.handleInput} type="text"/>
//                 +
//                 <input name='b' onChange={this.handleChange} value={this.state.b} onKeyDown={this.handleInput} type="text"/>
//                 +
//                 <input name='c'onChange={this.handleChange} value={this.state.c} 
//                 onKeyDown={this.handleInput} type="text"/>
//                 =
//                 <p>
//                     {/* 字符串转化为 */}
//                     {
//                         this.state.a
//                         +
//                         this.state.b
//                         +
//                         this.state.c
//                     }
//                 </p>
//                 {/* 受控组件，绑定事件，时间处理函数，再设置状态 */}
//                 {/* 非受控组件 拿东西比较简单。inp是属性，名字随意，注意对应,*/}
//                 <input ref={(inp)=>{this.inp=inp}} type='text'></input>
//                 <button onClick={()=>console.log(this.inp)}>提交</button>
//             </div>
//         )
//     }
// }
// Todoing.PropTypes = {
//     todo:PropTypes.array

// }
