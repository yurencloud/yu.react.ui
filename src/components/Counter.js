import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { isEmpty } from '../utils/util'

class Input extends Component {
    static propTypes = {
      value: PropTypes.any,
    }

    onChange = (e) => {
      if (this.props.onChange) {
        this.props.onChange(e.target.value)
      }
    }

    render() {
      const {
        clearable, disabled, prefixIcon, suffixIcon, children, size, full, ...otherProps
      } = this.props

      if ('value' in this.props) {
        delete this.props.defaultValue
      }

      let prepend
      let append
      if (children) {
        if (children.length) {
          children.forEach((item) => {
            if (item.props.slot === 'prepend') {
              prepend = item
            }

            if (item.props.slot === 'append') {
              append = item
            }
          })
        } else {
          if (children.props.slot === 'prepend') {
            prepend = children
          }

          if (children.props.slot === 'append') {
            append = children
          }
        }
      }

      return (
        <div className={classNames({
          'yu-input': true,
          disabled,
        })}
        >
          { prepend }
          { prefixIcon && <span className="prefix icon"><i className={`iconfont ${prefixIcon}`} /></span>}
          <input
            className={classNames({
              prefix: prefixIcon,
              suffix: suffixIcon,
              prepend,
              append,
              [size]: size,
              full,
            })}
            {...otherProps}
            disabled={disabled}
            onChange={this.onChange}
          />
          { suffixIcon && <span className="suffix icon"><i className={`iconfont ${suffixIcon}`} /></span>}
          { clearable && !isEmpty(otherProps.value) && <span className="clearable"><i className="iconfont icon-close-circle" onClick={this.onClear} /></span> }
          { append }
        </div>
      )
    }
}

export default Input
