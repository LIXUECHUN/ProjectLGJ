// 两个js库
import React,{Fragment,Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// import ShowTime from "./Showtime";
import Todolist from './Todolist/Todolist';

// 继承类，东西比较大


// 渲染函数
// var num =[1,2,3,4,5]
// ReactDOM.render(
//     <ShowTime age={num} name='zhangsan'/>,//组件的值是只读的，不能更改
//     document.getElementById("root")
// )
ReactDOM.render(
    // render中，放最终显示到页面的东西
    <Todolist />,document.getElementById("root")
)

// 组件交互：
// 父组件->子组件，调用子组件时添加属性，子组件通过props拿到传递的参数
// 子组件->父组件，


// function ShowTime(props){
//     console.log(props);
//     // return后面只能返回一个，不能是并列的结构,
//     // React是包裹的作用，没有真正的结点
//     return (
//         <Fragment>
//             <div>{props.name}</div>
//             <div>{new Date().toLocaleString()}</div>
//         </Fragment>
//     )
// }
//显示当前系统时间
//里面写的内容可以返回一个值
// function showTime(){
//     var ele = <div>{new Date().toLocaleString()}</div>;
//     ReactDOM.render(
//         ele,
//         document.querySelector('#root')
//     );
// }
// showTime();
// setInterval(showTime,1000);//函数体，不加（）
// // 如果函数体加了（），每秒执行返回值
// var div = document.getElementById("root");
// div.className = "active";

// var obj = {
//     type: 'div',
//     // 属性
//     props: {
//         id: 'box',
//         class: 'box',
//         children: [
//             'hello',
//             'react',
//             {
//                 type: 'h1',
//                 // 属性
//                 props: {
//                     id: 'tit',
//                     class: 'tit',
//                     children: [
//                         'title',
//                         'react'
//                     ]
//                 }
//             }
//         ]
//     }
// }


// function render(obj,container){
//     var {type,props} = obj;
//     // 文档碎片，虚拟dom对象，虚拟的节点，就是一个变量
//     var fragment = document.createDocumentFragment();

//     var ele = document.createElement(type);
//     for(var item in props){
//         if(item === 'class'){
//             ele.className = props[item]
//         }else if(item === 'children'){
//             for(var i=0;i<props.children.length;i++){
//                 // ele.innerHTML += props.children[i];添加文本结点注意+=

//                 // ele.innerHTML += props.children[i];
//                 if(typeof props.children[i] === 'object'){
//                     render(props.children[i],ele);
//                 }else{
//                     var txt = document.createTextNode(props.children[i]);
//                     ele.appendChild(txt);
//                 }
//             }
//         }else{
//             ele[item] = props[item];
//         }
//     }
//     fragment.appendChild(ele);
//     container.appendChild(fragment);
// }
// render(obj,document.getElementById('root'));
//页面回流（重排reflow）:DOM结构变化、内容变化、大小、位置变化。都会引起。代价大
//页面重绘（repaint）：颜色变化（背景色，字体颜色，边框）。代价小

// render(pbj,document.getElementById("root"));
// 页面渲染过程
// 请求html页面、浏览器html解析器解析html文件。生成Dom树
// link引入css文件、css解析器解析css,生成css对象模型，cssom和dom tree 结合生成一个render tree,
// 最后浏览器绘制


// console.time('time');
// var div = document.getElementById("root");
// var str = ""
// for(var i = 0;i < 100; i++){
//     str += '<p>'+ i + '</p>';
// }
// div.innerHTML = str;
// console.timeEnd('time');

// var div = document.getElementById("root");
// div.className = "active";
// offsetLeft/offsetWidth等都会引起会留，慎用
// console.log(div.offsetLeft);
// var wid = div.offsetWidth;
// setInterval(()=>{
//     wid += 1;
//     div.style.width = wid + 'px';
// },100)


