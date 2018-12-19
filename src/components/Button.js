import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

class Button extends PureComponent {
    static defaultProps = {
      type: 'default',
      nativeType: 'button',
    }

    static propTypes = {
      type: PropTypes.string,
      disabled: PropTypes.bool,
      circle: PropTypes.bool,
      plain: PropTypes.bool,
      size: PropTypes.string,
      nativeType: PropTypes.string,
      onClick: PropTypes.func,
    }

    handleClick = (e) => {
      const { disabled, onClick } = this.props
      if (!disabled && onClick) {
        onClick(e)
      }
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
        <button type={nativeType} className={YuButton} onClick={this.handleClick}>
          {children}
        </button>
      )
    }
}

export default Button
