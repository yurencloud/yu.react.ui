import React, { Component } from 'react'
import Input from '../components/Input'

class InputExample extends Component {
    state = {
      value1: '',
    }

    onChange1 = (value) => {
      this.setState({ value1: value })
    }

    render() {
      const { value1 } = this.state
      return (
        <div className="web-example">
          <div className="web-title">输入框</div>
          <Input placeholder="请输入用户名" onChange={this.onChange1} value={value1} />
          <div className="web-model">{value1}</div>

          <div className="web-title">禁用</div>
          <Input disabled placeholder="请输入用户名" />

          <div className="web-title">可清除</div>
          <Input placeholder="请输入用户名" clearable onChange={this.onChange1} value={value1} />
          <div className="web-model">{value1}</div>

          <div className="web-title">图标</div>
          <Input placeholder="请输入用户名" prefixIcon="icon-user" />
          <Input placeholder="请输入用户名" suffixIcon="icon-user" />

          <div className="web-title">组合</div>
          <Input placeholder="请输入用户名" prefixIcon="icon-user">
            <div className="yu-button prepend" slot="prepend">确认</div>
          </Input>
          <Input placeholder="请输入用户名" prefixIcon="icon-user">
            <div className="yu-button append" slot="append">确认</div>
          </Input>
          <Input placeholder="请输入用户名" prefixIcon="icon-user">
            <div className="yu-button prepend" slot="prepend">确认</div>
            <div className="yu-button append" slot="append">确认</div>
          </Input>

          <div className="web-title">尺寸大小</div>
          <Input placeholder="请输入用户名" prefixIcon="icon-user" size="large" />
          <Input placeholder="请输入用户名" prefixIcon="icon-user" />
          <Input placeholder="请输入用户名" suffixIcon="icon-user" size="small" />

          <div className="web-title">100%宽</div>
          <Input placeholder="请输入用户名" prefixIcon="icon-user" full />
        </div>
      )
    }
}

export default InputExample
