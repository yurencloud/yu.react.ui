import React, { Component } from 'react'

class ButtonGroup extends Component {
  render() {
    const { children } = this.props
    return (
      <div className="yu-button-group">
        {children}
      </div>
    )
  }
}

export default ButtonGroup
