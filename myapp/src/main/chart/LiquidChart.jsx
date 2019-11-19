import React, { Component } from 'react'
import ReactEcharts from 'echarts-for-react'
import { observer } from 'mobx-react'
import { observable } from 'mobx'


@observer
class LiquidChart extends Component {
    @observable option = {
        title: {
            text: '理财产品总流动性预测T+0产品'
        },
        color : ['#9aa2b3','#fa3d44','#666a73','#2299c3'],
        tooltip:{
            trigger:'axis',
            axisPointer:{
                type:'cross',
                crossStyle:{
                    color:'#999'
                }
            },
        },
        dataZoom:[
            {
                show:true,
                type:'inside',
                filterMode:'filter',
                startValue:80,
                endValue:100
            },
            {
                show:true,
                type:'slider',
            },
        ],
        legend:{
            data:['误差','历史预测值','历史真实值','误差均线'],
            orient:'horizontal',
        },
        xAxis:[
            {
                type:'category',
                name:'日期',
                axisLine:{
                    LineStyle:{
                        color:'#666',
                        width:3
                    }
                },
                data:[]
            }
        ],
        yAxis:[
            {
                type:'value',
                name:'净交易额(亿元)',
                nameTextStyle:{
                    color:'FF0000'
                },
                axisLine:{
                    show:false,
                },
                splitLine:{
                    show:true,
                    lineStyle:{
                        color:'#FF0000'
                    }
                },
                
            }
        ]
        
    }
    getOption = () => {
        return this.option;
    }
    render(){
        return (
            <ReactEcharts
                option={this.getOption()}
                style={{ height: '500px', width: '100%' }}
                className='react_for_echarts' />
        )
    }
}
export default LiquidChart;
