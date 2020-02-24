import React from 'react';
import { TabBar } from 'antd-mobile';
import AppHome from './AppHome';
import Inspiration from './Inspiration';
import Store from './Store';


export default class AppTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'home',
    };
  }

  render() {
    return (
      <div style={ { position: 'fixed', height: '100%', width: '100%', top: 0 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#3fcccb"
          barTintColor="white"
          hidden={this.state.hidden}
        >
          <TabBar.Item
            title="首页"
            key="Life"
            icon={
              <i style={{fontSize:20,LineHeight:'22px'}} className="iconfont icon-shouye" ></i>
            }
            selectedIcon={
              <i style={{fontSize:20,LineHeight:'22px'}} className="iconfont icon-shouye" ></i>
            }
            selected={this.state.selectedTab === 'home'}
            onPress={() => {
              this.setState({
                selectedTab: 'home',
              });
            }}
            data-seed="logId"
          >
            <AppHome />
          </TabBar.Item>
          <TabBar.Item
            title="页面2"
            icon={
              <i style={{fontSize:20,LineHeight:'22px'}} className="iconfont icon-linggan" ></i>

            }
            selectedIcon={
              <i style={{fontSize:20,LineHeight:'22px'}} className="iconfont icon-linggan" ></i>
            }
            title="灵感"
            key="linggan"
            // badge={'new'}
            selected={this.state.selectedTab === 'linggan'}
            onPress={() => {
              this.setState({
                selectedTab: 'linggan',
              });
            }}
            data-seed="logId1"
          >
            <Inspiration />
          </TabBar.Item>
          <TabBar.Item
            title="页面3"
            icon={
              <i style={{fontSize:20,LineHeight:'22px'}} className="iconfont icon-tubiao_shangcheng" ></i>
            }
            selectedIcon={
              <i style={{fontSize:20,LineHeight:'22px'}} className="iconfont icon-tubiao_shangcheng" ></i>
            }
            title="商城"
            key="store"
            // dot
            selected={this.state.selectedTab === 'greenTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'greenTab',
              });
            }}
          >
              <Store />
          </TabBar.Item>
          <TabBar.Item
            title="页面4"

            icon={
              <i style={{fontSize:20,LineHeight:'22px'}} className="iconfont icon-wode" ></i>
            }
            selectedIcon={
              <i style={{fontSize:20,LineHeight:'22px'}} className="iconfont icon-wode" ></i>
            }
            title="我的"
            key="my"
            selected={this.state.selectedTab === 'yellowTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'yellowTab',
              });
            }}
          >
              <h1>我的</h1>
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}