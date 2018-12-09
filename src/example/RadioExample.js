import React, { Component } from 'react'
import Radio from '../components/Radio'
import RadioGroup from '../components/RadioGroup'

class RadioExample extends Component {
    state = { value1: false }

    onChange1 = (value) => {
      console.log(value)
      this.setState({ value1: value })
    }

    render() {
      const { value1 } = this.state
      return (
        <div className="web-example">
          <div className="web-title">单选框</div>
          <Radio label="苹果" onChange={this.onChange1} />
          <div>{ value1.toString() }</div>

          <RadioGroup>
            <Radio label="苹果" value={1} />
            <Radio label="桃子" value={2} />
            <Radio label="香蕉" value={3} />
          </RadioGroup>
        </div>
      )
    }
}

export default RadioExample
