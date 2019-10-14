
import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class Todoing extends Component {
    render() {
        var {todo} = this.props;
        return (
            <ul>
                {
                    todo.map((item,idx)=>
                        <li key={idx}>
                            {item}---<button onClick={()=>this.props.del(idx)}>删除</button>
                        </li>)
                }
            </ul>
        )
    }
}
Todoing.propTypes = {
    todo: PropTypes.array,
    del: PropTypes.func
}
Todoing.defaultProps = {
    todo: [1,2,3,4,4]
}

// import PropTypes from 'pro-types';//需要引入
// import React, { Component } from 'react';

// export default class Todoing extends Component {
//     delItem(idx,e){
//         console.log(e);
//         this.props.del(idx);
//     }
//     render() {
//         var {todo} = this.props;
//         return (
//             <ul>
//                 {/* map,最终返回的是数组，数组里面的方法 */}
//                 {
//                     todo.map((item,idx)=><li key={idx}>
//                         {/* 普通参数和e都可以拿到 */}
//                         {item}---<button onClick={this.delItem.bind(this,idx)}>删除</button>
//                     </li>)
//                 }
//             </ul>
//         )
//     }
// }
// Todoing.propTypes = {
//     todo: PropTypes.array,
//     del: PropTypes.func
// }
// Todoing.defaultProps = {
//     // 默认值
//     todo:[1,2,3,4,4]
// }
