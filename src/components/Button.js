import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

class Button extends Component {
  render() {
    const {
      children, type, nativeType, plain, disabled, size,
    } = this.props

    const YuButton = classNames({
      'yu-button': true,
      [type]: type,
      plain,
      disabled,
      [size]: size,
    })
    return (
    // eslint-disable-next-line react/button-has-type
      <button type={nativeType} className={YuButton}>
        {children}
      </button>
    )
  }
}

// icon: String,
//     disabled: Boolean,
//     shape: String,
//     loading: Boolean,
//     autofocus: Boolean,
//     plain: Boolean,
//     type: {
//     type: String,
// default: 'default',
// },
// size: {
//     type: String,
// default: 'normal',
// },
// nativeType: { // 原生属性button / submit / reset
//     type: String,
// default: 'button',
// },


Button.propTypes = {
  type: PropTypes.string,
  disabled: PropTypes.bool,
  // shape: PropTypes.string,
  // loading: PropTypes.bool,
  // autofocus: PropTypes.bool,
  plain: PropTypes.bool,
  size: PropTypes.string,
  nativeType: PropTypes.string,
}

Button.defaultProps = {
  type: 'default',
  nativeType: 'button',
  plain: false,
  disabled: false,
  size: undefined,
}

export default Button
