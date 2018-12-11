import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

class Input extends Component {
    static type = 'Input'

    static defaultProps = {
      type: 'text',
    }

    static propTypes = {
      type: PropTypes.string,
      placeholder: PropTypes.string,
      onChange: PropTypes.func,
      disabled: PropTypes.bool,
      clearable: PropTypes.bool,
    }

    onChange = (e) => {
      console.log(e)
    }

    render() {
      const {
        clearable, disabled, ...otherProps
      } = this.props

      return (
        <div className={classNames({
          'yu-input': true,
          disabled,
        })}
        >
          <input
            {...otherProps}
            disabled={disabled}
            onChange={this.onChange}
          />
          { clearable && <span className="clearable"><i className="iconfont icon-close-circle" onClick={this.onClear} /></span>}
        </div>
      )
    }
}

export default Input
