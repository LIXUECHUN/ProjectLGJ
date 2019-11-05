import React, { Component } from 'react'
import Header from './components/Header'
import SideBar from './components/SideBar'
import Home from './container/Home'
import API from './container/API'
import Article from './container/Article'
import Login from './container/Login'
import About from './container/About'
import Getstart from './container/Getstart'
import {HashRouter as Router,Switch,Route,Redirect} from 'react-router-dom';
import './app.css';


export default class App extends Component {
    render() {
        return (
            
            <Router basename="build">
                <Header />
                <div className='app-div'>
                    {/* 右边 */}
                    <SideBar />

                    {/* 左边 */}
                    <div>
                        <Switch>
                            <Route exact path='/' render={() => <Redirect from='/home' to='/home/all/1'/>}/>
                            <Route exact path='/home' render={() => <Redirect from='/home' to='/home/all/1'/>}/>


                            <Route path='/home' component={Home} />
                            <Route path='/getstart' component={Getstart} />
                            <Route path='/api' component={API} />
                            <Route path='/login' component={Login} />
                            <Route path='/about' component={About} />
                            <Route path='/article/:id' component={Article} />
                        </Switch>
                    </div>
                </div>
            </Router>
        )
    }
}
