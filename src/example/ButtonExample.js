import React, { Component } from 'react'
import Button from '../components/Button'

class ButtonExample extends Component {
  render() {
    return (
      <div className="web-example">
        <div className="web-title">按钮</div>
        <Button>按钮</Button>

        <div className="web-title">按钮颜色</div>
        <Button type="primary">主要</Button>
        <Button type="danger">危险</Button>
        <Button type="success">成功</Button>
        <Button type="warning">警告</Button>
        <Button type="info">信息</Button>

        <div className="web-title">扁平按钮</div>
        <Button type="primary" plain>主要</Button>
        <Button type="danger" plain>危险</Button>
        <Button type="success" plain>成功</Button>
        <Button type="warning" plain>警告</Button>
        <Button type="info" plain>信息</Button>


        <div className="web-title">禁用按钮</div>
        <Button type="primary" disabled>主要</Button>
        <Button type="danger" disabled>危险</Button>
        <Button type="success" disabled>成功</Button>
        <Button type="warning" disabled>警告</Button>
        <Button type="info" disabled>信息</Button>

        <div className="web-title">不同尺寸</div>
        <Button type="primary" size="large">large</Button>
        <Button type="primary">normal</Button>
        <Button type="primary" size="small">small</Button>
      </div>
    )
  }
}

export default ButtonExample
