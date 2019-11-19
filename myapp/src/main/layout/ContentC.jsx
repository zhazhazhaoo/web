import React, { Component } from 'react'
import { Layout, Menu, Icon, Breadcrumb } from 'antd';
import { observer } from 'mobx-react'
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import ReactChart from '../chart/ReactChart'
import XYZChart from '../chart/XYZChart'
import LiquidChart from '../chart/LiquidChart'
const { Content, Sider } = Layout
const { SubMenu } = Menu;
@observer
class ContentComponent extends Component {

    render() {
        return (
            <Router>
                <Layout>
                    <Layout >
                        <Sider width={200} style={{ height: "100%", background: "#ffeeff" }}>
                            <Menu mode="inline" style={{ height: "100%", borderRight: 0 }}>
                                <SubMenu
                                    key="xyz"
                                    title={
                                        <span>
                                            <Icon type="user" />
                                            直角坐标系
                                         </span>
                                    }
                                >

                                    <Menu.Item key="1">
                                        <Link to="/content/first">First</Link>
                                    </Menu.Item>
                                    <Menu.Item key="2">
                                        <Link to="/content/second">Second</Link>
                                    </Menu.Item>
                                    <Menu.Item key="3">
                                        <Link to="/content/third">Third</Link>
                                    </Menu.Item>
                                    <Menu.Item key="4">
                                        <Link to="/content/forth">Forth</Link>
                                    </Menu.Item>

                                </SubMenu>
                                <SubMenu
                                    key="sub2"
                                    title={
                                        <span>
                                            <Icon type="laptop" />
                                            subnav 2
                                         </span>
                                    }
                                >
                                    <Menu.Item key="5">option5</Menu.Item>
                                    <Menu.Item key="6">option6</Menu.Item>
                                    <Menu.Item key="7">option7</Menu.Item>
                                    <Menu.Item key="8">option8</Menu.Item>
                                </SubMenu>
                                <SubMenu
                                    key="sub3"
                                    title={
                                        <span>
                                            <Icon type="notification" />
                                            subnav 3
                </span>
                                    }
                                >
                                    <Menu.Item key="9">option9</Menu.Item>
                                    <Menu.Item key="10">option10</Menu.Item>
                                    <Menu.Item key="11">option11</Menu.Item>
                                    <Menu.Item key="12">option12</Menu.Item>
                                </SubMenu>
                            </Menu>
                        </Sider>
                        <Layout style={{ padding: '0 24px 24px' }} className='content'>
                            <Breadcrumb style={{ margin: '16px 0' }}>
                                <Breadcrumb.Item>Home</Breadcrumb.Item>
                                <Breadcrumb.Item>List</Breadcrumb.Item>
                                <Breadcrumb.Item>App</Breadcrumb.Item>
                            </Breadcrumb>
                            <Content
                                style={{
                                    background: "#fffffe",
                                    padding: 24,
                                    margin: 0,
                                    minHeight: 560
                                }}
                            >

                                <Route exact path="/content/first" component={ReactChart} />
                                <Route exact path="/content/second" component={XYZChart} />
                                <Route exact path="/content/third" component={LiquidChart} />
                            </Content>
                        </Layout>
                    </Layout>
                </Layout>
            </Router>
        )
    }
}

export default ContentComponent;