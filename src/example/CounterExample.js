import React, { Component } from 'react'
import Counter from '../components/Counter'

class CheckboxExample extends Component {
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
          <div className="web-title">计数器</div>
          <Counter onChange={this.onChange1} value={value1} />
          <div className="web-model">{value1}</div>

          <div className="web-title">禁用</div>
          <Counter onChange={this.onChange1} value={value1} disabled />

          <div className="web-title">最大值/最小值</div>
          <Counter onChange={this.onChange1} value={value1} max={2} />
          <Counter onChange={this.onChange1} value={value1} min={-2} />
          <Counter onChange={this.onChange1} value={value1} min={-2} max={2} />

          <div className="web-title">步长（支持浮点数）</div>
          <Counter onChange={this.onChange1} value={value1} step={5} />
          <Counter onChange={this.onChange1} value={value1} step={0.1} />

          <div className="web-title">输入框只读</div>
          <Counter onChange={this.onChange1} value={value1} readOnly />

          <div className="web-title">尺寸</div>
          <Counter onChange={this.onChange1} value={value1} size="small" />
          <Counter onChange={this.onChange1} value={value1} />
          <Counter onChange={this.onChange1} value={value1} size="large" />
        </div>
      )
    }
}

export default CheckboxExample
