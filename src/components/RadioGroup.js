import React, { Component } from 'react'

class RadioGroup extends Component {
  render() {
    const { children } = this.props
    return (
      <div className="yu-radio-group">
        {children}
      </div>
    )
  }
}

export default RadioGroup
