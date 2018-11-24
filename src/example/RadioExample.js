import React, { Component } from 'react'
import Radio from '../components/Radio'

class RadioExample extends Component {
  render() {
    return (
      <div className="web-example">
        <div className="web-title">单选框</div>
        <Radio label="苹果" />
      </div>
    )
  }
}

export default RadioExample
