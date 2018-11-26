import React, { Component } from 'react'
import Input from '../components/Input'
import Field from '../components/Field'

class InputExample extends Component {
  handleChange(e) {
    console.log(e.target.value)
    this.value = e.target.value
  }

  render() {
    return (
      <Field>
        <Input onChange={e => this.handleChange(e)} />
      </Field>
    )
  }
}

export default InputExample
