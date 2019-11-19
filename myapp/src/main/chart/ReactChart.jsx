import React, { Component } from 'react'
import ReactEcharts from 'echarts-for-react'
import { observer } from 'mobx-react'
import {observable} from 'mobx'

let Mock = require('mockjs');
const date=Mock.mock({['list|300']:['@DATETIME("yyyy-MM-dd")']}).list
@observer
class ReactChart extends Component {
    @observable  option = {
        title: {
            text: '理财产品总流动性预测T+0产品'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: [
                {
                    name: '历史预测值',
                    icon: 'circle',
                    textStyle: {
                        color: 'red'
                    }
                },
                {
                    name: '历史真实值',
                    icon: 'circle',
                    textStyle: {
                        color: 'red'
                    }
                },]
        },
         dataZoom: [
        {
            type: 'slider',
            show: true,
            xAxisIndex: [0],
            start: 1,
            end: 35
        }
        ],
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: date
        },
        yAxis: {
            type: 'value',
            data:[-200,-150,-100,-50,0,50,100,150,200]
        },
        series: [
            {
                name: '历史预测值',
                type: 'line',
                data: Mock.mock({['list|300']:[{'top|5-20':10}]}).list.map((val)=>val.top),
                markPoint: {
                    data: [
                        { type: 'max', name: '最大值' },
                        { type: 'min', name: '最小值' }
                    ]
                },
                markLine: {
                    data: [
                        { type: 'average', name: '平均值' }
                    ]
                }
            },
            {
                name: '历史真实值',
                type: 'line',
                data: Mock.mock({['list|300']:[{'low|-10-15':2}]}).list.map((val)=>val.low),
                markPoint: {
                    data: [
                        { name: '周最低', value: -2, xAxis: 1, yAxis: -1.5 }
                    ]
                },
                markLine: {
                    data: [
                        { type: 'average', name: '平均值' },
                        [{
                            symbol: 'none',
                            x: '90%',
                            yAxis: 'max'
                        }, {
                            symbol: 'circle',
                            label: {
                                normal: {
                                    position: 'start',
                                    formatter: '最大值'
                                }
                            },
                            type: 'max',
                            name: '最高点'
                        }]
                    ]
                }
            }
        ]
    }
   
    
    getOption = () => {
        return this.option;
    }
    render() {
        return (
            <ReactEcharts
                option={this.getOption()}
                style={{ height: '350px', width: '100%' }}
                className='react_for_echarts' />
        )
    }
}
export default ReactChart;