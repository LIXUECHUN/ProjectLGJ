import React, { Component } from 'react'
import {SearchBar,NavBar,Grid,Carousel,Icon} from 'antd-mobile';

{/* 宫格 */}
const arr = ['桌','床','椅','几','柜','书架','沙发','家具饰品','户外家具','全部']
const arr1=["","TopArtStudio 欧式风格精细...","顺顺工艺欧式风格塑料外框黑..."]
const arr2=["","39.95","83.99"]
const data = Array.from(arr).map((val, i) => ({
    // icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
    icon:require(`../imgs/store-s1.png`),
    text:`${val}`
}));

export default class Store extends Component {
    render() {
        return (
            <div>
                {/* ------导航栏---- */}
                <NavBar
                style={{backgroundColor:'#3fcccb',color:'white'}}
                rightContent={[
                    <Icon key="0" type="search" style={{ marginRight: '16px' }} />
                ]}
                >商城</NavBar>

                {/* ------走马灯 ----*/}
                <div style={{
                    position:'relative',
                    height:'15em',
                    width:'100%'
                }}>
                    {/* 小菜单栏 */}
                    <Icon type="ellipsis" 
                    color='#ffffff'
                    style={{
                        position:'absolute',
                        left:'4%',
                        top:'6%',
                        zIndex:'1'
                    }} />
                    {/* 搜索栏 */}
                    <SearchBar 
                    placeholder="Search" 
                    maxLength={8} 
                    style={{
                        position:'relative',
                        width:'87%',
                        left:'3.5em',
                        top:'0',
                        zIndex:'1'

                    }} />
                    {/* 走马灯 */}
                    <Carousel
                    autoplay={true}
                    infinite={true}
                    style={{
                        position:'absolute',
                        left:'0',
                        top:'0'
                    }}>
                    {[1,2].map(val => (
                        <a
                        key={val}
                        style={{ 
                            display: 'inline-block', 
                            width: '100%', 
                            height: '100%',
                        }}>
                        <img
                            src={require(`../imgs/store-banner1.png`)}
                            style={{ width: '100%',height:'100%', verticalAlign: 'top' }}
                        />
                        </a>
                    ))}
                    </Carousel>
                </div>

                {/* -----宫格------- */}
                <div>
                    <Grid data={data} activeStyle={false} columnNum='5' />
                </div> 

                {/* ------详情商品--- */}
                <div sytle={{
                    backgroundColor:'#eeeeee'
                }}>
                    {
                        [1,2,1,2].map((val,index)=>{
                            return(
                                <div key={index} 
                                style={{
                                    float:'left',
                                    display:'block',
                                    width:'50%',
                                    height:'12.5em',
                                    padding:'1em 0.5em 0 0.5em' 
                                }}
                                >
                                    <img 
                                    src={require(`../imgs/store-b${val}.png`)} 
                                    style={{
                                        width:'100%',
                                        height:'10em',
                                        margin:'0 auto'
                                    }}/>
                                    <span style={{
                                        display:'block',
                                        color:'#686868',
                                        fontSize:'0.9em'
                                    }}>
                                        {arr1[val]}
                                    </span>
                                    <span style={{
                                        color:'#black',
                                        fontSize:'0.85em'
                                    }}>
                                        ￥{arr2[val]}
                                    </span>
                                </div>
                            )
                        })
                    }
                </div>

                           
            </div>
        )
    }
}
