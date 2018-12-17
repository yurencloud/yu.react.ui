import React, { Component } from 'react'
import Checkbox from '../components/Checkbox'
import CheckboxGroup from '../components/CheckboxGroup'

class CheckboxExample extends Component {
    state = {
      value1: '',
      value2: [],
      value3: [1, 2],
    }

    onChange1 = (value) => {
      this.setState({ value1: value })
    }

    onChange2 = (value) => {
      this.setState({ value2: value })
    }

    onChange3 = (value) => {
      this.setState({ value3: value })
    }

    render() {
      const { value1, value2, value3 } = this.state
      return (
        <div className="web-example">
          <div className="web-title">复选框</div>
          <Checkbox label="苹果" onChange={this.onChange1} value={1} />
          <div className="web-model">{value1}</div>

          <div className="web-title">激活</div>
          <Checkbox label="苹果" checked onChange={this.onChange1} value={1} />

          <div className="web-title">禁用</div>
          <Checkbox label="苹果" disabled onChange={this.onChange1} value={1} />
          <Checkbox label="苹果" disabled checked onChange={this.onChange1} value={1} />
          <div style={{ height: '14px' }} />

          <div className="web-title">复选框组(水平)</div>
          <CheckboxGroup onChange={this.onChange2} value={value2}>
            <Checkbox label="苹果" value={1} />
            <Checkbox label="桃子" value={2} />
            <Checkbox label="香蕉" value={3} />
          </CheckboxGroup>
          <div className="web-model">{value2}</div>

          <div className="web-title">复选框组(水平)(默认值)</div>
          <CheckboxGroup onChange={this.onChange3} value={value3}>
            <Checkbox label="苹果" value={1} />
            <Checkbox label="桃子" value={2} />
            <Checkbox label="香蕉" value={3} />
          </CheckboxGroup>
          <div className="web-model">{value3}</div>

          <div className="web-title">复选框组(垂直)</div>
          <CheckboxGroup onChange={this.onChange2} vertical value={value2}>
            <Checkbox label="苹果" value={1} />
            <Checkbox label="桃子" value={2} />
            <Checkbox label="香蕉" value={3} />
          </CheckboxGroup>
        </div>
      )
    }
}

export default CheckboxExample
