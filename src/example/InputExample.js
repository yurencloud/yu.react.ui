import React, { Component } from 'react'
import Input from '../components/Input'

class InputExample extends Component {
  render() {
    return (
      <div className="web-example">
        <div className="web-title">输入框</div>
        <Input placeholder="请输入用户名" />

        <div className="web-title">禁用</div>
        <Input disabled placeholder="请输入用户名" />

        <div className="web-title">可清除</div>
        <Input placeholder="请输入用户名" clearable />
      </div>
    )
  }
}

export default InputExample
