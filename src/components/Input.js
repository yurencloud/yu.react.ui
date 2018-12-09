import React, { Component } from 'react'

class Input extends Component {
    static defaultProps = {
      value: undefined,
      defaultValue: undefined,
      onChange() {},
    }

    input = {}

    constructor(props) {
      super(props)
      this.state = { value: 1 }
    }

    saveInput = (node) => {
      this.input = node
    }

    focus() {
      this.input.focus()
    }

    blur() {
      this.input.blur()
    }

    render() {
      const { value } = this.state
      const { onChange } = this.props
      return (
        <input type="text" ref={this.saveInput} value={value} onChange={onChange} />
      )
    }
}

export default Input
