(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{11:function(t,e,n){t.exports=n(17)},16:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),c=n(9),r=n.n(c),u=(n(16),n(7)),i=n(1),l=n(2),s=n(5),h=n(3),d=n(4),p=n(10),m=n(6),b=function(t){function e(){var t;return Object(i.a)(this,e),(t=Object(s.a)(this,Object(h.a)(e).call(this))).handleInput=function(e){13===e.keyCode&&t.props.add(e.target.value)},t.handleChange=function(e){t.setState(Object(p.a)({},e.target.name,parseInt(""===e.target.value?0:e.target.value)))},t.handleInput=t.handleInput.bind(Object(m.a)(t)),t.state={a:"",b:"",c:""},t}return Object(d.a)(e,t),Object(l.a)(e,[{key:"componentDidMount",value:function(){console.log(this.refs.a),this.refs.a.focus()}},{key:"render",value:function(){var t=this;return o.a.createElement("div",null,o.a.createElement("input",{ref:"a",onKeyDown:this.handleInput,type:"text"}),"+",o.a.createElement("input",{name:"b",onChange:this.handleChange,value:this.state.b,onKeyDown:this.handleInput,type:"text"}),"+",o.a.createElement("input",{name:"c",onChange:this.handleChange,value:this.state.c,onKeyDown:this.handleInput,type:"text"}),"=",o.a.createElement("p",null,this.state.a+this.state.b+this.state.c),o.a.createElement("input",{ref:function(e){t.inp=e},type:"text"}),o.a.createElement("button",{onClick:function(){console.log(t.inp.value)}},"\u63d0\u4ea4"))}}]),e}(a.Component),f=function(t){function e(){return Object(i.a)(this,e),Object(s.a)(this,Object(h.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=this,e=this.props.todo;return o.a.createElement("ul",null,e.map((function(e,n){return o.a.createElement("li",{key:n},e,"---",o.a.createElement("button",{onClick:function(){return t.props.del(n)}},"\u5220\u9664"))})))}}]),e}(a.Component);f.defaultProps={todo:[1,2,3,4,4]};var j=function(t){function e(){var t;return Object(i.a)(this,e),(t=Object(s.a)(this,Object(h.a)(e).call(this))).addItem=function(e){t.setState({todo:[].concat(Object(u.a)(t.state.todo),[e])})},t.delItem=function(e){var n=Object(u.a)(t.state.todo);n.splice(e,1),t.setState((function(t,e){return console.log(t.todo),{todo:n}}))},t.state={todo:[1,2,3],a:100,b:200},t}return Object(d.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(b,{add:this.addItem}),o.a.createElement(f,{del:this.delItem,todo:this.state.todo}))}}]),e}(a.Component);r.a.render(o.a.createElement(j,null),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.6d792ea3.chunk.js.map