import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Layout } from 'antd';
import { observer } from 'mobx-react'
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ContentC from './main/layout/ContentC'
import Main from './page/main/Main'
import { Menu } from 'antd';
import 'index.scss';


@observer
class MainComponent extends Component {

    render() {
        return (
            <Router>
                <Layout>
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        style={{ lineHeight: '64px' }}
                    >
                        <Menu.Item key="1">
                            <Link to="/main">首页</Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Link to="/content">详情</Link>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Link to="/f">关于</Link>
                        </Menu.Item>
                    </Menu>
                </Layout>
                <Route exact path="/main" component={Main} />
                <Route exact path="/content" component={ContentC} />
            </Router>
        )
    }
}

ReactDOM.render(<MainComponent />, document.getElementById('root'))