import React, { Component } from 'react';
import { renderRoutes } from 'react-router-config';
import { Layout, Menu, Breadcrumb, Icon, Avatar } from 'antd';
import CSSModules from 'react-css-modules';

import logo from './logo.svg';
import userIcon from './assets/images/avatar.png';
import email from './assets/images/email.png';
import appStyles from './App.module.css';


const { Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;
class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      collapsed: false,
      showEmail: false
    };
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  /* Emailme = (props) => {
    const showEmail = props.showEmail;
    if (showEmail) {
      return <UserGreeting />;
    }
    return <GuestGreeting />;
  } */
  emailDisplay = () => {
    this.setState({
      showEmail: !this.state.showEmail,
    });
  }

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          collapsible
          trigger={null}
          collapsed={this.state.collapsed}
          width={280} 
          styleName={this.state.collapsed ? "layoutHide" : "layout"}
        >
          <div styleName="menuHead">
            <div styleName="menuHeadTop">
              <Avatar src={userIcon} size="large" style={{ width: "54px", height: "54px", lineHeight: "54px", borderRadius: "27px" }} />
              <Icon
                styleName="menuHeadTrigger"
                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={this.toggle}
              />
            </div>
            <div data-toggle="dropdown" styleName="sidebarBrand" onClick={this.emailDisplay}>
              yang.jianan0926@gmail.com
              {this.state.showEmail ? (
                <Icon type="caret-up" styleName="caret caret-up"/>
              ) : (
                <Icon type="caret-down" styleName="caret"/>
              )}
            </div>
            {/* <img src="/assets/images/avatar.png"/> */}
          </div>
          {this.state.showEmail &&
            <div styleName="menuHeadEmail">
              <Icon styleName="email-text" type="mail" />
              <span styleName="email-text">email me</span>
            </div>
          }
          <Menu theme="light" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
              <Icon type="home" />
              <span>主页</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="desktop" />
              <span>Option 2</span>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={<span><Icon type="user" /><span>归档</span></span>}
            >
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={<span><Icon type="team" /><span>分类</span></span>}
            >
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9">
              <Icon type="file" />
              <span>File</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Content>
            {renderRoutes(this.props.route.routes)}
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            ©2018 Created by wmz
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default CSSModules(App, appStyles,{ allowMultiple: true});
