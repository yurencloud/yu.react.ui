import React, { Component } from 'react'

class Input extends Component {
    input = {}

    saveInput(node) {
      this.input = node
    }

    render() {
      return (
        <input type="text" ref={this.saveInput} />
      )
    }
}

export default Input
