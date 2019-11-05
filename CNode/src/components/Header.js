import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <div className='he-div1'>
                <div className='he-div'>
                    <img src='https://static2.cnodejs.org/public/images/cnodejs_light.svg' />
                    <input type='text' className='he-input'/>
                    <div>
                        <ul>
                            <li><Link to="/home">首页</Link></li>
                            <li><Link to='/getstart'>新手入门</Link></li>
                            <li><Link to='/api'>API</Link></li>
                            <li><Link to='/about'>关于</Link></li>
                            <li><Link to='/login'>登录</Link></li>
                        </ul>
                    </div>
                </div>
                
                
            </div>
        )
    }
}
