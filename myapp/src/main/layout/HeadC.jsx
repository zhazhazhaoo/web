import React, { Component } from 'react'
import {  Menu} from 'antd';
import { observer } from 'mobx-react'
import 'antd/dist/antd.css';

@observer
class HeadComponent extends Component {

    render() {
        return (
            

            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['2']}
                style={{ lineHeight: '64px' }}
            >
                <Menu.Item key="1">首页</Menu.Item>
                <Menu.Item key="2">详情</Menu.Item>
                <Menu.Item key="3">关于</Menu.Item>
            </Menu>
                    
            
        )
    }
}

export default HeadComponent;