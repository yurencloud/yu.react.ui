import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Button extends Component {
  render() {
    const { type } = this.props
    return (
      <div className="yu-button">
        { type }
      </div>
    )
  }
}

Button.defaultProps = {
  type: 'primary',
}

Button.propTypes = {
  type: PropTypes.string,
}

export default Button
