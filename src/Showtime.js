import React,{Fragment,Component} from 'react';

class ShowTime extends Component{
    constructor(props){//注意传参数，如果想在构造器中拿到数据。不想的话在render也可以
        console.log("constructor")
        super(props);//constrector()中第一行必须写super必须写在this之前
        this.state = {
            time:new Date().toLocaleString(),
            a:100,
            b:200
        }
        console.log("construment");
        //实时显示系统时间
        setInterval(()=>{
            this.setState({
                time:new Date().toLocaleString()
            })
        },1000)
    }
    shouldComponentUpdate(){
        if(this.state.a>10){
            return "shouldCompinentUpdate";
        }
        return false;
    }
    componentDidUpdate(preProps,preState,data){
        console.log("DidUpdate");
        console.log(preState);
        console.log(this.state.time);
    }
    componentDidMount(){
        return "componentDidMount"
    }
    render(){//时刻更新
        console.log("render");
        var {name,age} = this.props;
        return (
            <Fragment>
                {/* 该条件是名字长度短于5不实现 */}
                {/* 条件渲染，无指令 */}
                {name.length > 5 ? <div>姓名:{name}</div> : ""}
                {name.length >5 && <div>姓名:{name}</div>}

                <div>{this.state.time}</div>
                
                {/* 循环渲染 */}
                <div>
                    {
                        age.map((item,index)=>{
                            //key值选唯一的一个变量
                            return <p key={index}>{item}</p>
                        })
                    }
                </div>
            </Fragment>
        )
    }
}
export default ShowTime;//导出文件