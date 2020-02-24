import React, { Component } from 'react'
import { Tabs, Flex, Badge,NavBar,Icon} from 'antd-mobile';
const tabs = [
    { title: '推荐', sub: '1' },
    { title: '冬季', sub: '2' },
    { title: '宜家', sub: '3' },
    { title: '小清新', sub: '4' },
    { title: '小户型', sub: '5' },
    { title: '个性色彩', sub: '6' }
  ];

export default class Inspiration extends Component {
    render() {
        return (
            <div>
                {/* 导航栏 */}
                <NavBar
                    style={{backgroundColor:'#3fcccb',color:'white'}}
                    rightContent={
                        <Icon key="0" type="search" style={{ marginRight: '16px' }} />
                    }
                >灵感</NavBar>

                {/* 内容 */}
                <Tabs tabs={tabs} initialPage={0}>
                    <div style={{ height: '500px', backgroundColor: '#fff' }}>
                    <div style={{
                        padding:'0.6em',
                        width:'100%',
                        height:'100%'
                    }}>
                    {
                        [1,3,1].map((val,index)=>{
                            return(
                                <div>
                                    {/* 同行第一个 */}
                                    <div style={{
                                        marginRight:'0.6em',
                                        marginBottom:'0.6em',
                                        height:'15em',
                                        width:'12.5em',
                                        float:'left',
                                        // backgroundColor:'lightblue'
                                    }} key={index}>
                                        <img src={require(`../imgs/lg_0${val}.jpg`)}
                                        style={{
                                            width:'100%',
                                            height:'100%'
                                        }}
                                        key={index} />
                                    </div>
                                    {/* 同行第二个 */}
                                    <div style={{
                                        height:'15em',
                                        width:'12.5em',
                                        float:'left',
                                        backgroundColor:'lightblue',
                                        marginBottom:'0.6em'
                                    }}>
                                        <img src={require(`../imgs/lg_0${val+1}.jpg`)}
                                        style={{
                                            width:'100%',
                                            height:'100%'
                                        }}
                                        key={index} />
                                    </div>
                                    <br />
                                </div>
                            )
                        })
                    }
                    </div>
                    </div>
                </Tabs>
            </div>
        )
    }
}
