import React, { Component } from 'react'
import Radio from '../components/Radio'
import Field from '../components/Field'

class RadioExample extends Component {
  render() {
    return (
      <div className="web-example">
        <div className="web-title">单选框</div>
        <Radio label="苹果" />
        <Field><Radio label="苹果" /></Field>
      </div>
    )
  }
}

export default RadioExample
