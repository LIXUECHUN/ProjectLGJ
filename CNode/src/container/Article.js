import React, { Component } from 'react'

export default class Article extends Component {
    constructor(){
        super();
        this.state = {
            data: {
                author:{}
            }
        }
    }
    componentDidMount() {
        // console.log(this.props.match.params.id);
        // let url = 'https://cnodejs.org/api/v1/topics/'+this.props.match.params.id;
        let url = `https://cnodejs.org/api/v1/topic/${this.props.match.params.id}`
        console.log(this.props.match.params.id);
        fetch(url)
            .then((res)=>res.json())
            .then((res)=>{
                console.log(res);
                this.setState({
                    data: res.data
                })
                // console.log(this.state.data);

            })
    }
    render() {
        return (
            <div className='ar-div'>
                <div>
                    <button>精华</button>
                    <span className='ar-ti'>{this.state.data.title}</span>
                    <br />
                    <span className='ar-at'>
                        作者：{this.state.data.author.loginname}
                    </span>
                    <span className='ar-at'> 
                        {this.state.data.visit_count} 次浏览 
                    </span>
                    <span className='ar-at'> 来自 分享 </span>
                </div>
                <hr/>
                <div>
                    <div dangerouslySetInnerHTML={{__html: this.state.data.content}}></div>
                </div>
            </div>
        )
    }
}
