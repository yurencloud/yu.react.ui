import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Input from './Input'
import Button from './Button'

const calculator = require('yu.calculator')

class Counter extends Component {
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
          'yu-counter': true,
          disabled,
          size,
        })}
        >
          <Button size={size} onClick={this.handleSub} disabled={disabled || min >= value}>-</Button>
          <Input size={size} onChange={this.handleInputChange} value={value} disabled={disabled} readOnly={readOnly} />
          <Button size={size} onClick={this.handleAdd} disabled={disabled || max <= value}>+</Button>
        </div>
      )
    }
}

export default Counter
