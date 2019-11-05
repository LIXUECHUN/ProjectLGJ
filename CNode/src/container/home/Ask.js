import React, { Component } from 'react';
import {HashRouter as Router,Switch,Route,NavLink,Link} from 'react-router-dom';


export default class Ask extends Component {
    constructor(){
        super();
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        let url = `https://cnodejs.org/api/v1/topics?page=${this.props.match.params.page}&tab=ask`;
        fetch(url)
            .then((res)=>res.json())
            .then((res)=>{
                // console.log(res);
                this.setState({
                    data: res.data
                })
            })
    
    }
    // 自动更新获取数据
    componentDidUpdate(prevProps,prevState){
        if(prevProps.match.params.id!==this.props.match.params.id){
            let page = this.props.match.params.id;
            fetch('https://cnodejs.org/api/v1/topics?page='+page)
                .then((res)=>res.json())
                .then((res)=>{
                    console.log(res)
                    this.setState({
                        data: res.data
                    });
                })
        }
    }
    render() {
        return (
            <div>
                {
                    this.state.data.map(item=>{
                        return(
                            <div className="item" key={item.id}>
                                <img src={item.author.avatar_url} />   
                                <div>
                                    {item.reply_count}/{item.visit_count}
                                </div>        
                                <button>分享</button>
                                <span className='all-title'>
                                    <Link to={`/article/${item.id}`} >{item.title}</Link>
                                </span>
                                <span className='all-time'>1小时前</span>
                            </div>

                        )
                    })
                }

                <div>
                    <ul>
                        <li><NavLink to="/home/all/1">1</NavLink></li>
                        <li><NavLink to="/home/all/2">2</NavLink></li>
                        <li><NavLink to="/home/all/3">3</NavLink></li>
                        <li><NavLink to="/home/all/4">4</NavLink></li>
                        <li><NavLink to="/home/all/5">5</NavLink></li>
                        <li><NavLink to="/home/all/6">6</NavLink></li>
                        <li><NavLink to="/home/all/7">7</NavLink></li>
                        <li><NavLink to="/home/all/8">8</NavLink></li>
                        <li><NavLink to="/home/all/9">9</NavLink></li>
                        <li><NavLink to="/home/all/10">10</NavLink></li>
                    </ul>
                </div>
                
            </div>
        )
    }
}
