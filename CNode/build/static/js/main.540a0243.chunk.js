(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{22:function(e,t,a){e.exports=a(33)},32:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(19),r=a.n(c),o=a(2),m=a(3),i=a(5),u=a(4),s=a(6),h=a(1),E=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"he-div1"},l.a.createElement("div",{className:"he-div"},l.a.createElement("img",{src:"https://static2.cnodejs.org/public/images/cnodejs_light.svg"}),l.a.createElement("input",{type:"text",className:"he-input"}),l.a.createElement("div",null,l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(h.b,{to:"/home"},"\u9996\u9875")),l.a.createElement("li",null,l.a.createElement(h.b,{to:"/getstart"},"\u65b0\u624b\u5165\u95e8")),l.a.createElement("li",null,l.a.createElement(h.b,{to:"/api"},"API")),l.a.createElement("li",null,l.a.createElement(h.b,{to:"/about"},"\u5173\u4e8e")),l.a.createElement("li",null,l.a.createElement(h.b,{to:"/login"},"\u767b\u5f55"))))))}}]),t}(n.Component),p=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"si-div"})}}]),t}(n.Component),d=a(11),b=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(i.a)(this,Object(u.a)(t).call(this))).state={data:[]},e}return Object(s.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this,t="https://cnodejs.org/api/v1/topics?page=".concat(this.props.match.params.id);console.log(this.props.match.params.id),fetch(t).then((function(e){return e.json()})).then((function(t){e.setState({data:t.data})}))}},{key:"componentDidUpdate",value:function(e,t){var a=this;if(e.match.params.id!==this.props.match.params.id){var n=this.props.match.params.id;fetch("https://cnodejs.org/api/v1/topics?page="+n).then((function(e){return e.json()})).then((function(e){console.log(e),a.setState({data:e.data})}))}}},{key:"render",value:function(){return l.a.createElement("div",null,this.state.data.map((function(e){return l.a.createElement("div",{className:"item",key:e.id},l.a.createElement("img",{src:e.author.avatar_url}),l.a.createElement("div",null,e.reply_count,"/",e.visit_count),l.a.createElement("button",null,"\u5206\u4eab"),l.a.createElement("span",{className:"all-title"},l.a.createElement(h.b,{to:"/article/".concat(e.id)},e.title)),l.a.createElement("span",{className:"all-time"},"1\u5c0f\u65f6\u524d"))})),l.a.createElement("div",null,l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(h.c,{to:"/home/all/1"},"1")),l.a.createElement("li",null,l.a.createElement(h.c,{to:"/home/all/2"},"2")),l.a.createElement("li",null,l.a.createElement(h.c,{to:"/home/all/3"},"3")),l.a.createElement("li",null,l.a.createElement(h.c,{to:"/home/all/4"},"4")),l.a.createElement("li",null,l.a.createElement(h.c,{to:"/home/all/5"},"5")),l.a.createElement("li",null,l.a.createElement(h.c,{to:"/home/all/6"},"6")),l.a.createElement("li",null,l.a.createElement(h.c,{to:"/home/all/7"},"7")),l.a.createElement("li",null,l.a.createElement(h.c,{to:"/home/all/8"},"8")),l.a.createElement("li",null,l.a.createElement(h.c,{to:"/home/all/9"},"9")),l.a.createElement("li",null,l.a.createElement(h.c,{to:"/home/all/10"},"10")))))}}]),t}(n.Component),v=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(i.a)(this,Object(u.a)(t).call(this))).state={data:[]},e}return Object(s.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this,t="https://cnodejs.org/api/v1/topics?page=".concat(this.props.match.params.page,"&tab=ask");fetch(t).then((function(e){return e.json()})).then((function(t){e.setState({data:t.data})}))}},{key:"componentDidUpdate",value:function(e,t){var a=this;if(e.match.params.id!==this.props.match.params.id){var n=this.props.match.params.id;fetch("https://cnodejs.org/api/v1/topics?page="+n).then((function(e){return e.json()})).then((function(e){console.log(e),a.setState({data:e.data})}))}}},{key:"render",value:function(){return l.a.createElement("div",null,this.state.data.map((function(e){return l.a.createElement("div",{className:"item",key:e.id},l.a.createElement("img",{src:e.author.avatar_url}),l.a.createElement("div",null,e.reply_count,"/",e.visit_count),l.a.createElement("button",null,"\u5206\u4eab"),l.a.createElement("span",{className:"all-title"},l.a.createElement(h.b,{to:"/article/".concat(e.id)},e.title)),l.a.createElement("span",{className:"all-time"},"1\u5c0f\u65f6\u524d"))})),l.a.createElement("div",null,l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(h.c,{to:"/home/all/1"},"1")),l.a.createElement("li",null,l.a.createElement(h.c,{to:"/home/all/2"},"2")),l.a.createElement("li",null,l.a.createElement(h.c,{to:"/home/all/3"},"3")),l.a.createElement("li",null,l.a.createElement(h.c,{to:"/home/all/4"},"4")),l.a.createElement("li",null,l.a.createElement(h.c,{to:"/home/all/5"},"5")),l.a.createElement("li",null,l.a.createElement(h.c,{to:"/home/all/6"},"6")),l.a.createElement("li",null,l.a.createElement(h.c,{to:"/home/all/7"},"7")),l.a.createElement("li",null,l.a.createElement(h.c,{to:"/home/all/8"},"8")),l.a.createElement("li",null,l.a.createElement(h.c,{to:"/home/all/9"},"9")),l.a.createElement("li",null,l.a.createElement(h.c,{to:"/home/all/10"},"10")))))}}]),t}(n.Component),f=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(i.a)(this,Object(u.a)(t).call(this))).state={data:[]},e}return Object(s.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this,t="https://cnodejs.org/api/v1/topics?page=".concat(this.props.match.params.page,"&tab=good");fetch(t).then((function(e){return e.json()})).then((function(t){e.setState({data:t.data})}))}},{key:"componentDidUpdate",value:function(e,t){var a=this;if(e.match.params.id!==this.props.match.params.id){var n=this.props.match.params.id;fetch("https://cnodejs.org/api/v1/topics?page="+n).then((function(e){return e.json()})).then((function(e){console.log(e),a.setState({data:e.data})}))}}},{key:"render",value:function(){return l.a.createElement("div",null,this.state.data.map((function(e){return l.a.createElement("div",{className:"item",key:e.id},l.a.createElement("img",{src:e.author.avatar_url}),l.a.createElement("div",null,e.reply_count,"/",e.visit_count),l.a.createElement("button",null,"\u5206\u4eab"),l.a.createElement("span",{className:"all-title"},l.a.createElement(h.b,{to:"/article/".concat(e.id)},e.title)),l.a.createElement("span",{className:"all-time"},"1\u5c0f\u65f6\u524d"))})),l.a.createElement("div",null,l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(h.c,{to:"/home/all/1"},"1")),l.a.createElement("li",null,l.a.createElement(h.c,{to:"/home/all/2"},"2")),l.a.createElement("li",null,l.a.createElement(h.c,{to:"/home/all/3"},"3")),l.a.createElement("li",null,l.a.createElement(h.c,{to:"/home/all/4"},"4")),l.a.createElement("li",null,l.a.createElement(h.c,{to:"/home/all/5"},"5")),l.a.createElement("li",null,l.a.createElement(h.c,{to:"/home/all/6"},"6")),l.a.createElement("li",null,l.a.createElement(h.c,{to:"/home/all/7"},"7")),l.a.createElement("li",null,l.a.createElement(h.c,{to:"/home/all/8"},"8")),l.a.createElement("li",null,l.a.createElement(h.c,{to:"/home/all/9"},"9")),l.a.createElement("li",null,l.a.createElement(h.c,{to:"/home/all/10"},"10")))))}}]),t}(n.Component),j=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(i.a)(this,Object(u.a)(t).call(this))).state={data:[]},e}return Object(s.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this,t="https://cnodejs.org/api/v1/topics?page=".concat(this.props.match.params.page,"&tab=share");fetch(t).then((function(e){return e.json()})).then((function(t){e.setState({data:t.data}),console.log(e.state.data)}))}},{key:"componentDidUpdate",value:function(e,t){var a=this;if(e.match.params.id!==this.props.match.params.id){var n=this.props.match.params.id;fetch("https://cnodejs.org/api/v1/topics?page="+n).then((function(e){return e.json()})).then((function(e){console.log(e),a.setState({data:e.data})}))}}},{key:"render",value:function(){return l.a.createElement("div",null,this.state.data.map((function(e){return l.a.createElement("div",{className:"item",key:e.id},l.a.createElement("img",{src:e.author.avatar_url}),l.a.createElement("div",null,e.reply_count,"/",e.visit_count),l.a.createElement("button",null,"\u5206\u4eab"),l.a.createElement("span",{className:"all-title"},l.a.createElement(h.b,{to:"/article/".concat(e.id)},e.title)),l.a.createElement("span",{className:"all-time"},"1\u5c0f\u65f6\u524d"))})),l.a.createElement("div",null,l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(h.c,{to:"/home/all/1"},"1")),l.a.createElement("li",null,l.a.createElement(h.c,{to:"/home/all/2"},"2")),l.a.createElement("li",null,l.a.createElement(h.c,{to:"/home/all/3"},"3")),l.a.createElement("li",null,l.a.createElement(h.c,{to:"/home/all/4"},"4")),l.a.createElement("li",null,l.a.createElement(h.c,{to:"/home/all/5"},"5")),l.a.createElement("li",null,l.a.createElement(h.c,{to:"/home/all/6"},"6")),l.a.createElement("li",null,l.a.createElement(h.c,{to:"/home/all/7"},"7")),l.a.createElement("li",null,l.a.createElement(h.c,{to:"/home/all/8"},"8")),l.a.createElement("li",null,l.a.createElement(h.c,{to:"/home/all/9"},"9")),l.a.createElement("li",null,l.a.createElement(h.c,{to:"/home/all/10"},"10")))))}}]),t}(n.Component),O=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(i.a)(this,Object(u.a)(t).call(this))).state={data:[]},e}return Object(s.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this,t="https://cnodejs.org/api/v1/topics?page=".concat(this.props.match.params.page,"&tab=job");fetch(t).then((function(e){return e.json()})).then((function(t){e.setState({data:t.data})}))}},{key:"componentDidUpdate",value:function(e,t){var a=this;if(e.match.params.id!==this.props.match.params.id){var n=this.props.match.params.id;fetch("https://cnodejs.org/api/v1/topics?page="+n).then((function(e){return e.json()})).then((function(e){console.log(e),a.setState({data:e.data})}))}}},{key:"render",value:function(){return l.a.createElement("div",null,this.state.data.map((function(e){return l.a.createElement("div",{className:"item",key:e.id},l.a.createElement("img",{src:e.author.avatar_url}),l.a.createElement("div",null,e.reply_count,"/",e.visit_count),l.a.createElement("button",null,"\u5206\u4eab"),l.a.createElement("span",{className:"all-title"},l.a.createElement(h.b,{to:"/article/".concat(e.id)},e.title)),l.a.createElement("span",{className:"all-time"},"1\u5c0f\u65f6\u524d"))})),l.a.createElement("div",null,l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(h.c,{to:"/home/all/1"},"1")),l.a.createElement("li",null,l.a.createElement(h.c,{to:"/home/all/2"},"2")),l.a.createElement("li",null,l.a.createElement(h.c,{to:"/home/all/3"},"3")),l.a.createElement("li",null,l.a.createElement(h.c,{to:"/home/all/4"},"4")),l.a.createElement("li",null,l.a.createElement(h.c,{to:"/home/all/5"},"5")),l.a.createElement("li",null,l.a.createElement(h.c,{to:"/home/all/6"},"6")),l.a.createElement("li",null,l.a.createElement(h.c,{to:"/home/all/7"},"7")),l.a.createElement("li",null,l.a.createElement(h.c,{to:"/home/all/8"},"8")),l.a.createElement("li",null,l.a.createElement(h.c,{to:"/home/all/9"},"9")),l.a.createElement("li",null,l.a.createElement(h.c,{to:"/home/all/10"},"10")))))}}]),t}(n.Component),g=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"ho-div"},l.a.createElement("div",{className:"ho-top"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(h.c,{to:"/home/all/1"},"\u5168\u90e8")),l.a.createElement("li",null,l.a.createElement(h.c,{to:"/home/good/1"},"\u7cbe\u534e")),l.a.createElement("li",null,l.a.createElement(h.c,{to:"/home/share/1"},"\u5206\u4eab")),l.a.createElement("li",null,l.a.createElement(h.c,{to:"/home/ask/1"},"\u95ee\u7b54")),l.a.createElement("li",null,l.a.createElement(h.c,{to:"/home/job/1"},"\u62db\u8058")))),l.a.createElement("div",null,l.a.createElement(d.b,{path:"/home/all/:id",component:b}),l.a.createElement(d.b,{path:"/home/good/:id",component:f}),l.a.createElement(d.b,{path:"/home/share/:id",component:j}),l.a.createElement(d.b,{path:"/home/ask/:id",component:v}),l.a.createElement(d.b,{path:"/home/job/:id",component:O})))}}]),t}(n.Component),y=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,"API")}}]),t}(n.Component),k=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(i.a)(this,Object(u.a)(t).call(this))).state={data:{author:{}}},e}return Object(s.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this,t="https://cnodejs.org/api/v1/topic/".concat(this.props.match.params.id);console.log(this.props.match.params.id),fetch(t).then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({data:t.data})}))}},{key:"render",value:function(){return l.a.createElement("div",{className:"ar-div"},l.a.createElement("div",null,l.a.createElement("button",null,"\u7cbe\u534e"),l.a.createElement("span",{className:"ar-ti"},this.state.data.title),l.a.createElement("br",null),l.a.createElement("span",{className:"ar-at"},"\u4f5c\u8005\uff1a",this.state.data.author.loginname),l.a.createElement("span",{className:"ar-at"},this.state.data.visit_count," \u6b21\u6d4f\u89c8"),l.a.createElement("span",{className:"ar-at"}," \u6765\u81ea \u5206\u4eab ")),l.a.createElement("hr",null),l.a.createElement("div",null,l.a.createElement("div",{dangerouslySetInnerHTML:{__html:this.state.data.content}})))}}]),t}(n.Component),N=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"lo-div"},l.a.createElement("span",null,"\u7528\u6237\u540d\uff1a"),l.a.createElement("input",{type:"text"}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("span",null," \u5bc6 \u7801 \uff1a"),l.a.createElement("input",{type:"text"}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("button",null,l.a.createElement(h.c,{to:"/home/all/1"},"\u63d0\u4ea4")),l.a.createElement("div",null,l.a.createElement(d.b,{path:"/home/all/1",component:b})))}}]),t}(n.Component),_=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,"About")}}]),t}(n.Component),C=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,"\u65b0\u624b\u5165\u95e8")}}]),t}(n.Component),S=(a(32),function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement(h.a,{basename:"build"},l.a.createElement(E,null),l.a.createElement("div",{className:"app-div"},l.a.createElement(p,null),l.a.createElement("div",null,l.a.createElement(d.d,null,l.a.createElement(d.b,{exact:!0,path:"/",render:function(){return l.a.createElement(d.a,{from:"/home",to:"/home/all/1"})}}),l.a.createElement(d.b,{exact:!0,path:"/home",render:function(){return l.a.createElement(d.a,{from:"/home",to:"/home/all/1"})}}),l.a.createElement(d.b,{path:"/home",component:g}),l.a.createElement(d.b,{path:"/getstart",component:C}),l.a.createElement(d.b,{path:"/api",component:y}),l.a.createElement(d.b,{path:"/login",component:N}),l.a.createElement(d.b,{path:"/about",component:_}),l.a.createElement(d.b,{path:"/article/:id",component:k})))))}}]),t}(n.Component));r.a.render(l.a.createElement(S,null),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.540a0243.chunk.js.map