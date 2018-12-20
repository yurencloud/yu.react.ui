import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Input from './Input'

const calculator = require('yu.calculator')

class CounterSide extends Component {
    static defaultProps = {
      step: 1,
    }

    static propTypes = {
      value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      step: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      disabled: PropTypes.bool,
      onChange: PropTypes.func.isRequired,
      max: PropTypes.number,
      min: PropTypes.number,
      readonly: PropTypes.bool,
      size: PropTypes.string,
    }

    handleSub = () => {
      const {
        value, step, onChange, min,
      } = this.props

      if (typeof min === 'number' && min >= value) return

      onChange(calculator.sub(value, step))
    }

    handleAdd = () => {
      const {
        value, step, onChange, max,
      } = this.props

      if (typeof max === 'number' && max <= value) return

      onChange(calculator.add(value, step))
    }

    handleInputChange = (val) => {
      const {
        min, max, onChange,
      } = this.props
      let value = val
      if (typeof min === 'number' && min >= value) {
        value = min
      }
      if (typeof max === 'number' && max <= value) {
        value = max
      }
      onChange(value)
    }

    render() {
      const {
        disabled,
        value,
        min,
        max,
        readOnly,
        size,
      } = this.props

      return (
        <div className={classNames({
          'yu-counter-side': true,
          disabled,
          right: true,
        })}
        >
          <Input size={size} onChange={this.handleInputChange} value={value} disabled={disabled} readOnly={readOnly} />
          <div className={classNames({ button: true, [size]: size })}>
            <button type="button" onClick={this.handleSub} disabled={disabled || min >= value}><i className="iconfont icon-angle-up" /></button>
            <button type="button" onClick={this.handleAdd} disabled={disabled || max <= value}><i className="iconfont icon-angle-down" /></button>
          </div>
        </div>
      )
    }
}

export default CounterSide
