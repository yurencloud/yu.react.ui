import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

class Button extends Component {
    static defaultProps = {
      type: 'default',
      nativeType: 'button',
      plain: false,
      disabled: false,
      size: undefined,
      circle: false,
    }

    static propTypes = {
      type: PropTypes.string,
      disabled: PropTypes.bool,
      circle: PropTypes.bool,
      plain: PropTypes.bool,
      size: PropTypes.string,
      nativeType: PropTypes.string,
    }


    render() {
      const {
        children, type, nativeType, plain, disabled, size, circle,
      } = this.props

      const YuButton = classNames({
        'yu-button': true,
        [type]: type,
        plain,
        disabled,
        [size]: size,
        circle,
      })
      return (
      // eslint-disable-next-line react/button-has-type
        <button type={nativeType} className={YuButton}>
          {children}
        </button>
      )
    }
}

export default Button
