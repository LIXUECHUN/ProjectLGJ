import React, { Component } from 'react'
import {HashRouter as Router,Switch,Route,NavLink,Link} from 'react-router-dom';
import All from './home/All';

export default class Login extends Component {
    render() {
        return (
            <div className="lo-div">
                <span>用户名：</span>
                <input type="text" />
                <br />
                <br />
                <span> 密 码 ：</span>
                <input type="text" />
                <br />
                <br />
                <button>
                    <NavLink to='/home/all/1'>提交</NavLink>
                </button>
                <div>
                    <Route path="/home/all/1" component={All} />
                </div>
            </div>
        )
    }
}
