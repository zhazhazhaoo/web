import React, { Component } from 'react'
import { observer } from 'mobx-react'
import 'antd/dist/antd.css';
import Img from "../img/a.jpg"

@observer
class Main extends Component {

  render() {
    return (   
      <div>
        <img src={Img} alt="" />
      </div>
    )
  }
}

export default Main;