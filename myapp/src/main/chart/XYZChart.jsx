import React, { Component } from 'react'
import ReactEcharts from 'echarts-for-react'
import { observer } from 'mobx-react'
import { observable } from 'mobx'
@observer
class XYZChart extends Component{
    @observable option={
        title:{
            text:'cold play',
            textStyle:{
                color:'#111',
                fontSize:'24',
                textShadowColor:'#11ef4e',
                textShadowOffsetX:2,
                textShadowOffsetY:2
            },
            subtext:'Yellow',
            textAlign:'auto',
        },
        grid:{
            borderColor:'red',
            backgroundColor:'#2df'
        },
        xAxis: {
            type: 'time',
            data: [1,2,3,4,5]
        },
        yAxis: {
            type: 'value',
            data: [-200, -150, -100, -50, 0, 50, 100, 150, 200]
        },
    }
    getOption = () => {
        return this.option;
    }
    render(){
        return (
            <ReactEcharts
                option={this.getOption()}
                style={{ height: '500px', width: '100%' }}
                className='XYZ_echarts' />
        )
    }
}

export default XYZChart;