import React, { Component } from 'react'
import {HashRouter as Router,Switch,Route,NavLink} from 'react-router-dom';
import All from './home/All';
import Ask from './home/Ask';
import Good from './home/Good';
import Share from './home/Share';
import Job from './home/Job';


export default class Home extends Component {
    render() {
        return (
            <div className="ho-div">
                <div className='ho-top'>
                    <ul>
                        <li><NavLink to='/home/all/1'>全部</NavLink></li>
                        <li><NavLink to='/home/good/1'>精华</NavLink></li>
                        <li><NavLink to='/home/share/1'>分享</NavLink></li>
                        <li><NavLink to='/home/ask/1'>问答</NavLink></li>
                        <li><NavLink to='/home/job/1'>招聘</NavLink></li>
                    </ul>
                </div>
                <div>
                    <Route path="/home/all/:id" component={All} />
                    <Route path="/home/good/:id" component={Good} />
                    <Route path="/home/share/:id" component={Share} />
                    <Route path="/home/ask/:id" component={Ask} />
                    <Route path="/home/job/:id" component={Job} />

                </div>
            </div>
        )
    }
}
