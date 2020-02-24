import React, { Component } from 'react'
import {Flex,NavBar,WhiteSpace,WingBlank,Carousel} from 'antd-mobile';
import banner1 from "../imgs/banner-1.png"
import banner2 from "../imgs/banner-2.png"
const arr1 = ["","热门品牌","私人搭配师","选购指南"];
export default class AppHome extends Component {
    render() {
        return (
            <div>
                {/* 导航栏 */}
                <NavBar
                    style={{backgroundColor:'#3fcccb',color:'white'}}
                >住吧家居</NavBar>
                
                {/* 走马灯 */}
                <Carousel
                    autoplay={true}
                    infinite={true}
                    >
                    {[1,2].map((val,index) => {
                        var imgpath;
                        if(val == 1){
                            imgpath = banner1;
                        }else{
                            imgpath = banner2;
                        }
                        return (
                            <img 
                            src={imgpath} 
                            key = {index}
                            style={{width:'100%',height:'280px',margin:'0'}}
                            />
                        )
                    })}
                </Carousel>
                
                {/* 弹性盒布局 */}
                <WhiteSpace size="md" />
                    <Flex className="hm-fx1" >
                        {[1,2,3].map((val,index)=>{
                            return(
                                <div className="hm-flex">       
                                    <div>{arr1[val]}</div>
                                    <img src={require(`../imgs/home-${val}.png`)}
                                     key={index} />
                                </div>
                            )
                        })}
                    </Flex>
                <WhiteSpace size="md" />

                {/* 热门推荐 */}
                <div class="hm-hot">热门推荐</div>
                <div>
                    <img 
                    src={require('../imgs/hot.png')} 
                    style={{width:'100%'}}
                    />
                </div>

            </div>    
        )
    }
}

